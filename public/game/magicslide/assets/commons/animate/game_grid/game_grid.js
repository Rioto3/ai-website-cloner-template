(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_grid_atlas_1", frames: [[0,0,656,816],[0,818,656,816],[0,1636,80,80]]}
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



(lib.ui_grid_0_0 = function() {
	this.initialize(ss["game_grid_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ui_grid_0_0_0 = function() {
	this.initialize(ss["game_grid_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ui_grid_0_0_1 = function() {
	this.initialize(ss["game_grid_atlas_1"]);
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


(lib.ui_grid_0_0_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ui_grid_0_0_1();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ui_grid_0_0_1_1, new cjs.Rectangle(-40,-40,80,80), null);


(lib.ui_grid_0_0_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ui_grid_0_0_0();
	this.instance.setTransform(-328,-408);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ui_grid_0_0_0_1, new cjs.Rectangle(-328,-408,656,816), null);


(lib.ui_grid_0_0_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ui_grid_0_0();
	this.instance.setTransform(-328,-408);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ui_grid_0_0_2, new cjs.Rectangle(-328,-408,656,816), null);


(lib.ui_grid_0_0_1_move_appear_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ui_grid_0_0_1_1();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.ui_grid_0_0_0_move_appear_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ui_grid_0_0_0_1();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.9336},14).to({_off:true},1).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-408,656,816);


(lib.ui_grid_0_0_move_appear_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_10
	this.instance = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance.setTransform(-280,280);

	this.instance_1 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_1.setTransform(-200,200);

	this.instance_2 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_2.setTransform(-120,120);

	this.instance_3 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_3.setTransform(280,-280);

	this.instance_4 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_4.setTransform(-40,40);

	this.instance_5 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_5.setTransform(200,-200);

	this.instance_6 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_6.setTransform(40,-40);

	this.instance_7 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_7.setTransform(120,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},40).wait(20));

	// レイヤー_11
	this.instance_8 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_8.setTransform(-280,360);

	this.instance_9 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_9.setTransform(-200,280);

	this.instance_10 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_10.setTransform(-120,200);

	this.instance_11 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_11.setTransform(280,-200);

	this.instance_12 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_12.setTransform(-40,120);

	this.instance_13 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_13.setTransform(200,-120);

	this.instance_14 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_14.setTransform(40,40);

	this.instance_15 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_15.setTransform(120,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},35).wait(25));

	// レイヤー_12
	this.instance_16 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_16.setTransform(-200,360);

	this.instance_17 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_17.setTransform(-120,280);

	this.instance_18 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_18.setTransform(280,-120);

	this.instance_19 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_19.setTransform(-40,200);

	this.instance_20 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_20.setTransform(200,-40);

	this.instance_21 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_21.setTransform(40,120);

	this.instance_22 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_22.setTransform(120,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]},30).wait(30));

	// レイヤー_13
	this.instance_23 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_23.setTransform(-120,360);

	this.instance_24 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_24.setTransform(280,-40);

	this.instance_25 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_25.setTransform(-40,280);

	this.instance_26 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_26.setTransform(200,40);

	this.instance_27 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_27.setTransform(40,200);

	this.instance_28 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_28.setTransform(120,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]},25).wait(35));

	// レイヤー_14
	this.instance_29 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_29.setTransform(280,40);

	this.instance_30 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_30.setTransform(-40,360);

	this.instance_31 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_31.setTransform(200,120);

	this.instance_32 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_32.setTransform(40,280);

	this.instance_33 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_33.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29}]},20).wait(40));

	// レイヤー_15
	this.instance_34 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_34.setTransform(280,120);

	this.instance_35 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_35.setTransform(200,200);

	this.instance_36 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_36.setTransform(40,360);

	this.instance_37 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_37.setTransform(120,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]},15).wait(45));

	// レイヤー_16
	this.instance_38 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_38.setTransform(280,200);

	this.instance_39 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_39.setTransform(200,280);

	this.instance_40 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_40.setTransform(120,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38}]},10).wait(50));

	// レイヤー_17
	this.instance_41 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_41.setTransform(280,280);

	this.instance_42 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_42.setTransform(200,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42},{t:this.instance_41}]},5).wait(55));

	// レイヤー_18
	this.instance_43 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_43.setTransform(280,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(60));

	// レイヤー_9
	this.instance_44 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_44.setTransform(-280,200);

	this.instance_45 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_45.setTransform(-200,120);

	this.instance_46 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_46.setTransform(-120,40);

	this.instance_47 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_47.setTransform(280,-360);

	this.instance_48 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_48.setTransform(-40,-40);

	this.instance_49 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_49.setTransform(200,-280);

	this.instance_50 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_50.setTransform(40,-120);

	this.instance_51 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_51.setTransform(120,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44}]},35).wait(25));

	// レイヤー_8
	this.instance_52 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_52.setTransform(-280,120);

	this.instance_53 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_53.setTransform(-200,40);

	this.instance_54 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_54.setTransform(200,-360);

	this.instance_55 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_55.setTransform(-120,-40);

	this.instance_56 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_56.setTransform(120,-280);

	this.instance_57 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_57.setTransform(-40,-120);

	this.instance_58 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_58.setTransform(40,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52}]},30).wait(30));

	// レイヤー_7
	this.instance_59 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_59.setTransform(-280,40);

	this.instance_60 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_60.setTransform(120,-360);

	this.instance_61 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_61.setTransform(-200,-40);

	this.instance_62 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_62.setTransform(40,-280);

	this.instance_63 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_63.setTransform(-120,-120);

	this.instance_64 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_64.setTransform(-40,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59}]},25).wait(35));

	// レイヤー_6
	this.instance_65 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_65.setTransform(40,-360);

	this.instance_66 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_66.setTransform(-280,-40);

	this.instance_67 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_67.setTransform(-40,-280);

	this.instance_68 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_68.setTransform(-200,-120);

	this.instance_69 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_69.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65}]},20).wait(40));

	// レイヤー_5
	this.instance_70 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_70.setTransform(-120,-280);

	this.instance_71 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_71.setTransform(-200,-200);

	this.instance_72 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_72.setTransform(-40,-360);

	this.instance_73 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_73.setTransform(-280,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70}]},15).wait(45));

	// レイヤー_4
	this.instance_74 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_74.setTransform(-200,-280);

	this.instance_75 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_75.setTransform(-120,-360);

	this.instance_76 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_76.setTransform(-280,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74}]},10).wait(50));

	// レイヤー_3
	this.instance_77 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_77.setTransform(-280,-280);

	this.instance_78 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_78.setTransform(-200,-360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_78},{t:this.instance_77}]},5).wait(55));

	// レイヤー_2
	this.instance_79 = new lib.ui_grid_0_0_1_move_appear_0("synched",0,false);
	this.instance_79.setTransform(-280,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(60));

	// レイヤー_1
	this.instance_80 = new lib.ui_grid_0_0_0_move_appear_0("synched",0,false);
	this.instance_80._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(45).to({_off:false},0).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-408,656,816);


// stage content:
(lib.game_grid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [224];
	// timeline functions:
	this.frame_224 = function() {
		this.dispatchEvent ( 'e0' ) ;
		this.stop ( ) ;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(224).call(this.frame_224).wait(1));

	// grid
	this.instance = new lib.ui_grid_0_0_move_appear_0("synched",0,false);
	this.instance.setTransform(328,408);

	this.instance_1 = new lib.ui_grid_0_0_2();
	this.instance_1.setTransform(328,408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},60).wait(165));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(328,408,328,408);
// library properties:
lib.properties = {
	id: '35DCE742256FC640B5A6922F377F6785',
	width: 656,
	height: 816,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/game_grid_atlas_1.png?1761820849088", id:"game_grid_atlas_1"}
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
an.compositions['35DCE742256FC640B5A6922F377F6785'] = {
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