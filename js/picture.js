//ajascript for random photo here
//Constructor Function to Create Image objects
var imgName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb','water-can','water-glass'];
// var imgName = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb,'water-can","water-glass"];

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
  ['sweep', 'img/sweep.jpg'],
  ['unicorn', 'img/unicorn.jpg'],
  ['usb', 'img/usb.jpg'],
  ['water-can', 'img/water-can.jpg'],
  ['water-glass', 'img/water-glass.jpg']
];

var imageObject = [];


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
//create a random number
function getRandomNum() {
    return Math.floor(Math.random() * (images.length));
}
//render an image
// function renderImageOne() {
//     getRandomNum();
//     createObject();
//attach the selected random image to the image one tag
//     var imgOne = document.getElementById('imgOne');
//     var section = document.getElementsByClassName('pick')
//     imgOne.textContent = imageObject[getRandomNum()][1];
//     section.appendChild = (imgOne);
//     document.appendChild =(section);
// }
//
// renderImageOne();

var imgOne = document.getElementById('imgOne');
// var img1 = document.createElement('img');
imgOne.innerHTML = "<img src=" + images[1][1] + ">";



// img1.textContent = images[0][1];
// imgOne.appendChild(img1);
