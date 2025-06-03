const DELTA = 1 / 100;

let ballsVector = new Vector2(413, 413)
function GameWorld(){
    this.whiteBall = new Ball(new Vector2(413, 413))
    this.stick = new Stick(
        new Vector2(413, 413),
        this.whiteBall.shoot.bind(this.whiteBall))
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