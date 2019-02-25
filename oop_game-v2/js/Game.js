/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor (score)
   {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrases = null;
   }

   createPhrases() {
    const array = [new Phrase('Apple Crumble'),
                   new Phrase('Peach Cobbler'),
                   new Phrase('Strawberries and Cream'),
                   new Phrase('French Macarons'),
                   new Phrase('Chocolate Banana Crepes'),
                   new Phrase('Orange Cardamom Madeleines'),
                   new Phrase('Blueberry Violet Eclairs')
                  ];
    return array;
  }

   getRandomPhrase()
   {
     const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
     return randomPhrase;
   }//getRandomPhrase() ends

   startGame()
   {
     $("#overlay").hide();
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }//startGame() ends

   checkForWin()
   {
     //how many hidden letters remaining? (return BOOLEAN)
     let letter = $(".hide .letter");
     if (letter.length === 0)
     {
      return true;
      //all letters found = WIN
     }
     else
     {
      return false;
      // some letters remain = keep playing
    }//conditional statement ends


   }//checkForWin() ends

   removeLife()
   {
     for(let i = 0; i < $(".tries").lenght ; i++)
     {
       //replace heart with lost heart image
       $(".tries")[i].innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;
       //set score with this.missed
       this.missed += 1;
     };//for loop ends
   }//removeLife() ends

   gameOver()
   {
     //if game is lost
     if (this.missed === 5)
     {
       $("#overlay").show();
       $("#overlay").removeClass("win");
       $("#overlay").addClass("lose");
       $("#game-over-message").text("GAME OVER");
     }
     else
     {
       console.log("not yet");
     }//conditional statement ends


     //if game won
     if(this.checkForWin() === true)
     {
       $("#overlay").show();
       $("#overlay").removeClass("lose");
       $("#overlay").addClass("win");
       $("#game-over-message").text("You win, play again?");
     }
     else
     {
       console.log("not yet");
     }//conditional statement ends

   }//gameOver() ends

   resetGame()
   {
     conosle.log("do nothing YET");
   }//resetGame() ends

   handleInteraction(letterBtn)
   {
     //WORKING IN PROGRESS
     //match this up with the
     //phrase.CheckLetter()  BOOLEAN
     //phrase.showMatchedLetter() APPENDING to DOM 
     //game.checkForWin(), removeLife() & gameOver()

     //set up variables to use in the above methods (WHAT IS SELECTED)
     let selectedLetter = letterBtn.target;
     let



   }//handleInteraction() ends
 }
