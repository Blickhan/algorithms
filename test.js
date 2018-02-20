function braces(values) {
    let result = [];
    for(let i = 0; i < values.length; i++) {
        let str = values[i];
        let checker = [0,0,0];
        let balanced = true;
        for(char of str) {
            switch(char){
                case '(':
                    checker[0] = checker[0] + 1;
                    break;
                case '{':
                    checker[1] = checker[1] + 1;
                    break;
                case '[':
                    checker[2] = checker[2] + 1;
                    break;
                case ')':                    
                    checker[0] = checker[0] - 1;
                    if((checker[1] > 0 || checker[2] > 0) && checker[0] <= 0) { // if there is a left brace (of a different kind) without a pair and no left brace (of this kind)
                        balanced = false;
                        break;
                    }
                    break;
                case '}':
                    checker[1] = checker[1] - 1;
                    if((checker[0] > 0 || checker[2] > 0) && checker[1] <= 0) { // if there is a left brace (of a different kind) without a pair and no left brace (of this kind)
                        balanced = false;
                        break;
                    }
                    break;
                case ']':
                    checker[2] = checker[2] - 1;
                    if((checker[1] > 0 || checker[0] > 0) && checker[2] <= 0) { // if there is a left brace (of a different kind) without a pair and no left brace (of this kind)
                        balanced = false;
                        break;
                    }
                    break;
                default:
                    break;
            }
            if(checker.some(n => n < 0)) { // if any right brace was placed before a left
               balanced = false; 
            }
            if(!balanced){
                break;
            }
        }
        result.push(balanced ? 'YES' : 'NO');        
    }
    return result;    
}

let t = braces(['{[()]}'])

