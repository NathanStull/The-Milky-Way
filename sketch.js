'use strict';


var floor = Math.floor;
var stage = new Stage();
var attrs;
var backgroundImg;
var Test;

//Preloads the images to be used in Console
function preload() {
 backgroundImg = loadImage("images/BackgroundTest1.png");
 console.log("{IMNGASDHKJHASEGHHJASEGHJSAGHSJHEAGHJKGH");
}


function setup() {
  console.log("HECK");
 resizeCanvas(windowWidth, windowHeight);
   
 initMenuVariables();

 console.log("FGHAFGHADGHGH");
 Test = new TestScene(backgroundImg);
 stage.addScene('TestScene', Test);
 stage.transitionTo('TestScene');

}

function draw() {
  stage.draw();
}

// all these are needed to handle touch/mouse events properly
window.touchStarted = stage.touchStarted.bind(stage);
window.touchMoved = stage.touchMoved.bind(stage);
window.touchEnded = stage.touchEnded.bind(stage);
window.mousePressed = stage.mousePressed.bind(stage);
window.mouseDragged = stage.mouseDragged.bind(stage);
window.mouseReleased = stage.mouseReleased.bind(stage);

