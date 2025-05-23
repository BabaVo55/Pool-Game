let ballsVector = new Vector2(413, 413)
function GameWorld(){
    this.stick = new Stick(new Vector2(413, 413))
    this.whiteBall = new Ball(new Vector2(413, 413))
}

GameWorld.prototype.updated = function() {
    this.stick.update();
    this.whiteBall.update();
}

GameWorld.prototype.draw = function() {
    Canvas.drawImage(sprites.background, {x:0,y:0});
    this.stick.draw();
    this.whiteBall.draw();
}