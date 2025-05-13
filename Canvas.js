function Canvas2D(){
    this._canvas = document.getElementById('screen');
    this._cavnasContext = this._canvas.getContext('2d');
}

Canvas2D.prototype.clear = function(){
    this._cavnasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

Canvas2D.prototype.drawImage = function(image, position){
    this._cavnasContext.drawImage(image, position,XMLDocument, position.y);
}

