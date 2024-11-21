var isValid = function (s) {
    //stack-: FIFO(first in first out)
    console.log('s....', s);
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
            stack.unshift(s.charAt(i));
        } else if (s.charAt(i) === ')' && stack[0] === '(') {
            stack.shift();
        } else if (s.charAt(i) === '}' && stack[0] === '{') {
            stack.shift();
        } else if (s.charAt(i) === ']' && stack[0] === '[') {
            stack.shift();
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
};

// let s = "()[]{}";
// let s =  "(}";
// let s = "()[]{}"
let s = "([])"

console.log(isValid(s)); // true