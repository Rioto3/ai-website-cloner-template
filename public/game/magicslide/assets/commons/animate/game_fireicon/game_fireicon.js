(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_fireicon_atlas_1", frames: [[804,1204,360,540],[1166,1204,360,540],[1206,602,360,540],[1568,602,360,540],[1528,1144,360,540],[0,0,400,600],[0,602,400,600],[0,1204,400,600],[402,0,400,600],[804,0,400,600],[1206,0,400,600],[1608,0,400,600],[402,602,400,600],[402,1204,400,600],[804,602,400,600]]},
		{name:"game_fireicon_atlas_2", frames: [[0,0,360,540],[362,0,360,540],[724,0,360,540],[1086,0,360,540],[1448,0,360,540]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.effect_fire_0_0 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_1 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_2 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_3 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_4 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_5 = function() {
	this.initialize(ss["game_fireicon_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_6 = function() {
	this.initialize(ss["game_fireicon_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_7 = function() {
	this.initialize(ss["game_fireicon_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_8 = function() {
	this.initialize(ss["game_fireicon_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_9 = function() {
	this.initialize(ss["game_fireicon_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_0 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_1 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_2 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_3 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_4 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_5 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_6 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_7 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_8 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.effect_fire_0_back_0_9 = function() {
	this.initialize(ss["game_fireicon_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.effect_fire_0_back_0_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_9();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_9_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_8();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_8_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_7();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_7_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_6();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_6_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_5();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_5_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_4();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_4_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_3();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_3_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_2();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_2_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_1();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_1_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_back_0_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_0();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_back_0_0_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.effect_fire_0_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_9();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_9_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_8();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_8_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_7();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_7_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_6();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_6_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_5();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_5_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_4();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_4_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_3();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_3_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_2();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_2_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_1();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_1_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_0();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_fire_0_0_1, new cjs.Rectangle(-180,-270,360,540), null);


(lib.effect_fire_0_move_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_0_1();

	this.instance_1 = new lib.effect_fire_0_1_1();

	this.instance_2 = new lib.effect_fire_0_2_1();

	this.instance_3 = new lib.effect_fire_0_3_1();

	this.instance_4 = new lib.effect_fire_0_4_1();

	this.instance_5 = new lib.effect_fire_0_5_1();

	this.instance_6 = new lib.effect_fire_0_6_1();

	this.instance_7 = new lib.effect_fire_0_7_1();

	this.instance_8 = new lib.effect_fire_0_8_1();

	this.instance_9 = new lib.effect_fire_0_9_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-270,360,540);


(lib.effect_fire_0_back_0_move_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.effect_fire_0_back_0_0_1();
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.effect_fire_0_back_0_1_1();
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.effect_fire_0_back_0_2_1();
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.effect_fire_0_back_0_3_1();
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.effect_fire_0_back_0_4_1();
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.effect_fire_0_back_0_5_1();
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.effect_fire_0_back_0_6_1();
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.effect_fire_0_back_0_7_1();
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.effect_fire_0_back_0_8_1();
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.effect_fire_0_back_0_9_1();
	this.instance_9.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-300,400,600);


(lib.effect_fire_0_move_2_back_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fire
	this.instance = new lib.effect_fire_0_move_2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// back
	this.instance_1 = new lib.effect_fire_0_back_0_move_2("synched",0);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-300,400,600);


// stage content:
(lib.game_fireicon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// image
	this.instance = new lib.effect_fire_0_move_2_back_0();
	this.instance.setTransform(90,134.95,0.45,0.45,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Avn2pIfPAAMAAAAtTI/PAAg");
	this.shape.setTransform(90,135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AvnWqMAAAgtTIfPAAMAAAAtTg");
	this.shape_1.setTransform(90,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79,124,112,157);
// library properties:
lib.properties = {
	id: 'DF919AF4EBEF0E489BD038C07B7E8D78',
	width: 180,
	height: 270,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/game_fireicon_atlas_1.png?1770304153883", id:"game_fireicon_atlas_1"},
		{src:"images/game_fireicon_atlas_2.png?1770304153883", id:"game_fireicon_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DF919AF4EBEF0E489BD038C07B7E8D78'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;