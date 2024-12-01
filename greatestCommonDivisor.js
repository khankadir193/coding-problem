var gcdOfStrings = function(num1, num2) {
    // if(num1%num2 === 0){
    //     return num2;
    // };

    // let divider = num2;

    // for(let i=0;i<Math.floor(num2/2);i++){
    //     let divider = num2*2 > num1 ? num1 - num2 : num1 - num2 * 2;
    //     // if()
    //     console.log('divider',divider);
    //     break;
    // }


    let result = Math.min(num1, num2);
    while (result > 0) {
        if (num1 % result == 0 && num2 % result == 0) {
            break;
        }
        result--;
    }

    // Return gcd of a and b
    return result;


};

// let num = "90";
// let num2 = "60";

let num = 80;
let num2 = 60;

console.log('greatest common divisor is:',gcdOfStrings(num,num2));