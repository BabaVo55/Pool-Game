const BALL_ORIGIN = new Vector2(25, 25);

function Ball(position) {
    this.position = position;
    this.velocity = new Vector2()
    // Wow it really did just work like that
    // addEventListener('mousemove', (e) => {
    // this.position.x = e.pageX
    // this.position.y = e.pageY
// })
}

Ball.prototype.update = function(){

}

Ball.prototype.draw = function(){
    Canvas.drawImage(sprites.whiteBall, this.position, BALL_ORIGIN);
}

Ball.prototype.shoot = function (power, rotation){
    this.velocity = new Vector2(Math.cos(rotation), Math.sin(rotation));
}

// document.addEventListener('mousemove', (e) => {
//     console.log(e)
// })