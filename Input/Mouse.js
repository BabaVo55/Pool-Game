function handleMouseMove(evt){
    let x = evt.pageX;
    let y = evt.pageY;

    Mouse.position = new Vector2(x, y);
}

function handleMouseDown(evt){
    
     handleMouseMove(evt);

     if (evt.which === 1){
        if (!Mouse.left.down)
            Mouse.left.pressed = true;
        Mouse.left.down = true;
        
    }   
    else if (evt.which === 2){
        if (!Mouse.middle.down)
            Mouse.middle.pressed = true;
        Mouse.middle.down = true;
    }
    else if( evt.which === 3){
        if (Mouse.right.down) 
            Mouse.right.pressed = true;
        Mouse.right.down
    }

}

function handleMouseUp(evt){
    handleMouseMove(evt)

    if (evt.which == 1)
        Mouse.left.down = false;
    else if (evt.which == 2)
        Mouse.middle.down = false;
    else if (evt.which == 3)
        Mouse.right.down = false;

}

function MouseHandler(){
    this.left = new ButtonState()
    this.middle = new ButtonState();
    this.right = new ButtonState();
    
    this.position = new Vector2();
    
    // document.onmousemove = handleMouseMove;
    // document.onmousedown = handleMouseDown;
    // document.onmouseup = handleMouseUp;
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

}

MouseHandler.prototype.reset = function(){
    
    this.left.pressed = false;
    this.middle.pressed = false;
    this.right.pressed = false;
    
}

let Mouse = new MouseHandler()



// // Class to track button state (pressed once vs. held down)
// function ButtonState() {
//     this.down = false;     // Is the button currently being held down?
//     this.pressed = false;  // Was the button just pressed this frame?
// }

// // Class to store 2D positions (for mouse coordinates)
// function Vector2(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
// }

// // Stores current mouse state and sets up event listeners
// function MouseHandler() {
//     // Create button state trackers for left, middle, and right mouse buttons
//     this.left = new ButtonState();
//     this.middle = new ButtonState();
//     this.right = new ButtonState();

//     // Current position of the mouse cursor
//     this.position = new Vector2();

//     // Attach mouse event listeners to the document
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mouseup', handleMouseUp);
// }

// // Called once per frame (in a game loop) to reset `pressed` after a single-use
// MouseHandler.prototype.reset = function () {
//     this.left.pressed = false;
//     this.middle.pressed = false;
//     this.right.pressed = false;
// };

// // Global instance of MouseHandler (you’ll use this to track mouse input)
// let Mouse = new MouseHandler();


// // === Event Handlers ===

// // Tracks mouse position
// function handleMouseMove(evt) {
//     let x = evt.pageX; // Horizontal mouse position
//     let y = evt.pageY; // Vertical mouse position

//     // Update the global Mouse object's position
//     Mouse.position = new Vector2(x, y);
// }

// // Handles mouse button press (left, middle, right)
// function handleMouseDown(evt) {
//     handleMouseMove(evt); // Always update mouse position first

//     // evt.which tells us which button was clicked:
//     // 1 = left, 2 = middle, 3 = right

//     if (evt.which === 1) {
//         if (!Mouse.left.down) {
//             Mouse.left.pressed = true; // Just pressed
//         }
//         Mouse.left.down = true; // Button is being held
//     } else if (evt.which === 2) {
//         if (!Mouse.middle.down) {
//             Mouse.middle.pressed = true;
//         }
//         Mouse.middle.down = true;
//     } else if (evt.which === 3) {
//         if (!Mouse.right.down) {
//             Mouse.right.pressed = true;
//         }
//         Mouse.right.down = true; // ✅ Fixed bug here: now sets to true
//     }
// }

// // Handles mouse button release
// function handleMouseUp(evt) {
//     handleMouseMove(evt); // Always update mouse position first

//     // Set the `.down` state to false when released
//     if (evt.which === 1) {
//         Mouse.left.down = false;
//     } else if (evt.which === 2) {
//         Mouse.middle.down = false;
//     } else if (evt.which === 3) {
//         Mouse.right.down = false;
//     }
// }
