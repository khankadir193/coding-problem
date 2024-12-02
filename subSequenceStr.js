var isSubsequence = function (s, t) {
    let count = 0;
    let index = 0;
    if(s.length>t.length) return false;

    for (let i = 0; i < s.length; i++) {
        let bool = false;
        const char = s.charAt(count);
        for(let j=0;j<t.length;j++){
            if(char === t.charAt(j)){
                bool = true;
                if(index>=j && j !== 0){
                    return false;
                }
                index = j;
            }
        }
        if(!bool) return false;
        count++;
    }
    return true;
};
const s = 'abc';
const t = 'ahbgdc';

// const s = 'axc';
// const t = 'ahbgdc';

// const s = 'acb';
// const t = 'ahbgdc';

// const s = "bb";
// const t = "ahbgdc";

console.log(isSubsequence(s, t));



// if(!t.includes(char)){
//     return false;
// }