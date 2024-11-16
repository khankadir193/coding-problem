class Solution {
  firstRepChar(s) {
    s = s.split('').sort().join('');
    console.log('s...',s);
    for(let i=0; i<s.length-1; i++) {
        if(s.charAt(i) === s.charAt(i+1)){
            return s.charAt(i);
        }
    }
    
    return -1;
  }
};

const rChar = new Solution();
console.log(rChar.firstRepChar('geeksforgeeks'));