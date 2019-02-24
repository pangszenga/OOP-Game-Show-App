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

   handleInteraction()
   {
      
   }//handleInteraction() ends


   checkForWin()
   {
     this.activePhrase.checkLetter();
   }

   // removeLife()
   // {
   //
   // }

   // gameOver()
   // {
   //
   // }
 }
