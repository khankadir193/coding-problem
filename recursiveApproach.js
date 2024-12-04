function recursiveApproach (number){
    console.log('this is the recursive function...');
    if(number === 5){
        return 'recursion has been finished...';
    }
    number++;
    recursiveApproach(number);
}

console.log('recursiveFunction',recursiveApproach(1));