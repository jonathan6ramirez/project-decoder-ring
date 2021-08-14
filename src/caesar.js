// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    // your solution code here
    if (!shift || shift == 0 || -25 > shift || 25 < shift){
      return false;
    }

    input = input.toLowerCase();
    let output = "";
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    if (encode == true){
      for (let i = 0; i < input.length; i++){

        let currentLetter = input[i];
        let index = alphabet.indexOf(currentLetter);


        if(index == -1){
          output += currentLetter
        }
        else{
          
        if (0 < shift){
          index += shift;
            if ( 25 < index){
              index -= 26
              currentLetter = alphabet[index]
              output += currentLetter;
            }

            else {
              currentLetter = alphabet[index]
              output += currentLetter;
            }
        }

        else if (shift < 0){
            index += shift;
            if(index < 0){
              index += 26;
              currentLetter = alphabet[index];
              output += currentLetter;
            }
            else {
              currentLetter = alphabet[index];
              output += currentLetter;
            }
        }
      }
    }
      return output
  }
  else if (encode == false) {

    for (let i = 0; i < input.length; i++){

      let currentLetter = input[i];
      let index = alphabet.indexOf(currentLetter);


      if(index == -1){
        output += currentLetter
      }
      else{
        
      if (0 < shift){
        index -= shift;
          if ( index < 0){
            index += 26
            currentLetter = alphabet[index]
            output += currentLetter;
          }

          else {
            currentLetter = alphabet[index]
            output += currentLetter;
          }
      }

      else if (shift < 0){
          let newShift = Math.abs(shift);
          index += newShift;
          if(25 < index){
            index -= 26;
            currentLetter = alphabet[index];
            output += currentLetter;
          }
          else {
            currentLetter = alphabet[index];
            output += currentLetter;
          }
      }
    }
  }
    return output
  }



  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
