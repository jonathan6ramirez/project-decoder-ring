// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    // initialize the polybius square and the output
    let output = "";
    let square = [["a","f","l","q","v"], ["b","g","m","r","w"], ["c","h","n","s","x",], ["d", "(i/j)","o","t","y"], ["e","k","p","u","z"]];
    input = input.toLowerCase();
    // check to see if the encode is true or false
    if (encode == true){
      //loop through the string 
      for (let i = 0; i < input.length; i++){
        let currentLetter = input[i];
        //check to see if the current letter is i or j;
        if (currentLetter == "j" || currentLetter == "i"){
          output += "42"
        }
        else if (currentLetter == " "){
          output += currentLetter;
        }
        for (let j = 0; j < square.length; j++){
          let row = square[j];
          for (let k = 0; k < row.length; k++){
            let column = row[k];
            if (column == currentLetter){
              const location =  (j+1).toString() + (k+1).toString();
              output += location
            }
          }
        }

      }
      
      return output;
    }
    else if (encode == false){
      //false
      let inputLength = input.length;
      for (let i = 0; i < input.length; i++){
        let currentLetter = input[i];
        if (currentLetter == " "){
          inputLength--
        }
      }
      if (inputLength % 2 == 0){
        //console.log(inputLength);

        //if is is loop through the string of numbers
        for (let i = 0; i < input.length; i++){
          let row = input[i];
          let column = input[i += 1];
          
          //let currentIndex = 0;
          //currentIndex += row + column;
          if (row == " " || column == " "){
            output += " ";
            i--;
          }

          else {
            //console.log(square);
            let letter = square[row-1][column-1];
            //console.log(currentIndex);
            output += letter;
          }
          
        }
        
        return output;
        
      }
      else {
        return false
      }
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
