let counter = 1;
function recursiveApproach (number){
    console.log('this is the recursive function...');
    if(counter>number){
        return 'recursion has been finished...';
    }
    counter++;
    recursiveApproach();
}

console.log('recursiveFunction',recursiveApproach(5));
//concept based recursion call