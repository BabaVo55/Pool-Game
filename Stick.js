const STICK_ORIGIN = new Vector2(970, 11)
// Below the logic is governed 
function Stick(position) {
   
    this.position = position
    this.origin = STICK_ORIGIN.copy()
    this.rotation = 0;
    this.power = 0;
}

Stick.prototype.update = function () {

    this.updateRotation();

    if (Mouse.left.down){
        this.increasePower();
    } 

};

Stick.prototype.draw = function () {
    Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
};

Stick.prototype.updateRotation = function () {
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(opposite, adjacent);

}

Stick.prototype.increasePower = function(){
    this.power += 100;
    this.origin.x += 5;
}



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


// class Stick {
//     constructor(){
//             this.position = {x:0, y:400};
//     }

//     draw(){
//         Canvas.drawImage(sprites.stick, this.position)
//     }
// }