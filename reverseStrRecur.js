// Divide and conquer => Take the leading and trailing characters from the input string, i.e. str[0] and str[n-1].
// Swap the leading and trailing characters in place.
// Call the function recursively to reverse the remaining substring

const reverseStrRec = (start, end, str) => {
  if(start > end) {
    return;
  }
  const temp = str[start]
  str[start] = str[end]
  str[end] = temp;
  reverseStrRec(start + 1, end - 1, str);
}

const reverseStrIter = (str) => {
  let start = 0, end = str.length;
  while(start < end) {
    let temp = str[start]
    str[start] = str[end]
    str[end] = temp;
    start++;
    end--;
  }
}

const str1 = ["h", "e", "l", "l", "o"]
const str2 = ["m", "e", "l", "l", "o","y","e","l","l","o"]

console.log('str before', str1)
reverseStrRec(0, str1.length, str1)
console.log('str after', str1)

console.log('str before', str2)
reverseStrIter(str2)
console.log('str after', str2)


