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

// Below the logic is governed 
function Stick() {
    this.position = { x: 0, y: 400 };
    this.direction = 1; // 1 for right, -1 for left
}

Stick.prototype.update = function () {
    // this.position.x += this.direction;
    this.position = Mouse.position
    if (Mouse.left.pressed) console.log('Pressed L')

    // Change direction at bounds
    // if (this.position.x >= 150 || this.position.x <= 0) {
    //     this.direction *= -1; // Flip direction
    // }
};

Stick.prototype.draw = function () {
    Canvas.drawImage(sprites.stick, this.position);
};



// class Stick {
//     constructor(){
//             this.position = {x:0, y:400};
//     }

//     draw(){
//         Canvas.drawImage(sprites.stick, this.position)
//     }
// }