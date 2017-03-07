'use strict';


function TestScene(image) {
  Scene.call(this);
  this.img = new StaticImage(500, 500, 500, 500, image);
  this.addActor(this.img);
  
  console.log("created Test Scene");
}

_inherits(TestScene, Scene);

