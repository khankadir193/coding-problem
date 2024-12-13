class Solution {
    // Function to check if a string can be obtained by rotating
    // another string by exactly 2 places.
    isRotated(s1, s2) {
        if (s1.length !== s2.length) return false;
        let j = 0;
        let tempStr = s1.charAt(0) + s1.charAt(1);
        let bool = false;
        for (let i = s2.length - 2; i < s2.length; i++) {
            // if(s1 === s2.slice(i) + s2.slice(0, i)) return true;
            if (s2.charAt(i) === tempStr.charAt(j)) {
                j++;
            } else if (j === 2) {
                return true;
            } else {
                bool = true;
                break;
            }
        }
        if (bool) {
            j = 0;
            for (let i = 2; i < 4; i++) {
                if (s2.charAt(i) === tempStr.charAt(j)) {
                    j++;
                } else if (j === 2) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        if (j === 2) return true;
    }
};

const strRotation = new Solution();
// console.log(strRotation.isRotated("waterbottle", "terbottlewa")); // Output: true
// console.log(strRotation.isRotated("geeksforgeeks", "geeksgeeksfor")); // Output: true
// console.log(strRotation.isRotated("daxjheq", "eqdaxjh"));
console.log(strRotation.isRotated("covinqcxof", "ofcovinqcx"));

// js topics
// https://github.com/leonardomso/33-js-concepts?tab=readme-ov-file#6-function-scope-block-scope-and-lexical-scope