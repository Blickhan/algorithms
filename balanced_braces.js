function braces(values) {
    let result = [];
    for(let i = 0; i < values.length; i++) {
        result.push(isBalanced(values[i]) ? 'YES' : 'NO');        
    }
    return result;    
}

function isBalanced (str) {
    let stack = [];    
    for(char of str) {
        if(char == '(' || char == '{' || char == '[') {
            stack.push(char);
        }
        else if(char == ')') {
            if(stack[stack.length - 1] == '(') {
                stack.pop();
            }
            else {
                return false;
            }            
        }
        else if(char == '}') {
            if(stack[stack.length - 1] == '{') {
                stack.pop();
            }
            else {
                return false;
            }   
        }
        else if(char == ']') {
            if(stack[stack.length - 1] == '[') {
                stack.pop();
            }
            else {
                return false;
            }   
        }
    }
    return stack.length == 0;
}

console.log(braces(['{[()]}','[](){}','{[}]','{[](){()}[]}','[',']','][']))
