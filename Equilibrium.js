class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(arr) {
        let leftSum = 0, rightSum = 0;
        for(let i=0;i<arr.length/2+1;i++){
            leftSum += arr[i];
            rightSum += arr[arr.length-i-1];
            if(leftSum === rightSum){
                return i+1;
            }
        };

        return -1;
    }
}

const equilibrium = new Solution();

console.log(equilibrium.equilibriumPoint([1, 3, 5, 2, 2]));
console.log(equilibrium.equilibriumPoint([1]));
console.log(equilibrium.equilibriumPoint([1,2,3]));

// https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1?page=1&category=Data%20Structures&sortBy=submissions