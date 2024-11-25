function Stack(arr){
    this.arr = arr;
    console.log("Stack created with array: ", arr);
};

Stack.prototype.push = function (element,stackObj){
    stackObj.arr.push(element);
};

Stack.prototype.pop = function (stackObj){
    stackObj.arr.shift();
};

Stack.prototype.peek = function (stackObj){
    return stackObj.arr[0];
};

// [1 ,2 ,1 ,3 ,2 ,1 ,4 ,2]
const stack = new Stack([]);
stack.push(1,stack);
stack.push(2,stack);
stack.pop(stack);
console.log('peek the element: ',stack.peek(stack));
// console.log('stack.arr after push 1: ',stack.arr);