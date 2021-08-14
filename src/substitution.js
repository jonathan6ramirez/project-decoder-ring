// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //declare global variables
    let output = "";
    const correctAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //check the length of the provided alphabet
    if (alphabet == undefined || alphabet.length != 26){
      return false;
    }
    //check to see if any characters repeat in the provided alphabet
    for (let i = 0; i < alphabet.length; i++){
      const currentLetter = alphabet[i];
      if (alphabet.indexOf(currentLetter) !== alphabet.lastIndexOf(currentLetter)){
        return false
      }
    }
    
    //WE WANT TO ENCODE THE MESSAGE
    if (encode == true){
      //set the input to lowercase
      lowerCase = input.toLowerCase();
      //loop through the input
      for (let i = 0; i < lowerCase.length; i++){
        const currentLetter = lowerCase[i];
        //check to see if the current letter is a space
        if (currentLetter == " "){
          output += currentLetter;
        }

        else {
          const index = correctAlphabet.indexOf(currentLetter);
          output += alphabet[index];
        }
      }
      return output;
    }

    //WE WANT TO DECODE THE MESSAGE
    else if (encode == false){
      //set the input to lower case
      lowerCase = input.toLowerCase();
      //loop through the input
      for (let i = 0; i < lowerCase.length; i++){
        const currentLetter = lowerCase[i];
        //check to see if the current letter is a space
        if (currentLetter == " "){
          output += currentLetter;
        }

        else {
          const index = alphabet.indexOf(currentLetter);
          output += correctAlphabet[index];
        }
      }
      
      return output;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
