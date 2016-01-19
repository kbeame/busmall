
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


var Product = function (productName, filePath, identify) {
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
//create a random number
function getRandomNum() {
    return Math.floor(Math.random() * (images.length));
}

getRandomNum();
// function firstSection () {

var imgOne = document.getElementById('imgOne');
imgOne.innerHTML = '<img src=' + imageObject[getRandomNum()][1] + '>';
//create the rest of the images
// var imgTwo = document.getElementById('imgTwo');
// imgTwo.innerHTML = "<img src=" + images[getRandomNum()][1] + ">";
//
// var imgThree = document.getElementById('imgThree');
// imgThree.innerHTML = "<img src=" + images[getRandomNum()][1] + ">";




//create event listender
// imgOne.addEventListener('click', clickOnFirst);


//create an event handler
// function clickOnFirst () {
//   globalClicks += 1;
//   console.log(globalClicks);
//   imageObject[random][2].clicksRecieved += 1;
//   console.log(imageObject[random][2].clicksRecieved)//how to get the array number of the item within the article instead of i
// }
