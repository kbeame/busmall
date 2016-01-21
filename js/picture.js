'use strict';
//Constructor Function to Create Image objects
var images = [['bag', 'img/bag.jpg'],['banana', 'img/banana.jpg'],['boots', 'img/boots.jpg'],['chair', 'img/chair.jpg'],['cthulhu', 'img/cthulhu.jpg'],['dragon', 'img/dragon.jpg'],['pen', 'img/pen.jpg'],['scissors', 'img/scissors.jpg'],
['shark', 'img/shark.jpg'],['sweep', 'img/sweep.png'],['unicorn', 'img/unicorn.jpg'],['usb', 'img/usb.jpg'],['water-can', 'img/water-can.jpg'],['water-glass', 'img/wine-glass.jpg']
];

var imageObject = [];
var randomValue1,randomValue2,randomValue3;
var globalClicks = 0;

var Product = function (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.clicksReceived = 0;
  this.timesDisplayed = 0;
  this.percentClicked = 0;
};

//creates all of the objects and pushes them to the imageObject array
//clearLsArray();

function createObject() {
  for (var i = 0; i < images.length; i++) {
    imageObject.push(new Product(images[i][0], images[i][1]));
  }
}
createObject();
// create a random number
function getRandomNum() {
  return Math.floor(Math.random() * (images.length));
}

function ensureRandom ()  {
  randomValue1 = getRandomNum();
  randomValue2 = getRandomNum();
  randomValue3 = getRandomNum();
  while (randomValue1 === randomValue2) {
    randomValue2 = getRandomNum();
  }
  while (randomValue3 === randomValue2 || randomValue3 === randomValue1) {
    randomValue3 = getRandomNum();
  }
}

ensureRandom();
//append the image to the articles
var imgOne = document.getElementById('imgOne');
var imgTwo = document.getElementById('imgTwo');
var imgThree = document.getElementById('imgThree');
appendToImage ();

function appendToImage () {
  imgOne.innerHTML = '<img src=' + imageObject[randomValue1].filePath + '>';
  imgTwo.innerHTML = '<img src=' + imageObject[randomValue2].filePath + '>';
  imgThree.innerHTML = '<img src=' + imageObject[randomValue3].filePath + '>';
}

// create event listender for 1st click
imgOne.addEventListener('click', clickOnFirst);
// create an event handler for 1st click
function clickOnFirst () {
  globalClicks += 1;
  //see how often an image is displayed
  imageObject[randomValue1].timesDisplayed += 1;
  imageObject[randomValue2].timesDisplayed += 1;
  imageObject[randomValue3].timesDisplayed += 1;
  //how many clicks per image object
  imageObject[randomValue1].clicksReceived += 1;
  imageObject[randomValue1].percentClicked = (imageObject[randomValue1]. clicksReceived/imageObject[randomValue1].timesDisplayed) *100;
//Percentage of times clicked
  // imageObject[randomValue1].createPercent();
// refresh the images
  ensureRandom();
  appendToImage ();
  resultsButton();
  destroyButton();
}

////SECOND EVENT handler
// create event listener
imgTwo.addEventListener('click', clickOnSecond);
// create an event handler
function clickOnSecond (event) {
  globalClicks += 1;
  //see how often an image is displayed
  imageObject[randomValue1].timesDisplayed += 1;
  imageObject[randomValue2].timesDisplayed += 1;
  imageObject[randomValue3].timesDisplayed += 1;
  //how many clicks per image object
  imageObject[randomValue2].clicksReceived += 1;
  //Percentage of times clicked
  imageObject[randomValue2].percentClicked = (imageObject[randomValue2]. clicksReceived/imageObject[randomValue2].timesDisplayed) *100;
  //refresh the images
  ensureRandom();
  appendToImage ();
  resultsButton();
  destroyButton();
}
//CREATE 3rd IMAGE HANDLER
// create event listener
imgThree.addEventListener('click', clickOnThird);
// create an event handler
function clickOnThird () {
  globalClicks += 1;
  //see how often an image is displayed
  imageObject[randomValue1].timesDisplayed += 1;
  imageObject[randomValue2].timesDisplayed += 1;
  imageObject[randomValue3].timesDisplayed += 1;
  //how many clicks per image object
  imageObject[randomValue3].clicksReceived += 1;
  //Percentage of times clicked
  imageObject[randomValue3].percentClicked = (imageObject[randomValue3]. clicksReceived/imageObject[randomValue3].timesDisplayed) *100;
//refresh the images
  ensureRandom();
  appendToImage ();
  resultsButton();
  destroyButton();
}
// How to have the results button appear
function resultsButton() {
  if (globalClicks < 5) {
    document.getElementById('resulting').style.visibility = 'hidden';
  } else {
    document.getElementById('resulting').style.visibility = 'visible';
  }
}

function destroyButton() {
  if (globalClicks < 5) {
    document.getElementById('destroy').style.visibility = 'hidden';
  } else {
    document.getElementById('destroy').style.visibility = 'visible';
  }
}

var destroy = document.getElementById('destroy');

function clearStorage() {
  console.log('clearing local storage');
  localStorage.clear();
};

destroyButton();

destroy.addEventListener('click', clearStorage);

var chartData;

// function idk() {
//   if (chartData){
//     imageObject=JSON.parse(chartData)
//   } else {
//     console.log('local storage data is empty!');
//     localStorage.setItem('chartPersist',JSON.stringify(imageObject));
//   }
// }

resultsButton();

//add a listener to the button
var makeChart = document.getElementById('resulting');
makeChart.addEventListener('click', makeDataAppear);
//event handler for resulting button
var chartFun = document.getElementById('chartFun').getContext('2d');

var data = {
  labels: [],
  datasets: [
    {
      fillColor: 'rgba(40,19,36,0.5)',
      strokeColor: 'rgba(255,255,255,0.8)',
      data: []
    }
  ]
};

function populateChart () {
  for (var i = 0; i < imageObject.length; i++) {
    data.datasets[0].data[i] = (imageObject[i].percentClicked);
    data.labels[i] = (imageObject[i].productName);
  }
}
//button handler
function makeDataAppear() {
  // idk();
  localStorage.setItem('chartThings', JSON.stringify(imageObject));
  populateChart();
  new Chart(chartFun).Bar(data);
}


function clearLsArray() {
if (localStorage.chartThings) {
  imageObject = [];
  imageObject = JSON.parse(localStorage.chartThings);
} else {
  console.log('Local storage empty!! Initializing!');
  localStorage.setItem('chartThings', JSON.stringify(imageObject));
}
};
clearLsArray();
