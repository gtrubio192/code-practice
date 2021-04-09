// Input
// str len: 11
// str: middle-Outz
// cipher len: 2

function processData(input) {
  var lines = input.split('\n');
  var chars = parseInt(lines[0].trim(), 10);
  var text = lines[1].trim();
  var shift = parseInt(lines[2].trim(), 10)%26;
  var output = "";
  
  for(var i=0; i<chars; i++) {
      var character = text.charCodeAt(i);
      if (character >= 65 && character <= 90) {
          character += shift;
          // if cipher went over max, rotate
          // rotated char = min + (char - max)
          if (character > 90) {
              character = 64 + (character - 90);
          }
      } else if (character >= 97 && character <= 122) {
          character += shift;
          // if cipher went over max, rotate
          // rotated char = min + (char - max)
          if (character > 122) {
              character = 96 + (character - 122);
          }
      }
      output += String.fromCharCode(character);
  }
  
  process.stdout.write(output+"\n")
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});



// *****************************************
// My code (from memory)

function rotationalCipher(input, rotationFactor) {
  // Write your code here
  let shift = rotationFactor%26;
  let output = "";
  
  for(let i = 0; i < input.length; i++) {
    let char = input.charCodeAt(i);
    // upper case
    if(char >= 65 && char <= 90) {
      char += shift
      if(char > 97) {
        char = 64 + (char - 90)
      }
    }
    else if(char >= 97 && char <= 122) {
      char += shift;
      if(char > 122) {
        char = 96 + (char - 122)
      }
    }
    output += String.fromCharCode(char);
  }
  return output;
 
}