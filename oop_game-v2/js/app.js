/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game(0);

//Start Game
$("#btn__reset").on("click", function(e)
{
  game.startGame();
});//event listener ends

//Key click handler
$('.keyrow').on('click', '.key', (e) =>
{
  game.handleInteraction(e);
});//event listener ends
