class Solution {
    romanToDecimal(s) {
        // code here
        let totalSum = 0;
        const arrOfObj =[{key: 'I', value: 1}, {key: 'V', value: 5}, {key: 'X', value: 10}, {key: 'L', value: 50}, {key: 'C', value: 100}, {key: 'D', value: 500}, {key: 'M', value: 1000}];
        // if(s.length === 1){
            
        // }
        let bool  = false;
        for(let indx in arrOfObj){
            if(bool){
                bool = false;
                indx = 0;
            }
            if(s.includes(arrOfObj[indx].key)){
                totalSum += arrOfObj[indx].value;
                s = s.slice(indx+1);
                // indx = 0;
                bool = true;
            }
            // else{
            //     totalSum += arrOfObj[indx].value;
            // }
        };
        console.log('totalSum...',totalSum);
        return totalSum;
    }
}

const romanObj =  new  Solution();
console.log(romanObj.romanToDecimal('IV'));


// problem links
// https://www.geeksforgeeks.org/problems/roman-number-to-integer3201/1?page=1&category=Strings&sortBy=submissions