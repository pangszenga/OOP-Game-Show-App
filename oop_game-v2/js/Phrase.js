/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase)
   {
     this.phrase = phrase.toLowerCase();
     //the above is context for the Phrase
     //lowercase conversion
   }//constructor ends

   //Methods
   addPhraseToDisplay()
   {

     let arr = [...this.phrase];
     console.log(arr);

     arr.forEach(letter =>
     {
      let li = $(`<li>${letter}</li>`);
      if(letter !== ' ')
      {
        li.addClass("letter");
        $('ul').append(li);
      }
      else
      {
        let li = $(`<li>${letter}</li>`);
        li.addClass("space");
        $('ul').append(li);
      }
      return letter;
    });//forEach loop ends

    };//addPhraseToDisplay() ends

    checkLetter(input)
    {
      let arr = [...this.phrase];

      for(let i = 0; i < arr.length; i ++)
      {
        if (arr[i] == input)
        {
          console.log("true");
        }
        else
        {
          console.log(input);
        };//conditional statement ends

      };//for loop ends

    };//checkLetter() ends





   };//class end

   // checkLetter(input)
   // {
   //   for(let i = 0; i < this.phrase.length; i ++)
   //   {
   //     if (this.phrase[i] == input)
   //     {
   //       return true;
   //     }
   //     else
   //     {
   //       return false;
   //     };//conditional statement ends
   //
   //   };//for loop ends
   //
   // };//checkLetter() ends

   // showMatchedLetter(input)
   // {
   //   for(let i = 0; i < this.phrase.length; i ++)
   //   {
   //     if(input === this.phrase[i])
   //     {
   //       //life remains same
   //       //append correct letter
   //
   //     }
   //     else
   //     {
   //       //lose a life
   //     };//conditional statement ends
   //
   //   };//for loop ends
   //
   // }//end of showMatchedLetter()
