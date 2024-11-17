class Solution {
  firstRepChar(s) {
    //first 
    // s = s.split('').sort().join('');
    // console.log('s...',s);
    // for(let i=0; i<s.length-1; i++) {
    //     if(s.charAt(i) === s.charAt(i+1)){
    //         return s.charAt(i);
    //     }
    // }

    // for(let i=0; i<s.length-1; i++) {
    //     for(let j=i+1; j<s.length; j++){
    //         if(s.charAt(i) === s.charAt(j)){
    //              return s.charAt(i);
    //         }
    //     }
    // }

    let tempArr = [];
    for(let i=0;i<s.length;i++){
        tempArr[s.charAt(i)] = (tempArr[s.charAt(i)] || 0) + 1;
    }
    
    console.log('tempArr...',tempArr);
    // return -1;
  }
};

const rChar = new Solution();
console.log(rChar.firstRepChar('geeksforgeeks'));
// console.log(rChar.firstRepChar('abdc'));
// console.log(rChar.firstRepChar('evjxpnqgmvfjl'));