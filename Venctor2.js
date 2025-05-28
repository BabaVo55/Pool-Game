function Vector2(x = 0, y = 0){

    // this.x = typeof x !== 'undefined' ? x : 0;
    // this.y = typeof y !== 'undefined' ? y : 0;

    this.x = x;
    this.y = y;
    
}

 Vector2.prototype.copy = function(){
    return new Vector2(this.x, this.y)
 }