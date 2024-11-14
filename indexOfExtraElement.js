class Solution {
    findExtra(arr1, arr2) {
        for(let i=0;i<arr1.length;i++){
            if(!arr2.includes(arr1[i])){
                return i;
            }
        }
    }
}

const extraEle = new Solution();
console.log(extraEle.findExtra([2,4,6,8,9,10,12], [2,4,6,8,10,12]));