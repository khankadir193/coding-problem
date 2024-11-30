var reverseVowels = function(s) {
    let vowel = "aeiou";
    let vowelStr = '';
    // for(let i=0;i<vowel.length;i++){
        for(let j=0;j<s.length;j++){
            if(s.charAt(j)==='a' || s.charAt(j)==='A' || s.charAt(j)==='e' || s.charAt(j)==='E' || s.charAt(j)==='i' || s.charAt(j)==='I' || s.charAt(j)==='o' || s.charAt(j)==='O' || s.charAt(j)==='u' || s.charAt(j)==='U'){
                vowelStr += s.charAt(j);
            }
        }
    // }
    let reverseVowel = vowelStr.split('').reverse();
    s = s.split('');
    let count = 0,strVal = '';
    for(let j=0;j<s.length;j++){
        if(s[j]==='a' || s[j]==='A' || s[j]==='e' || s[j]==='E' || s[j]==='i' || s[j]==='I' || s[j]==='o' || s[j]==='O' || s[j]==='u' || s[j]==='U'){
            s[j] = reverseVowel[count];
            count++;
        }
        // strVal;
    }
    console.log('s...',s.join(''));
    // console.log('numberOfVowel...',vowelStr,'reverse...',reverseVowel);
};

// let str = "leetcode";
let str = "IceCreAm";
reverseVowels(str);
