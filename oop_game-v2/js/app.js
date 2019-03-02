/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

game = new Game();


//Start Game
$("#btn__reset").on("click", function(e)
{
  game.startGame();
  game.reset();
});//event listener ends

//Key click handler
$('.keyrow').on("click", ".key", function(e)
{
  game.handleInteraction(e);
});//event listener ends

//Keyboard handleInteraction
$(document).on('keyup', function(e)
{
  game.keyHandler(e);
});
