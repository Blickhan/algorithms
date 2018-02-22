function braces(values) {
    let result = [];
    for(let i = 0; i < values.length; i++) {
        result.push(isBalanced(values[i]) ? 'YES' : 'NO');        
    }
    return result;    
}

function isBalanced (str) {
    let stack = [];
    const openingChars = ['(','{','['];
    const closingChars = [')','}',']']; // closing chars must be at the same index as its respective opening char
    for(char of str) {
        if(openingChars.indexOf(char) > -1) { // if this char is an opening char
            stack.push(char);
        }
        else if(closingChars.indexOf(char) > -1) { // if this char is a closing char
            let openingChar = openingChars[closingChars.indexOf(char)];
            if(stack[stack.length - 1] == openingChar) {
                stack.pop();
            }
            else {
                return false;
            }            
        }
    }
    return stack.length == 0;
}

// YES, YES, NO, YES, NO, NO, NO
console.log(braces(['{[()]}','[](){}','{[}]','{[](){()}[]}','[',']','][']))
