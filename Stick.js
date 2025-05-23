// function Stick(){
//     this.position = {x:0, y:400};
// }

// Stick.prototype.update = function(){

//     //Testing
//     if (this.position.x >= 0 && this.position.x <= 200){
//         this.position.x ++
//     } else {
//         this.position.x --
//     }

// }

// The above has a paradoxical buggy logic as we say if position.x > 0 
// and < 200 to go forward with position.x ++ | however when the later logic kicks in
// to push the stick back when it equals or exceeds to 200 then both logics
// clash and the stick is frozen since it goes back and forth between the two
// pixels - 199 - 200


const STICK_ORIGIN = new Vector2(970, 11)
// Below the logic is governed 
function Stick(position) {
    // this.position = { x: 0, y: 400 };
    this.position = position
    // this.position = new Vector2(400, 400)
    // this.origin = new Vector2(500, 10)
    this.direction = 1; // 1 for right, -1 for left
    this.rotation = 0;
}

Stick.prototype.update = function () {
    // this.position = Mouse.position
    // if (Mouse.left.pressed) console.log('Pressed L')
    
    // this.position.x += this.direction;

    // Change direction at bounds
    // if (this.position.x >= ballsVector + 100) {
    //     this.direction *= -1; // Flip direction
    // }

    this.updateRotation();

};

Stick.prototype.draw = function () {
    Canvas.drawImage(sprites.stick, this.position, /*this.origin*/ STICK_ORIGIN, this.rotation);
};

Stick.prototype.updateRotation = function () {
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(opposite, adjacent);



}


// class Stick {
//     constructor(){
//             this.position = {x:0, y:400};
//     }

//     draw(){
//         Canvas.drawImage(sprites.stick, this.position)
//     }
// }