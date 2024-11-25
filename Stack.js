function Stack(arr){
    this.arr = arr;
    console.log("Stack created with array: ", arr);
};

Stack.prototype.push = function (element){
    console.log("Pushing element: ", element);
};

const stack = new Stack([1 ,2 ,1 ,3 ,2 ,1 ,4 ,2]);
stack.push(1);