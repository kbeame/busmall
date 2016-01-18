//ajascript for random photo here
//Constructor Function to Create Image objects
var imgName = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb","water-can","water-glass"];
// var imgName = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb,"water-can","water-glass"];

var images = [
  ["bag", "img/bag.jpg"],
  ["banana", "img/banana.jpg"],
  ["boots", "img/boots.jpg"],
  ["chair", "img/chair.jpg"],
  ["cthulhu", "img/cthulhu.jpg"],
  ["dragon", "img/dragon.jpg"],
  ["pen", "img/pen.jpg"],
  ["scissors", "img/scissors.jpg"],
  ["shark", "img/shark.jpg"],
  ["sweep", "img/sweep.jpg"],
  ["unicorn", "img/unicorn.jpg"],
  ["usb", "img/usb.jpg"],
  ["water-can", "img/water-can.jpg"],
  ["water-glass", "img/water-glass.jpg"]
];


var Product = function (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.clicksRecieved = 0;
}

// var  createObject = function() {
//   for (var i = 0; i < images.length; i++) {
//     var imgName[i] = new Product(images[i][0], images[i][1]);
//     // console.log(imgName[i].Product);
//   }
// }
// createObject();
