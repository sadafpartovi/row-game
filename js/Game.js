class Game {
    constructor() {
        this.board = new Board();
        this.player = this.createPlayers();
        this.ready = false;

    }



    get activePlayer() {
        return this.player.find(player => player.active);
    }




    /** 
 * Creates two player objects
 * @return  {Array}    An array of two Player objects.
 */
    createPlayers() {
        const players = [new Player("player 1", 1, "#e15258", true),
                        new Player("player 2", 2, "#e59a13")];
        

         return players;

    }
    
    // gets the game ready for play
    startGame() {
       this.board.drawHTMLBoard(); 
       this.activePlayer.activeToken.drawHTMLToken();
       this.ready = true;

    }          
}   