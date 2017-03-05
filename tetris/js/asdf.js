"use strict"
var game=new Phaser.Game(1366,768,Phaser.AUTO,"",null,!1,!1),MainState=function(){}
MainState.prototype={worldHeight:20,tileSize:32,yOffset:64,xPosition:384,tickRate:500,lastTicked:Date.now(),tetrising:!1,linePiece:void 0,linePos:0,tetrisSFX:void 0,blippSFX:void 0,flashRate:200,lastFlashed:Date.now(),flashes:6,maxFlashes:6,score:0,scoreThreshold:2e3,level:1,scoreText:void 0,levelText:void 0,nextPieceText:void 0,preload:function(){game.load.image("bg","assets/sprites/bg.png"),game.load.spritesheet("block","assets/sprites/block.png",16,64,2),game.load.audio("blipp","assets/sfx/blip.wav"),game.load.audio("tetris","assets/sfx/blarp.wav"),game.load.script("utilScript","../js/util.js"),game.load.script("directionEnumScript","../js/direction.enum.js"),game.load.script("keycodesScript","../js/keycodes.js"),game.add.text(0,0,"",{font:"32px pixelbug",fill:"#ffffff"})},create:function(){game.add.sprite(0,0,"bg"),game.stage.backgroundColor="#FFFFFF",game.scale.pageAlignHorizontally=!0,game.scale.pageAlignVertically=!0
var e=this.tileSize/16
this.tetrisSFX=game.add.audio("tetris"),this.blippSFX=game.add.audio("blipp"),this.linePiece=game.add.sprite(this.xPosition,this.linePos*this.tileSize+this.yOffset,"block"),this.linePiece.scale.set(e,e)
var t=this
game.input.keyboard.onDownCallback=function(e){t.tetrising||(keycodes.down.includes(e.key)?t.lastTicked=0:(keycodes.up.includes(e.key)||keycodes.space.includes(e.key))&&(t.lastTicked=0,t.linePos=t.worldHeight-5,t.tetrisSFX.play()))},this.scoreText=game.add.text(50,80,"Score: 0",{font:"32px pixelbug",fill:"#ffffff"}),this.levelText=game.add.text(50,120,"Level: 1",{font:"32px pixelbug",fill:"#ffffff"}),this.nextPieceText=game.add.text(50,160,"Next piece:",{font:"32px pixelbug",fill:"#ffffff"}),game.stage.smoothed=!1
var i=game.add.sprite(70,220,"block")
i.scale.set(e,e)},update:function(){this.timeToTick()&&!this.tetrising?(this.blippSFX.play(),++this.linePos,this.linePiece.position.y=this.linePos*this.tileSize+this.yOffset,this.checkTetris(),this.tetrising&&this.tetrisSFX.play()):this.tetrising&&this.tetris()},timeToTick:function(){var e=!1
return Date.now()-this.lastTicked>=this.tickRate&&(this.lastTicked=Date.now(),e=!0),e},checkTetris:function(){this.tetrising=this.linePos>=this.worldHeight-4},tetris:function(){if(Date.now()-this.lastFlashed>this.flashRate){var e=this.linePiece.frame
this.linePiece.frame=0==e?1:0,this.lastFlashed=Date.now(),--this.flashes}if(this.flashes<=0){this.lastTicked=Date.now(),this.tetrising=!1,this.flashes=this.maxFlashes,this.score+=800,this.scoreText.text="Score: "+this.score
var t=this.level
this.level=Math.floor(this.score/this.scoreThreshold)+1,this.levelText.text="Level: "+this.level,this.level!=t&&(this.tickRate-=20,this.tickRate<=20&&(this.tickRate=20)),this.linePos=-1}}},game.state.add("MainState",MainState),game.state.start("MainState")
