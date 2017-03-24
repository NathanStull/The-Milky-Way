'use strict';
var BLACK = '#4286f4';

function TestScene(image) {
  Scene.call(this);
  this.img = new StaticImage(0, 0, windowWidth, windowHeight, image);
  this.addActor(this.img);
  
  this.textBox = new textBox(0, windowHeight* 0.75, windowWidth, windowHeight * 0.25, "I AM A TEST DEL WIT IT", {size:50, leading:50, fill:RED, font:"Times New Roman"}, null, BLACK);
  this.addActor(this.textBox);
  this.textBox.updateText("This text is scrolling!!!!!\n It is working.");
  console.log("created Test Scene");
}

_inherits(TestScene, Scene);

