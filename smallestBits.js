var smallestNumber = function(n) {
    if(n === 1) return 1;
    let x = '1';
    let tempCal = 0;
    for(let i=0;i<n;i++){
        x += 1;
        tempCal = parseInt(x,2);

        if(tempCal>=n)return tempCal;
    }

    return tempCal;
};

console.log(smallestNumber(5));




// https://leetcode.com/contest/weekly-contest-426/problems/smallest-number-with-all-set-bits/