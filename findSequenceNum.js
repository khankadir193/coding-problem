function largestSeqNumber(arr){
    
    arr.sort((a,b)=> a-b);
    console.log('arr....?',arr);
    let max = 0;
    let countNum = 0;
    let countVal = arr[0];
    let counter = 0; 
    let maxSequence = 0;

    for(let i=0;i<arr.length;i++){
       if(arr[i]===countVal){
            counter++;
            countVal++;
            maxSequence = Math.max(maxSequence,counter);
       }else{
            counter = 1;
            countVal = arr[i+1];
       }
    };
    return maxSequence;
};

console.log(largestSeqNumber([2,6,45,3,5,10,4,11,44,46]));