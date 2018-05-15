//word guesser
//lets declare two variables,
var wordElement = ['C','H','I','K','A']; //right letters

    var wordGuessed = ['_','_','_','_','_']; //wrong guessed elements 
    
    function wordGuesser(letters){
        var goodGuess;
        var moreToGuess;

        for(var i=0; i<wordElement.length; i++){ //a for loop, it will iterate till
                                                //we get the length of the array

            if(wordElement[i] == letters){ //function parameter must be equal to index of array
                wordGuessed[i] = letters;
                goodGuess = true; 
            }
        
            if(wordGuessed[i] == '_'){
            moreToGuess = true;
            }
        }
        if(goodGuess){
            console.log('Yah! you guessed right');//display when letter guessed is in the array
            console.log(wordGuessed.join(''));//combine all guessed letters to form a word
         
            if(!moreToGuess){
                console.log('YOU WON!');//output when all element in the array are complete 
            }
        }
        else {
            console.log('Ooops! that\'s not right');
        }
    }
    //invoking function; please do guess right ok??
    wordGuesser('I')
    wordGuesser('C')
    wordGuesser('J')
    wordGuesser('A')
    wordGuesser('K')
    wordGuesser('H') 