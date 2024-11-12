class Solution {
    getSecondLargest(arr) {
        arr.sort((a,b)=> a-b);
        let set = new Set(arr);
        const newArray = Array.from(set);
        console.log('newArray...?',newArray);

        if(newArray.length === 1) return -1;
        return newArray[newArray.length-2];
    }
};

const obje = new Solution();
// console.log(obje.getSecondLargest([12, 35, 1, 10, 34, 1]));
// console.log(obje.getSecondLargest([10,10]));
console.log(obje.getSecondLargest([10,5,10]));