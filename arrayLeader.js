class Solution {
    // Function to find the leaders in the array.
    leaders(a) {
        // code here
        let tempElement = a[a.length-1];
        const tempArr = [];
        tempArr.push(a[a.length-1]);
        for(let i=a.length-1;i>=0;i--){
            if(a[i-1] > tempElement){
                tempElement = a[i-1];
                tempArr.push(a[i-1]);
            }
        }

        return tempArr.reverse();
    }
};

const  ldr = new Solution();
console.log(ldr.leaders([16, 17, 4, 3, 5, 2]));
