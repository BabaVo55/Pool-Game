function Game(){

}

Game.prototype.init = function () {

    this.gameWorld = new GameWorld();
}

Game.prototype.start = function () {

    // Doesnt work??
    // this.init()

    // this.mainLoop()

    // This Does though?
    PoolGame.init()

    PoolGame.mainLoop()

}

Game.prototype.mainLoop = function() {

    Canvas.clear();
    PoolGame.gameWorld.updated();
    PoolGame.gameWorld.draw();

    requestAnimationFrame(PoolGame.mainLoop)

}

let PoolGame = new Game()