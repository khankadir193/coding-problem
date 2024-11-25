function Stack(arr){
    this.arr = arr;
    console.log("Stack created with array: ", arr);
};

Stack.prototype.push = function (element,stackObj){
    console.log("Pushing element: ", element);
    stackObj.arr.push(element);
};
// [1 ,2 ,1 ,3 ,2 ,1 ,4 ,2]
const stack = new Stack([]);
stack.push(1,stack);