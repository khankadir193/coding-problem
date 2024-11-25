function Stack(arr){
    this.arr = arr;
    console.log("Stack created with array: ", arr);
};

Stack.prototype.push = function (element,stackObj){
    if(stackObj.arr.length >= 5) return overFlow();

    stackObj.arr.push(element);
    return "Element pushed successfully";
};

Stack.prototype.pop = function (stackObj){
    if(stackObj.arr.length === 0) return underFlow();
    stackObj.arr.shift();
};

const overFlow = ()=>{
    return "Stack overflow";
};

const underFlow = ()=>{
    return "Stack Underflow";
};

Stack.prototype.peek = function (stackObj){
    if(stackObj.arr.length === 0) return underFlow();
    return stackObj.arr[0];
};

// [1 ,2 ,1 ,3 ,2 ,1 ,4 ,2]
const stack = new Stack([]);
stack.push(1,stack);
stack.push(2,stack);
stack.push(3,stack);
stack.push(4,stack);
stack.push(5,stack);
console.log('pushing element:',stack.push(6,stack));

// stack.pop(stack);
// stack.pop(stack);
// console.log('peek the element: ',stack.peek(stack));
// console.log('stack.arr after push 1: ',stack.arr);