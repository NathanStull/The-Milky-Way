'use strict';
var BLACK = '#000000';

function TestScene(image) {
  Scene.call(this);
  this.img = new StaticImage(0, 0, windowWidth * 0.8, windowHeight * 0.75, image);
  this.addActor(this.img);
  
  this.textBox = new textBox(0, windowHeight* 0.75, windowWidth, windowHeight * 0.25, "I AM A TEST DEL WIT IT", {size:50, leading:50}, null, BLACK);
  this.addActor(this.textBox);
  
  console.log("created Test Scene");
}

_inherits(TestScene, Scene);

