function targetSum(arr,trgt){
    // console.log('arr...',arr,'trget',trgt);
    let targetSum = 0;
    for(let i=0;i<arr.length-1;i++){
        targetSum = arr[i];
        for(let j=i+1;j<arr.length;j++){
            targetSum += arr[j];
            if(targetSum === trgt){
                return [i,j];
            }

            if(targetSum>trgt) break;
        }
        targetSum = 0;
    }

    return -1;
}

const arr = [1,2,3,4,5,6];
const target = 12;
console.log('targetSum...!!!',targetSum(arr,target))