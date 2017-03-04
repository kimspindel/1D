"use strict"
var game=new Phaser.Game(1366,768,Phaser.AUTO,"",null,!1,!1),MainState=function(){}
MainState.prototype={worldHeight:20,tileSize:32,yOffset:64,xPosition:667,tickRate:300,lastTicked:Date.now(),linePiece:void 0,linePos:0,tetrisSFX:void 0,score:0,level:1,scoreText:void 0,levelText:void 0,nextPieceText:void 0,preload:function(){game.load.image("block","assets/sprites/block.png"),game.load.image("bg","assets/sprites/bg.png"),game.load.audio("tetris","assets/sfx/tetris.wav"),game.load.script("utilScript","../js/util.js"),game.load.script("directionEnumScript","../js/direction.enum.js"),game.load.script("keycodesScript","../js/keycodes.js"),game.add.text(0,0,"",{font:"56px pixelbug",fill:"#ffffff"})},create:function(){game.add.sprite(0,0,"bg"),game.stage.backgroundColor="#FFFFFF",game.scale.pageAlignHorizontally=!0,game.scale.pageAlignVertically=!0
var e=this.tileSize/16
this.tetrisSFX=game.add.audio("gameover"),this.linePiece=game.add.sprite(this.xPosition,this.linePos*this.tileSize+this.yOffset,"block"),this.linePiece.scale.set(e,e)
var t=this
game.input.keyboard.onDownCallback=function(e){keycodes.down.includes(e.key)?t.lastTicked=0:keycodes.space.includes(e.key)},this.scoreText=game.add.text(50,80,"Score: 0",{font:"56px pixelbug",fill:"#ffffff"}),this.levelText=game.add.text(50,160,"Level: 1",{font:"56px pixelbug",fill:"#ffffff"}),this.nextPieceText=game.add.text(50,220,"Next piece:",{font:"56px pixelbug",fill:"#ffffff"}),game.stage.smoothed=!1},update:function(){if(this.timeToTick()){if(this.linePos++,this.linePiece.position.x=this.linePos,this.checkTetris()&&this.tetris(),this.eatApple()){this.score++,this.scoreText.text="Score: "+this.score,snake.grow()
var e=this.tileSize/16,t=(snake.position-snake.length+1)%this.worldLength,i=this.snakeBits.create(t*this.tileSize+this.xOffset,this.yPosition,"snake")
i.scale.set(e,e),this.blopp.play(),snake.length<this.worldLength?(apple.respawn(snake.position,snake.length,this.worldLength),this.appleBit.position.x=apple.position*this.tileSize+this.xOffset):this.appleBit.destroy()}}else this.gameOver},timeToTick:function(){var e=!1
return Date.now()-this.lastTicked>=this.tickRate&&(this.lastTicked=Date.now(),e=!0),e},checkTetris:function(){return this.linePos==this.worldHeight-5},tetris:function(){console.log("tetris!")}},game.state.add("MainState",MainState),game.state.start("MainState")