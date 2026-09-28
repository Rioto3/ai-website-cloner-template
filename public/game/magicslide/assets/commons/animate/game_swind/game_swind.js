(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_swind_atlas_1", frames: [[242,92,25,40],[0,0,400,90],[0,92,240,60]]}
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



(lib.effect_leaf_0 = function() {
	this.initialize(ss["game_swind_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.effect_wind_0 = function() {
	this.initialize(ss["game_swind_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.effect_wind_1 = function() {
	this.initialize(ss["game_swind_atlas_1"]);
	this.gotoAndStop(2);
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


(lib.effect_wind_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_wind_1();
	this.instance.setTransform(-480,-120,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_wind_1_1, new cjs.Rectangle(-480,-120,960,240), null);


(lib.effect_wind_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_wind_0();
	this.instance.setTransform(-800,-180,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_wind_0_1, new cjs.Rectangle(-800,-180,1600,360), null);


(lib.effect_leaf_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0();
	this.instance.setTransform(-25,-40,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_leaf_0_1, new cjs.Rectangle(-25,-40,50,80), null);


(lib.effect_wind_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_wind_1_1();
	this.instance.setTransform(0,1440);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_wind_1_0, new cjs.Rectangle(-480,1320,960,240), null);


(lib.effect_wind_0_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_wind_0_1();
	this.instance.setTransform(0,1440);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.effect_wind_0_0, new cjs.Rectangle(-800,1260,1600,360), null);


(lib.effect_leaf_0_move_spin_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewY:180},15).to({skewY:0},15).to({skewY:180},15).to({skewY:0},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-64.8,50,129.7);


(lib.effect_wind_1_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_wind_1_0();
	this.instance.setTransform(0,0,1,1,-45);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,alpha:1},30).to({scaleX:0.9999,scaleY:0.9999,rotation:43.4994,alpha:0.0352},29).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1421.9,0,2864.4,1632);


(lib.effect_wind_0_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_wind_0_0();
	this.instance.setTransform(0,0,1,1,-45);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,alpha:1},30).to({scaleX:0.9999,scaleY:0.9999,rotation:43.4994,alpha:0.0352},29).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1695.3,0,3406.5,1806.5);


(lib.effect_leaf_0_move_spin_0_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_move_spin_0("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:40,y:-60,startPosition:10},10,cjs.Ease.quadOut).to({x:-40,y:60,startPosition:30},20,cjs.Ease.quadInOut).to({x:40,y:-60,startPosition:50},20,cjs.Ease.quadInOut).to({x:0,y:0,startPosition:60},10,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-123.1,124.2,232.5);


(lib.effect_leaf_0_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_move_spin_0_move_0("synched",0);
	this.instance.setTransform(0,1440,0.9998,0.9998,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,1320.5,133,242.70000000000005);


(lib.effect_leaf_0_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_move_spin_0_move_0("synched",0);
	this.instance.setTransform(0.05,1440,0.9999,0.9999,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,1372.7,242.60000000000002,133.0999999999999);


(lib.effect_leaf_0_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_move_spin_0_move_0("synched",0);
	this.instance.setTransform(-0.05,1440.05,0.9999,0.9999,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.2,1374.1,242.7,133.20000000000005);


(lib.effect_leaf_0_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_move_spin_0_move_0("synched",0);
	this.instance.setTransform(-0.05,1439.95,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,1316.7,133.1,242.70000000000005);


(lib.effect_wind_move_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_6
	this.instance = new lib.effect_wind_0_move_0("synched",0);
	this.instance.setTransform(0,-1260);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({_off:true},60).wait(15));

	// レイヤー_5
	this.instance_1 = new lib.effect_wind_1_move_0("synched",0);
	this.instance_1.setTransform(0,-1380);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true},60).wait(30));

	// レイヤー_4
	this.instance_2 = new lib.effect_wind_1_move_0("synched",0);
	this.instance_2.setTransform(0,-1620);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({_off:true},60).wait(45));

	// レイヤー_1
	this.instance_3 = new lib.effect_wind_0_move_0("synched",0);
	this.instance_3.setTransform(0,-1500);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},60).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1695.3,-1174.7,3406.3999999999996,1721.2);


(lib.effect_leaf_0_3_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_3("synched",0);
	this.instance.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,startPosition:30},30).to({scaleX:0.9999,scaleY:0.9999,rotation:43.4994,startPosition:59},29).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1024,0,2082.2,1435.3);


(lib.effect_leaf_0_2_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_2("synched",0);
	this.instance.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,startPosition:30},30).to({scaleX:0.9999,scaleY:0.9999,rotation:43.4994,startPosition:59},29).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1023.9,0,2067.1,1508);


(lib.effect_leaf_0_1_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_1_1("synched",0);
	this.instance.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,startPosition:30},30).to({scaleX:0.9999,scaleY:0.9999,rotation:43.4994,startPosition:59},29).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1047.2,0,2090.4,1473.4);


(lib.effect_leaf_0_0_move_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_leaf_0_0("synched",0);
	this.instance.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,startPosition:30},30).to({scaleX:0.9999,scaleY:0.9999,rotation:43.4994,startPosition:59},29).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1009.4,0,2067.5,1556.6);


(lib.effect_leaf_move_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_6
	this.instance = new lib.effect_leaf_0_2_move_0("synched",0);
	this.instance.setTransform(0,-1260);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({_off:true},60).wait(15));

	// レイヤー_5
	this.instance_1 = new lib.effect_leaf_0_1_move_0("synched",0);
	this.instance_1.setTransform(0,-1380);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true},60).wait(30));

	// レイヤー_4
	this.instance_2 = new lib.effect_leaf_0_3_move_0("synched",0);
	this.instance_2.setTransform(0,-1620);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({_off:true},60).wait(45));

	// レイヤー_1
	this.instance_3 = new lib.effect_leaf_0_0_move_0("synched",0);
	this.instance_3.setTransform(0,-1500);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},60).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1047.2,-626.7,2105.4,874.7);


(lib.effect_wind_move_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// leaf
	this.instance = new lib.effect_leaf_move_0("synched",0);
	this.instance.setTransform(360,540);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(105));

	// leaf
	this.instance_1 = new lib.effect_leaf_move_0("synched",0);
	this.instance_1.setTransform(360,-180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(110));

	// leaf
	this.instance_2 = new lib.effect_leaf_move_0("synched",0);
	this.instance_2.setTransform(-360,-540);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(115));

	// leaf
	this.instance_3 = new lib.effect_leaf_move_0("synched",0);
	this.instance_3.setTransform(-360,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// wind
	this.instance_4 = new lib.effect_wind_move_0("synched",0);
	this.instance_4.setTransform(360,720);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(106));

	// wind
	this.instance_5 = new lib.effect_wind_move_0("synched",0);
	this.instance_5.setTransform(360,-360);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(110));

	// wind
	this.instance_6 = new lib.effect_wind_move_0("synched",0);
	this.instance_6.setTransform(-360,-720);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).wait(113));

	// wind
	this.instance_7 = new lib.effect_wind_move_0("synched",0);
	this.instance_7.setTransform(-360,360);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(117));

	// wind
	this.instance_8 = new lib.effect_wind_move_0("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// leaf
	this.instance_9 = new lib.effect_leaf_move_0("synched",0);
	this.instance_9.setTransform(90,360,0.5,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(106));

	// leaf
	this.instance_10 = new lib.effect_leaf_move_0("synched",0);
	this.instance_10.setTransform(-90,-720,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(110));

	// leaf
	this.instance_11 = new lib.effect_leaf_move_0("synched",0);
	this.instance_11.setTransform(90,-360,0.5,0.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).wait(113));

	// leaf
	this.instance_12 = new lib.effect_leaf_move_0("synched",0);
	this.instance_12.setTransform(-90,720,0.5,0.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).wait(116));

	// leaf
	this.instance_13 = new lib.effect_leaf_move_0("synched",0);
	this.instance_13.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2055.3,-1894.7,4126.4,3161.2);


(lib.effect_wind_move_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.effect_wind_move_1("synched",0,false);
	this.instance.setTransform(360,640,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1711.1,-1254.7,4126.4,3161.2);


// stage content:
(lib.game_swind = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [119];
	// timeline functions:
	this.frame_119 = function() {
		this.stop ( ) ;
		this.dispatchEvent ( 'end' ) ;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// wind
	this.instance = new lib.effect_wind_move_2("synched",0,false);
	this.instance.setTransform(1711.15,1700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4126.5,3606.5);
// library properties:
lib.properties = {
	id: '2580DCFE0BAA574C96FE44D8260BC399',
	width: 4126,
	height: 3606,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/game_swind_atlas_1.png?1772820172553", id:"game_swind_atlas_1"}
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
an.compositions['2580DCFE0BAA574C96FE44D8260BC399'] = {
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