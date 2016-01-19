
//Constructor Function to Create Image objects

var images = [
  ['bag', 'img/bag.jpg'],
  ['banana', 'img/banana.jpg'],
  ['boots', 'img/boots.jpg'],
  ['chair', 'img/chair.jpg'],
  ['cthulhu', 'img/cthulhu.jpg'],
  ['dragon', 'img/dragon.jpg'],
  ['pen', 'img/pen.jpg'],
  ['scissors', 'img/scissors.jpg'],
  ['shark', 'img/shark.jpg'],
  ['sweep', 'img/sweep.png'],
  ['unicorn', 'img/unicorn.jpg'],
  ['usb', 'img/usb.jpg'],
  ['water-can', 'img/water-can.jpg'],
  ['water-glass', 'img/wine-glass.jpg']
];

var imageObject = [];

var globalClicks = 0;


var randomValue1 = 0;
var randomValue2 = 0;
var randomValue3 = 0;

var Product = function (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.clicksRecieved = 0;
}

var  createObject = function() {
  for (var i = 0; i < images.length; i++) {
    imageObject.push(new Product(images[i][0], images[i][1]));
  }
}
createObject();
// create a random number
function getRandomNum() {
    return Math.floor(Math.random() * (images.length));
}


var randomValue1 = getRandomNum();
var randomValue2 = getRandomNum();
var randomValue3 = getRandomNum();

var ensureRandom = function() {
do {
  randomValue1 = getRandomNum();
}
while(randomValue1 === randomValue2);

do {
    randomValue3 = getRandomNum();
}
while(randomValue2 === randomValue3 || randomValue3 === randomValue1);
}
ensureRandom();

console.log(imageObject[randomValue1].filePath);
//
var imgOne = document.getElementById('imgOne');
imgOne.innerHTML = '<img src=' + imageObject[randomValue1].filePath + '>';
// // // create the rest of the images
var imgTwo = document.getElementById('imgTwo');
imgTwo.innerHTML = "<img src=" + imageObject[randomValue2].filePath + ">";

var imgThree = document.getElementById('imgThree');
imgThree.innerHTML = "<img src=" + imageObject[randomValue3].filePath + ">";
// //
//
// create event listender
imgOne.addEventListener('click', clickOnFirst);
//
//
// create an event handler
function clickOnFirst () {
  globalClicks += 1;
  console.log(globalClicks);
//   // (imageObject[10].filePath).clicksRecieved += 1;
//   // console.log((imageObject[10].filePath).clicksRecieved);
//refresh the images
  var randomValue1 = getRandomNum();
  var randomValue2 = getRandomNum();
  var randomValue3 = getRandomNum();
  do {
    randomValue1 = getRandomNum();
  }
  while(randomValue1 === randomValue2);

  do {
      randomValue3 = getRandomNum();
  }
  while(randomValue2 === randomValue3 || randomValue3 === randomValue1);


  ensureRandom();

  var imgOne = document.getElementById('imgOne');
  imgOne.innerHTML = '<img src=' + imageObject[randomValue1].filePath + '>';

  var imgTwo = document.getElementById('imgTwo');
  imgTwo.innerHTML = "<img src=" + imageObject[randomValue2].filePath + ">";

  var imgThree = document.getElementById('imgThree');
  imgThree.innerHTML = "<img src=" + imageObject[randomValue3].filePath + ">";

}






////SECOND EVENT handler


// create event listender
imgTwo.addEventListener('click', clickOnSecond);
//
//
// create an event handler
function clickOnSecond () {
  globalClicks += 1;
  console.log(globalClicks);
//   // (imageObject[10].filePath).clicksRecieved += 1;
//   // console.log((imageObject[10].filePath).clicksRecieved);
//refresh the images
  var randomValue1 = getRandomNum();
  var randomValue2 = getRandomNum();
  var randomValue3 = getRandomNum();
  do {
    randomValue1 = getRandomNum();
  }
  while(randomValue1 === randomValue2);

  do {
      randomValue3 = getRandomNum();
  }
  while(randomValue2 === randomValue3 || randomValue3 === randomValue1);

  ensureRandom();

  var imgOne = document.getElementById('imgOne');
  imgOne.innerHTML = '<img src=' + imageObject[randomValue1].filePath + '>';

  var imgTwo = document.getElementById('imgTwo');
  imgTwo.innerHTML = "<img src=" + imageObject[randomValue2].filePath + ">";

  var imgThree = document.getElementById('imgThree');
  imgThree.innerHTML = "<img src=" + imageObject[randomValue3].filePath + ">";

}
//CREATE 3rd IMAGE HANDLER
imgThree.addEventListener('click', clickOnThird);
//
//
// create an event handler
function clickOnThird () {
  globalClicks += 1;
  console.log(globalClicks);
//   // (imageObject[10].filePath).clicksRecieved += 1;
//   // console.log((imageObject[10].filePath).clicksRecieved);
//refresh the images
  var randomValue1 = getRandomNum();
  var randomValue2 = getRandomNum();
  var randomValue3 = getRandomNum();
  do {
    randomValue1 = getRandomNum();
  }
  while(randomValue1 === randomValue2);

  do {
      randomValue3 = getRandomNum();
  }
  while(randomValue2 === randomValue3 || randomValue3 === randomValue1);

  ensureRandom();

  var imgOne = document.getElementById('imgOne');
  imgOne.innerHTML = '<img src=' + imageObject[randomValue1].filePath + '>';

  var imgTwo = document.getElementById('imgTwo');
  imgTwo.innerHTML = "<img src=" + imageObject[randomValue2].filePath + ">";

  var imgThree = document.getElementById('imgThree');
  imgThree.innerHTML = "<img src=" + imageObject[randomValue3].filePath + ">";

}

//How to have the results button appear
// var results = function () {
//   while (globalClicks < 2) {
//     document.getElementById("resulting").hidden=true;
//     // var buttonResults = document.getElementById('results');
//     // // var hidden = buttonResults.getAttribute("hidden");
//     // hidden = true;
//   }
}

results();
