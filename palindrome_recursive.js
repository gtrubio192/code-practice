
function isPalindrome(string) {

  if (string.length <= 1) {
    return true;
  }

  let [firstLetter] = string;
  // let lastLetter = string[string.length - 1];
  let lastLetter = string.slice(-1);

  if (firstLetter === lastLetter) {
    let stringWithoutFirstAndLastLetters = string.substring(
      1,
      string.length - 1
    );
    return isPalindrome(stringWithoutFirstAndLastLetters);
  } else {
    return false;
  }
}

let pali1 = "abbaabba"
let pali2 = "aabaaabbaa"
let pali3 = "bababaaaaab"

console.log('Is Palindrome: ', isPalindrome(pali1))
console.log('Count: ', count)