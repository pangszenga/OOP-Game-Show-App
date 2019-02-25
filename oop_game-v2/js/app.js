/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

//Start Game
$("#btn__reset").on("click", function(e)
{
  game.startGame();

});//event listener ends

//Key click handler
$('.key').on("click", function(e)
{
  game.handleInteraction(e);
});//event listener ends
