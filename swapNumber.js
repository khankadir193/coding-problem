function swapNumber(){
    let x = 90;
    let y = 17;
    x = x-y;
    y = y+x;
    x = y-x;
    console.log('x..',x);
    console.log('y....',y);
}

swapNumber();


const swapDestructuring = ()=>{
    let a = 33;
    let b = 34;

    console.log(`Before Swap: a=${a} and b=${b}`);

    // swap logic
    [a,b] = [b,a];
    console.log(`After Swapping: a=${a} and b=${b}`);
}

swapDestructuring();