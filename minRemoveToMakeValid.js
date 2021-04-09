// Given a string s of '(' , ')' and lowercase English characters. 
// Your task is to remove the minimum number of parentheses ( '(' or ')', 
// in any positions ) so that the resulting parentheses string is valid and return any valid string.

/**
 * @param {string} s
 * @return {string}
 */
// O(N+M) - 2 loops of different sized arrays
var minRemoveToMakeValid = function(str) {
    
    // convert str to array
    str = str.split("");
    // create our 'stack' to track opening parens
	let stack = [];
    // loop thru str array seeking open parens index to put in stack
    for(let i = 0; i<str.length; i++){
        if(str[i]==="(")
            stack.push(i);
        // if we find closing paren && there is corresponding open paren in stack,
        // its meant to be there so pop close from stack (essentially decrementing valid parens)
        // if we find closing paren && there is NOT corresponding open paren, we know its misplaced so erase it from str
        else if(str[i]===")"){
            if(stack.length) stack.pop();
            else str[i]="";
        }
    }
    // loop thru stack indx to erase any remaining open parens from str
    for(let i of stack) str[i] = "";
    
    return str.join("");
	
}