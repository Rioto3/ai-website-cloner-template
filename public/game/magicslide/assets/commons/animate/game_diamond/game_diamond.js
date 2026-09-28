(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_diamond_atlas_1", frames: [[0,322,120,120],[244,424,80,80],[244,322,100,100],[0,444,50,60],[122,322,120,120],[52,444,50,60],[0,0,320,320]]}
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



(lib.block_0_diamond_icon_0 = function() {
	this.initialize(ss["game_diamond_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.block_0_effect_0_0 = function() {
	this.initialize(ss["game_diamond_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.block_0_effect_1_0 = function() {
	this.initialize(ss["game_diamond_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.effect_kira_0_0 = function() {
	this.initialize(ss["game_diamond_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.effect_kira_1_0 = function() {
	this.initialize(ss["game_diamond_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.effect_kira_4_0 = function() {
	this.initialize(ss["game_diamond_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.effect_light_3 = function() {
	this.initialize(ss["game_diamond_atlas_1"]);
	this.gotoAndStop(6);
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


(lib.effect_light_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_light_3();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_light_3_1, new cjs.Rectangle(-160,-160,320,320), null);


(lib.effect_kira_4_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_4_0();
	this.instance.setTransform(-25,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_kira_4_0_1, new cjs.Rectangle(-25,-30,50,60), null);


(lib.effect_kira_1_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_kira_1_0_1, new cjs.Rectangle(-60,-60,120,120), null);


(lib.effect_kira_0_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_0_0();
	this.instance.setTransform(-25,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_kira_0_0_1, new cjs.Rectangle(-25,-30,50,60), null);


(lib.block_0_effect_1_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.block_0_effect_1_0();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.block_0_effect_1_0_1, new cjs.Rectangle(-50,-50,100,100), null);


(lib.block_0_effect_0_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.block_0_effect_0_0();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.block_0_effect_0_0_1, new cjs.Rectangle(-40,-40,80,80), null);


(lib.block_0_diamond_icon_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.block_0_diamond_icon_0();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.block_0_diamond_icon_0_1, new cjs.Rectangle(-60,-60,120,120), null);


(lib.effect_kira_4_0_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_4_0_1();
	this.instance.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},5,cjs.Ease.quadOut).wait(6).to({scaleX:0.9823,scaleY:0.9823},0).wait(1).to({scaleX:0.9545,scaleY:0.9545},0).wait(1).to({scaleX:0.9138,scaleY:0.9138},0).wait(1).to({scaleX:0.8567,scaleY:0.8567},0).wait(1).to({scaleX:0.7793,scaleY:0.7793},0).wait(1).to({scaleX:0.678,scaleY:0.678},0).wait(1).to({scaleX:0.5533,scaleY:0.5533},0).wait(1).to({scaleX:0.4132,scaleY:0.4132},0).wait(1).to({scaleX:0.271,scaleY:0.271},0).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-30,50,60);


(lib.effect_kira_1_0_move_spin_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},240).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.8,-84.8,169.7,169.7);


(lib.effect_kira_1_0_move_spin_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_1();
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},240).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.8,-84.8,169.7,169.7);


(lib.effect_kira_1_0_move_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_move_spin_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75},30).to({scaleX:0.5083,scaleY:0.5083,alpha:0.0352},29).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.effect_kira_1_0_move_0_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_move_spin_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75},30).to({scaleX:0.5083,scaleY:0.5083,alpha:0.0352},29).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.effect_kira_0_0_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_0_0_1();
	this.instance.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},5,cjs.Ease.quadOut).wait(5).to({scaleX:0.1,scaleY:0.1},10,cjs.Ease.quadIn).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-30,50,60);


(lib.effect_kira_1_0_move_80_50per_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_move_0_1("synched",0,false);
	this.instance.setTransform(0,-40.05,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,y:-80,startPosition:59},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-95.2,60,85.3);


(lib.effect_kira_1_0_move_80_50per_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_move_0_0("synched",0,false);
	this.instance.setTransform(0,-40.05,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,y:-80,startPosition:59},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-95.2,60,85.3);


(lib.effect_kira_1_0_move_80_38per_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_move_0_1("synched",0,false);
	this.instance.setTransform(0,-40,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-80,startPosition:59},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-91.4,45,73.9);


(lib.effect_kira_1_0_move_80_38per_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_move_0_0("synched",0,false);
	this.instance.setTransform(0,-40,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-80,startPosition:59},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-91.4,45,73.9);


(lib.effect_kira_1_0_move_80_25per_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_move_0_1("synched",0,false);
	this.instance.setTransform(0,-40,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-80,startPosition:59},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-87.6,30,62.599999999999994);


(lib.effect_kira_1_0_move_80_25per_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_kira_1_0_move_0_0("synched",0,false);
	this.instance.setTransform(0,-40,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-80,startPosition:59},59,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-87.6,30,62.599999999999994);


(lib.block_0_move_disappear_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// effect
	this.instance = new lib.effect_kira_0_0_move_0("synched",0,false);
	this.instance.setTransform(13.3,26.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(19).to({startPosition:19},0).to({_off:true},1).wait(30));

	// effect
	this.instance_1 = new lib.effect_kira_0_0_move_0("synched",0,false);
	this.instance_1.setTransform(-26.6,13.3,0.75,0.75);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(29).to({startPosition:29},0).to({_off:true},1).wait(30));

	// effect
	this.instance_2 = new lib.effect_kira_0_0_move_0("synched",0,false);
	this.instance_2.setTransform(26.6,-13.3,0.75,0.75);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(39).to({startPosition:29},0).to({_off:true},1).wait(30));

	// effect
	this.instance_3 = new lib.effect_kira_0_0_move_0("synched",0,false);
	this.instance_3.setTransform(-13.3,-26.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(49).to({startPosition:29},0).to({_off:true},1).wait(30));

	// effect
	this.instance_4 = new lib.effect_kira_0_0_move_0("synched",0,false);
	this.instance_4.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({startPosition:29},0).to({_off:true},1).wait(30));

	// effect
	this.instance_5 = new lib.effect_kira_1_0_move_80_25per_1("synched",0,false);
	this.instance_5.setTransform(0,0,0.9963,0.9963,-39.9997);

	this.instance_6 = new lib.effect_kira_1_0_move_80_50per_1("synched",0,false);
	this.instance_6.setTransform(0,0,0.9979,0.9979,-79.995);

	this.instance_7 = new lib.effect_kira_1_0_move_80_38per_1("synched",0,false);
	this.instance_7.setTransform(0,0,0.9985,0.9985,-119.9997);

	this.instance_8 = new lib.effect_kira_1_0_move_80_25per_1("synched",0,false);
	this.instance_8.setTransform(0,0,1,1,-159.9994);

	this.instance_9 = new lib.effect_kira_1_0_move_80_25per_0("synched",0,false);
	this.instance_9.setTransform(0,0,1,1,-159.9994);

	this.instance_10 = new lib.effect_kira_1_0_move_80_50per_0("synched",0,false);
	this.instance_10.setTransform(0,0,1,1,160);

	this.instance_11 = new lib.effect_kira_1_0_move_80_38per_0("synched",0,false);
	this.instance_11.setTransform(0,0,1,1,119.9996);

	this.instance_12 = new lib.effect_kira_1_0_move_80_25per_0("synched",0,false);
	this.instance_12.setTransform(0,0,1,1,80.0008);

	this.instance_13 = new lib.effect_kira_1_0_move_80_50per_0("synched",0,false);
	this.instance_13.setTransform(0,0,1,1,40.0005);

	this.instance_14 = new lib.effect_kira_1_0_move_80_38per_0("synched",0,false);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{startPosition:0}},{t:this.instance_13,p:{startPosition:0}},{t:this.instance_12,p:{startPosition:0}},{t:this.instance_11,p:{startPosition:0}},{t:this.instance_10,p:{startPosition:0}},{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}},{t:this.instance_7,p:{startPosition:0}},{t:this.instance_6,p:{startPosition:0}},{t:this.instance_5,p:{startPosition:0}}]}).to({state:[{t:this.instance_14,p:{startPosition:59}},{t:this.instance_13,p:{startPosition:59}},{t:this.instance_12,p:{startPosition:59}},{t:this.instance_11,p:{startPosition:59}},{t:this.instance_10,p:{startPosition:59}},{t:this.instance_9,p:{startPosition:59}},{t:this.instance_8,p:{startPosition:59}},{t:this.instance_7,p:{startPosition:59}},{t:this.instance_6,p:{startPosition:59}},{t:this.instance_5,p:{startPosition:59}}]},59).to({state:[]},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.2,-91.4,183.8,186.3);


// stage content:
(lib.game_diamond = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		this.stop ( ) ;
		this.dispatchEvent ( 'end' ) ;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// effect
	this.instance = new lib.block_0_effect_1_0_1();
	this.instance.setTransform(160,193.3);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2499,scaleY:1.2499,alpha:0},30,cjs.Ease.quadOut).to({_off:true},1).wait(29));

	// kira
	this.instance_1 = new lib.block_0_move_disappear_0("synched",0,false);
	this.instance_1.setTransform(157,194.9,1,1,0,0,0,-3,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// effect
	this.instance_2 = new lib.block_0_effect_0_0_1();
	this.instance_2.setTransform(160,193.3);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},45).to({_off:true},1).wait(14));

	// kira
	this.instance_3 = new lib.effect_kira_4_0_move_0("synched",0,false);
	this.instance_3.setTransform(190,58.3,0.75,0.75);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({_off:true},20).wait(10));

	// kira
	this.instance_4 = new lib.effect_kira_4_0_move_0("synched",0,false);
	this.instance_4.setTransform(130,88.3,0.75,0.75);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({_off:true},20).wait(15));

	// kira
	this.instance_5 = new lib.effect_kira_4_0_move_0("synched",0,false);
	this.instance_5.setTransform(140,33.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({_off:true},20).wait(20));

	// kira
	this.instance_6 = new lib.effect_kira_4_0_move_0("synched",0,false);
	this.instance_6.setTransform(175,103.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({_off:true},20).wait(25));

	// diamond
	this.instance_7 = new lib.block_0_diamond_icon_0_1();
	this.instance_7.setTransform(160,193.3,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.8887,scaleY:0.8887,y:53.3},10,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,y:73.3},5).wait(29).to({regY:-0.1,y:73.2},0).to({scaleX:1.2,scaleY:1.2},10,cjs.Ease.quadOut).to({regY:0,scaleX:0.1,scaleY:0.1,y:73.3},5).wait(1));

	// effect
	this.instance_8 = new lib.effect_light_3_1();
	this.instance_8.setTransform(160,193.3);
	this.instance_8.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0},30).to({_off:true},1).wait(29));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A6j9KMA1HAAAMAAAA6VMg1HAAAg");
	this.shape.setTransform(160,176.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A6jdLMAAAg6UMA1HAAAMAAAA6Ug");
	this.shape_1.setTransform(160,176.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,165.5,182,198.8);
// library properties:
lib.properties = {
	id: 'D7EF76C540BB9E46BEC142CF3D4BFB5C',
	width: 320,
	height: 353,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/game_diamond_atlas_1.png?1770317044755", id:"game_diamond_atlas_1"}
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
an.compositions['D7EF76C540BB9E46BEC142CF3D4BFB5C'] = {
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