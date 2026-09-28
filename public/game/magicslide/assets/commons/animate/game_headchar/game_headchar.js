(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_headchar_atlas_1", frames: [[952,0,63,225],[575,203,108,231],[245,203,166,200],[685,327,82,26],[936,330,82,23],[936,355,86,12],[769,327,82,26],[685,355,83,15],[853,330,81,25],[685,203,182,122],[0,192,243,212],[332,0,308,201],[642,0,308,201],[869,227,139,101],[904,203,31,20],[804,355,26,21],[869,203,33,22],[770,355,32,19],[413,203,160,160],[0,0,330,190]]}
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



(lib.girl_0_0_arm_left_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_arm_right_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_body_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_eyes_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_eyes_1 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_eyes_2 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_eyes_3 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_eyes_4 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_eyes_5 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_hair_0_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_hair_1_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_head_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_head_1 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_manto_0_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_mouth_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_mouth_1 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_mouth_2 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.girl_0_0_mouth_3 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ui_frame_0_girl_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.ui_frame_0_score_0 = function() {
	this.initialize(ss["game_headchar_atlas_1"]);
	this.gotoAndStop(19);
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


(lib.ui_frame_0_score_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ui_frame_0_score_0();
	this.instance.setTransform(-165,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ui_frame_0_score_0_1, new cjs.Rectangle(-165,-95,330,190), null);


(lib.ui_frame_0_girl_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ui_frame_0_girl_0();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ui_frame_0_girl_0_1, new cjs.Rectangle(-80,-80,160,160), null);


(lib.girl_0_0_mouth_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_mouth_3();
	this.instance.setTransform(54,-238,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_mouth_3_1, new cjs.Rectangle(54,-238,64,38), null);


(lib.girl_0_0_mouth_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_mouth_2();
	this.instance.setTransform(55,-240,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_mouth_2_1, new cjs.Rectangle(55,-240,66,44), null);


(lib.girl_0_0_mouth_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_mouth_1();
	this.instance.setTransform(63,-239,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_mouth_1_1, new cjs.Rectangle(63,-239,52,42), null);


(lib.girl_0_0_mouth_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_mouth_0();
	this.instance.setTransform(57,-241,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_mouth_0_1, new cjs.Rectangle(57,-241,62,40), null);


(lib.girl_0_0_manto_0_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_manto_0_0();
	this.instance.setTransform(-113,-223,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_manto_0_0_1, new cjs.Rectangle(-113,-223,278,202), null);


(lib.girl_0_0_head_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_head_1();
	this.instance.setTransform(-297,-589,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_head_1_1, new cjs.Rectangle(-297,-589,616,402), null);


(lib.girl_0_0_head_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_head_0();
	this.instance.setTransform(-297,-589,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_head_0_1, new cjs.Rectangle(-297,-589,616,402), null);


(lib.girl_0_0_hair_1_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_hair_1_0();
	this.instance.setTransform(-256,-369,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_hair_1_0_1, new cjs.Rectangle(-256,-369,486,424), null);


(lib.girl_0_0_hair_0_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_hair_0_0();
	this.instance.setTransform(-148,-422,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_hair_0_0_1, new cjs.Rectangle(-148,-422,364,244), null);


(lib.girl_0_0_eyes_5_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_eyes_5();
	this.instance.setTransform(6,-329,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_eyes_5_1, new cjs.Rectangle(6,-329,162,50), null);


(lib.girl_0_0_eyes_4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_eyes_4();
	this.instance.setTransform(3,-311,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_eyes_4_1, new cjs.Rectangle(3,-311,166,30), null);


(lib.girl_0_0_eyes_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_eyes_3();
	this.instance.setTransform(4,-328,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_eyes_3_1, new cjs.Rectangle(4,-328,164,52), null);


(lib.girl_0_0_eyes_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_eyes_2();
	this.instance.setTransform(-1,-299,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_eyes_2_1, new cjs.Rectangle(-1,-299,172,24), null);


(lib.girl_0_0_eyes_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_eyes_1();
	this.instance.setTransform(4,-322,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_eyes_1_1, new cjs.Rectangle(4,-322,164,46), null);


(lib.girl_0_0_eyes_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_eyes_0();
	this.instance.setTransform(4,-329,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_eyes_0_1, new cjs.Rectangle(4,-329,164,52), null);


(lib.girl_0_0_body_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_body_0();
	this.instance.setTransform(-188,-248,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_body_0_1, new cjs.Rectangle(-188,-248,332,400), null);


(lib.girl_0_0_arm_right_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_arm_right_0();
	this.instance.setTransform(-111,-185,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_arm_right_0_1, new cjs.Rectangle(-111,-185,216,462), null);


(lib.girl_0_0_arm_left_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_arm_left_0();
	this.instance.setTransform(75,-176,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_arm_left_0_1, new cjs.Rectangle(75,-176,126,450), null);


(lib.girl_0_0_head_0_0_surprised_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.instance = new lib.girl_0_0_eyes_3_1();
	this.instance.setTransform(99.5,-285.2,1,1,0,0,0,99.5,-285.2);

	this.instance_1 = new lib.girl_0_0_eyes_1_1();

	this.instance_2 = new lib.girl_0_0_eyes_2_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:99.5,regY:-285.2,x:99.5,y:-285.2}}]}).to({state:[{t:this.instance_1}]},35).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance,p:{regX:0,regY:0,x:0,y:0}}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance,p:{regX:0,regY:0,x:0,y:0}}]},2).to({state:[{t:this.instance,p:{regX:0,regY:0,x:0,y:0}}]},29).to({state:[]},1).wait(1));

	// mouth
	this.instance_3 = new lib.girl_0_0_mouth_1_1();
	this.instance_3.setTransform(90.4,-226,1,1,0,0,0,90.4,-226);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:true},1).wait(1));

	// head
	this.instance_4 = new lib.girl_0_0_head_0_1();
	this.instance_4.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297,-589,616,402);


(lib.girl_0_0_head_0_0_happy_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.instance = new lib.girl_0_0_eyes_4_1();
	this.instance.setTransform(99.5,-285.2,1,1,0,0,0,99.5,-285.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouth
	this.instance_1 = new lib.girl_0_0_mouth_2_1();
	this.instance_1.setTransform(90.4,-226,1,1,0,0,0,90.4,-226);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// head
	this.instance_2 = new lib.girl_0_0_head_0_1();
	this.instance_2.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl_0_0_head_0_0_happy_0, new cjs.Rectangle(-297,-589,616,402), null);


(lib.girl_0_0_hair_1_0_move_normal_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_hair_1_0_1();
	this.instance.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.2,rotation:-3.0001,x:51.2},60,cjs.Ease.quadOut).to({regX:51.1,regY:-218.4,rotation:2.9991,x:51.1,y:-218.4},120,cjs.Ease.quadInOut).to({regY:-218.3,rotation:0,y:-218.3},59,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.9,-385,514,455.8);


(lib.girl_0_0_hair_1_0_move_happy_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_hair_1_0_1();
	this.instance.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.2,rotation:-3.0001,x:51.2},15,cjs.Ease.quadOut).to({regX:51.1,rotation:3.0001,x:51.1,y:-218.25},30,cjs.Ease.quadInOut).to({regX:51.2,rotation:-3.0001,x:51.2,y:-218.2},30,cjs.Ease.quadInOut).to({regX:51.1,rotation:0,x:51.1},15,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.9,-384.9,514,455.59999999999997);


(lib.girl_0_0_hair_0_0_move_normal_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_hair_0_0_1();
	this.instance.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.2,rotation:-3.0001,x:51.2},60,cjs.Ease.quadOut).to({regX:51.1,regY:-218.4,rotation:2.9991,x:51.1,y:-218.4},120,cjs.Ease.quadInOut).to({regY:-218.3,rotation:0,y:-218.3},59,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.4,-432.3,384.9,264.70000000000005);


(lib.girl_0_0_hair_0_0_move_happy_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_hair_0_0_1();
	this.instance.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.2,rotation:-3.0001,x:51.2},15,cjs.Ease.quadOut).to({regX:51.1,rotation:3.0001,x:51.1,y:-218.25},30,cjs.Ease.quadInOut).to({regX:51.2,rotation:-3.0001,x:51.2,y:-218.2},30,cjs.Ease.quadInOut).to({regX:51.1,rotation:0,x:51.1},15,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.4,-432.1,384.9,264.5);


(lib.girl_0_0_eyes_move_blink_danger_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_eyes_5_1();

	this.instance_1 = new lib.girl_0_0_eyes_1_1();
	this.instance_1._off = true;

	this.instance_2 = new lib.girl_0_0_eyes_2_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},110).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},2).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true},3).wait(5).to({_off:false},0).to({_off:true},2).wait(110).to({_off:false},0).to({_off:true},3).wait(5).to({_off:false},0).to({_off:true},2).wait(5).to({_off:false},0).to({_off:true},3).wait(5).to({_off:false},0).to({_off:true},2).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-329,172,54);


(lib.girl_0_0_eyes_move_blink_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_eyes_0_1();

	this.instance_1 = new lib.girl_0_0_eyes_1_1();
	this.instance_1._off = true;

	this.instance_2 = new lib.girl_0_0_eyes_2_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},110).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},2).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true},3).wait(5).to({_off:false},0).to({_off:true},2).wait(110).to({_off:false},0).to({_off:true},3).wait(5).to({_off:false},0).to({_off:true},2).wait(5).to({_off:false},0).to({_off:true},3).wait(5).to({_off:false},0).to({_off:true},2).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-329,172,54);


(lib.girl_0_0_body_0_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// manto
	this.instance = new lib.girl_0_0_manto_0_0_1();
	this.instance.setTransform(43.2,-187.8,1,1,0,0,0,43.2,-187.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// arm
	this.instance_1 = new lib.girl_0_0_arm_right_0_1();
	this.instance_1.setTransform(-75,-171.2,1,1,0,0,0,-75,-171.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// body
	this.instance_2 = new lib.girl_0_0_body_0_1();
	this.instance_2.setTransform(0.1,17.2,1,1,0,0,0,0.1,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240));

	// arm
	this.instance_3 = new lib.girl_0_0_arm_left_0_1();
	this.instance_3.setTransform(126.7,-166.6,1,1,0,0,0,126.7,-166.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-248,389,525);


(lib.girl_0_0_move_surprised_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.instance = new lib.girl_0_0_head_0_0_surprised_0("synched",0,false);
	this.instance.setTransform(0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-12,startPosition:10},10,cjs.Ease.quadOut).wait(70).to({startPosition:80},0).to({y:0,startPosition:89},9,cjs.Ease.quadInOut).wait(1));

	// body
	this.instance_1 = new lib.girl_0_0_body_0_0();
	this.instance_1.setTransform(24.4,0.05,0.9999,0.9999,-6.0001,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,y:-8.05},10,cjs.Ease.quadOut).wait(70).to({y:-0.05},9,cjs.Ease.quadInOut).wait(1));

	// hair
	this.instance_2 = new lib.girl_0_0_hair_0_0_1();
	this.instance_2.setTransform(99.6,-395.9,1,1,0,0,0,99.6,-407.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-419.9},10,cjs.Ease.quadOut).wait(70).to({y:-407.9},9,cjs.Ease.quadInOut).wait(1));

	// hair
	this.instance_3 = new lib.girl_0_0_hair_1_0_1();
	this.instance_3.setTransform(90.1,-346.9,1,1,-0.0009,0,0,90.1,-358.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-362.9},10,cjs.Ease.quadOut).wait(70).to({y:-358.9},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297,-601,616,888.1);


(lib.girl_0_0_head_0_0_normal_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.instance = new lib.girl_0_0_eyes_move_blink_0("synched",0);
	this.instance.setTransform(99.5,-285.2,1,1,0,0,0,99.5,-285.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({startPosition:59},0).to({_off:true},1).wait(60).to({_off:false,startPosition:120},0).wait(120));

	// mouth
	this.instance_1 = new lib.girl_0_0_mouth_0_1();
	this.instance_1.setTransform(90.4,-226,1,1,0,0,0,90.4,-226);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:true},1).wait(60).to({_off:false},0).wait(120));

	// head
	this.instance_2 = new lib.girl_0_0_head_0_1();
	this.instance_2.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:true},1).wait(60).to({_off:false},0).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297,-589,616,402);


(lib.girl_0_0_head_0_0_move_normal_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_head_0_0_normal_0("synched",0,false);
	this.instance.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.2,rotation:-3.0001,x:51.2,startPosition:120},60,cjs.Ease.quadOut).to({regX:51.1,regY:-218.3,rotation:2.9991,x:51.1,y:-218.3,startPosition:180},120,cjs.Ease.quadInOut).to({rotation:0,startPosition:239},59,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-606.8,654.1,437.99999999999994);


(lib.girl_0_0_head_0_0_move_happy_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_head_0_0_happy_0();
	this.instance.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.2,rotation:-3.0001,x:51.2},15,cjs.Ease.quadOut).to({regX:51.1,rotation:3.0001,x:51.1,y:-218.25},30,cjs.Ease.quadInOut).to({regX:51.2,rotation:-3.0001,x:51.2,y:-218.2},30,cjs.Ease.quadInOut).to({regX:51.1,rotation:0,x:51.1},15,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-606.7,654.1,437.90000000000003);


(lib.girl_0_0_head_0_0_danger_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.instance = new lib.girl_0_0_eyes_move_blink_danger_0("synched",0);
	this.instance.setTransform(99.5,-285.2,1,1,0,0,0,99.5,-285.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({startPosition:59},0).to({_off:true},1).wait(60).to({_off:false,startPosition:120},0).wait(120));

	// mouth
	this.instance_1 = new lib.girl_0_0_mouth_3_1();
	this.instance_1.setTransform(90.4,-226,1,1,0,0,0,90.4,-226);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:true},1).wait(60).to({_off:false},0).wait(120));

	// head
	this.instance_2 = new lib.girl_0_0_head_1_1();
	this.instance_2.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:true},1).wait(60).to({_off:false},0).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297,-589,616,402);


(lib.girl_0_0_body_0_0_move_normal_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_body_0_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,rotation:0.0009,y:-4.1},60,cjs.Ease.quadOut).to({regY:0.1,rotation:-0.0009,y:4.1},120,cjs.Ease.quadInOut).to({regY:0,rotation:0,y:0},59,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-252,389,533.2);


(lib.girl_0_0_move_normal_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.instance = new lib.girl_0_0_head_0_0_move_normal_0("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// body
	this.instance_1 = new lib.girl_0_0_body_0_0_move_normal_0("synched",0);
	this.instance_1.setTransform(24.3,-0.05,0.9999,0.9999,-6.0001,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// hair
	this.instance_2 = new lib.girl_0_0_hair_0_0_move_normal_0("synched",0);
	this.instance_2.setTransform(99.6,-407.9,1,1,0,0,0,99.6,-407.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240));

	// hair
	this.instance_3 = new lib.girl_0_0_hair_1_0_move_normal_0("synched",0);
	this.instance_3.setTransform(90.1,-358.9,1,1,-0.0009,0,0,90.1,-358.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-606.8,654.1,898);


(lib.girl_0_0_move_happy_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.instance = new lib.girl_0_0_head_0_0_move_happy_0("synched",0,false);
	this.instance.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4,startPosition:15},15,cjs.Ease.quadOut).to({y:4,startPosition:30},15,cjs.Ease.quadIn).to({y:-4,startPosition:45},15,cjs.Ease.quadOut).to({y:4,startPosition:60},15,cjs.Ease.quadIn).to({y:-4,startPosition:75},15,cjs.Ease.quadOut).wait(1).to({regX:11,regY:-387.8,x:11,y:-391.7,startPosition:76},0).wait(1).to({y:-391.55,startPosition:77},0).wait(1).to({y:-391.35,startPosition:78},0).wait(1).to({y:-391.15,startPosition:79},0).wait(1).to({y:-390.85,startPosition:80},0).wait(1).to({y:-390.5,startPosition:81},0).wait(1).to({y:-390.05,startPosition:82},0).wait(1).to({y:-389.5,startPosition:83},0).wait(1).to({y:-388.9,startPosition:84},0).wait(1).to({y:-388.15,startPosition:85},0).wait(1).to({y:-387.4,startPosition:86},0).wait(1).to({y:-386.55,startPosition:87},0).wait(1).to({y:-385.7,startPosition:88},0).wait(1).to({regX:0,regY:0,x:0,y:2.95,startPosition:89},0).to({_off:true},1).wait(1));

	// body
	this.instance_1 = new lib.girl_0_0_body_0_0();
	this.instance_1.setTransform(24.4,-0.05,0.9999,0.9999,-6.0001,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:true},1).wait(1));

	// hair
	this.instance_2 = new lib.girl_0_0_hair_0_0_move_happy_0("synched",0,false);
	this.instance_2.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-4,startPosition:15},15,cjs.Ease.quadOut).to({y:4,startPosition:30},15,cjs.Ease.quadIn).to({y:-4,startPosition:45},15,cjs.Ease.quadOut).to({y:4,startPosition:60},15,cjs.Ease.quadIn).to({y:-4,startPosition:75},15,cjs.Ease.quadOut).wait(1).to({regX:34,regY:-299.9,x:34,y:-303.8,startPosition:76},0).wait(1).to({y:-303.65,startPosition:77},0).wait(1).to({y:-303.45,startPosition:78},0).wait(1).to({y:-303.25,startPosition:79},0).wait(1).to({y:-302.95,startPosition:80},0).wait(1).to({y:-302.6,startPosition:81},0).wait(1).to({y:-302.15,startPosition:82},0).wait(1).to({y:-301.6,startPosition:83},0).wait(1).to({y:-301,startPosition:84},0).wait(1).to({y:-300.25,startPosition:85},0).wait(1).to({y:-299.5,startPosition:86},0).wait(1).to({y:-298.65,startPosition:87},0).wait(1).to({y:-297.8,startPosition:88},0).wait(1).to({regX:0,regY:0,x:0,y:2.95,startPosition:89},0).to({_off:true},1).wait(1));

	// hair
	this.instance_3 = new lib.girl_0_0_hair_1_0_move_happy_0("synched",0);
	this.instance_3.setTransform(90.1,-354.9,1,1,-0.0009,0,0,90.1,-358.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({startPosition:89},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.9,-610.7,654,897.8000000000001);


(lib.girl_0_0_head_0_0_move_danger_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_head_0_0_danger_0("synched",0,false);
	this.instance.setTransform(51.1,-218.2,1,1,0,0,0,51.1,-218.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.2,rotation:-3.0001,x:51.2,startPosition:120},60,cjs.Ease.quadOut).to({regX:51.1,regY:-218.3,rotation:2.9991,x:51.1,y:-218.3,startPosition:180},120,cjs.Ease.quadInOut).to({rotation:0,startPosition:239},59,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-606.8,654.1,437.99999999999994);


(lib.girl_0_0_move_happy_0_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.girl_0_0_move_happy_0("synched",0,false);
	this.instance.setTransform(32,4,1,1,0,0,0,32,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-12,startPosition:15},15,cjs.Ease.quadOut).to({y:4,startPosition:30},15,cjs.Ease.quadIn).to({y:-12,startPosition:45},15,cjs.Ease.quadOut).to({y:4,startPosition:60},15,cjs.Ease.quadIn).to({y:-12,startPosition:75},15,cjs.Ease.quadOut).to({y:4,startPosition:89},14,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.9,-626.7,654,913.8000000000001);


(lib.girl_0_0_move_danger_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.instance = new lib.girl_0_0_head_0_0_move_danger_0("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// body
	this.instance_1 = new lib.girl_0_0_body_0_0_move_normal_0("synched",0);
	this.instance_1.setTransform(24.3,-0.05,0.9999,0.9999,-6.0001,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// hair
	this.instance_2 = new lib.girl_0_0_hair_0_0_move_normal_0("synched",0);
	this.instance_2.setTransform(99.6,-407.9,1,1,0,0,0,99.6,-407.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240));

	// hair
	this.instance_3 = new lib.girl_0_0_hair_1_0_move_normal_0("synched",0);
	this.instance_3.setTransform(90.1,-358.9,1,1,-0.0009,0,0,90.1,-358.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-606.8,654.1,898);


// stage content:
(lib.game_headchar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [119,304,329,419,659];
	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay ( 0 ) ;
	}
	this.frame_304 = function() {
		this.dispatchEvent ( 'actend' ) ;
		//this.gotoAndPlay ( 0 ) ;
		this.dispatchEvent ( 'init' ) ;
	}
	this.frame_329 = function() {
		// -----
		this.dispatchEvent ( 'actend' ) ;
		this.dispatchEvent ( 'init' ) ;
		// -----
	}
	this.frame_419 = function() {
		// -----
		this.dispatchEvent ( 'actend' ) ;
		this.dispatchEvent ( 'init' ) ;
		// -----
	}
	this.frame_659 = function() {
		this.dispatchEvent ( 'init' ) ;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(185).call(this.frame_304).wait(25).call(this.frame_329).wait(90).call(this.frame_419).wait(240).call(this.frame_659).wait(1));

	// frame
	this.instance = new lib.ui_frame_0_girl_0_1();
	this.instance.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(660));

	// レイヤー_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnqKBQjqjrAAlLQAAlLDqjqQDqjqFLAAQFMAADqDqQDqDqAAFLQAAFLjqDrQjqDqlMAAQlLAAjqjqg");
	mask.setTransform(87.5,87.5);

	// girl
	this.instance_1 = new lib.girl_0_0_move_danger_0("synched",0);
	this.instance_1.setTransform(85,190,0.3,0.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(420).to({_off:false},0).wait(240));

	// girl
	this.instance_2 = new lib.girl_0_0_move_surprised_0("synched",0,false);
	this.instance_2.setTransform(85,190,0.3,0.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(330).to({_off:false},0).to({_off:true},90).wait(240));

	// girl
	this.instance_3 = new lib.girl_0_0_move_happy_0_move_0("synched",0,false);
	this.instance_3.setTransform(85,190,0.3,0.3);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240).to({_off:false},0).to({_off:true},90).wait(330));

	// girl
	this.instance_4 = new lib.girl_0_0_move_normal_0("synched",0);
	this.instance_4.setTransform(85,190,0.3,0.3);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},240).wait(420));

	// frame
	this.instance_5 = new lib.ui_frame_0_score_0_1();
	this.instance_5.setTransform(165,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(660));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(360,640,-30,-450);
// library properties:
lib.properties = {
	id: '7F6443BF18A04B4E8DAED936C31AC01A',
	width: 720,
	height: 1280,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/game_headchar_atlas_1.png?1772819982963", id:"game_headchar_atlas_1"}
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
an.compositions['7F6443BF18A04B4E8DAED936C31AC01A'] = {
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