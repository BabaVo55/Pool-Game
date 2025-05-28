const BALL_ORIGIN = new Vector2(25, 25);

function Ball() {
    this.position = {x: 0, y: 0};
    // Wow it really did just work like that
    addEventListener('mousemove', (e) => {
    this.position.x = e.pageX
    this.position.y = e.pageY
})
}

Ball.prototype.update = function(){

}

Ball.prototype.draw = function(){
    Canvas.drawImage(sprites.whiteBall, this.position, BALL_ORIGIN);
}

document.addEventListener('mousemove', (e) => {
    console.log(e)
})