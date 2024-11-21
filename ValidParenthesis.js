var isValid = function (s) {
    //stack-: FIFO(first in first out)
    let tempStr = s.split('');
    // console.log('tempStr....', tempStr.slice());
    console.log('s....', s);
    let stack = [];
    if(s.length % 2 !== 0) return false;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
            stack.unshift(s.charAt(i));
            tempStr = tempStr.slice(count+1);
        } else if (s.charAt(i) === ')' && stack[0] === '(') {
            stack.shift();
            tempStr = tempStr.slice(count+1);
        } else if (s.charAt(i) === '}' && stack[0] === '{') {
            stack.shift();
            tempStr = tempStr.slice(count+1);
        } else if (s.charAt(i) === ']' && stack[0] === '[') {
            stack.shift();
            tempStr = tempStr.slice(count+1);
        }

        count++;
    }
    console.log('tempStr....', tempStr.slice());
    if (stack.length !== 0 && tempStr.length !== 0) {
        return false;
    }

    return true;
};

// let s = "()[]{}";
// let s =  "(}";
// let s = "()[]{}"
// let s = "([])";
// let s = '}';
let s = "([}}])";

console.log(isValid(s)); // true