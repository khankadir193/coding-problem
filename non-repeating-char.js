class Solution {
    // Function to find the first non-repeating character in a string.
    nonRepeatingChar(s) {
        let tempArr = s.split('');
        // console.log('tempAr....',tempArr);
        let frequency = []

        for(let i=0; i<s.length; i++){
            frequency[tempArr[i]] = (frequency[tempArr[i]] || 0) + 1;
        };

        const set = new Set(tempArr);
        tempArr = Array.from(set);

        console.log('freq...!!!',frequency);
        for(let i=0; i<tempArr.length; i++){
            if(frequency[tempArr[i]] === 1) return tempArr[i];
        }

    }
}

const obj = new Solution();
// console.log(obj.nonRepeatingChar('aabc'));
console.log(obj.nonRepeatingChar('geeksforgeeks'));