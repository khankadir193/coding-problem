class Solution {
    findDuplicates(arr) {
        let freqElement = {};
        arr.sort((a,b)=> a-b);
        console.log('arr...',arr);
        for(let i=0;i<arr.length;i++){
            freqElement[arr[i]] = (freqElement[arr[i]] || 0) + 1;
        };

        let freqResult = [];

        for(let key in freqElement){
            // console.log('freqElement...',freqElement[arr[i]]);
            if(freqElement[key]>1){
                freqResult.push(key);
                // return freqElement[arr[i]];
            }
        }


        console.log('freqElement...',freqElement);
        return freqResult;
    }
};

const duplicateElements = new Solution();
console.log('----',duplicateElements.findDuplicates([2,3,1,2,3]));