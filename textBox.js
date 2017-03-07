'use strict';


function textBox(x, y, width, height, text, textattrs, nudge, bgColor) {
  Actor.call(this, x, y, width, height);
  
  this.text = text;
  this.textattrs = _merge(_defaultTextAttrs(), textattrs);
  this.nudge = nudge === undefined ? [0, 0] : nudge;
  
   this.bgColor = color(bgColor);
   fill(this.bgColor);
   rect(this.x, this.y, this.width, this.height);
  console.log("created Text Box");
}

_inherits(textBox, Actor);

textBox.prototype.draw = function() {
  Actor.prototype.draw.call(this);

  _applyTextAttrs(this.textattrs);
  text(this.text,
       0,
       0,
       this.width,
       this.height);
};

/* this.nudge[0] ,
   this.nudge[1] + this.height/2 - this.textattrs.size/2, */
