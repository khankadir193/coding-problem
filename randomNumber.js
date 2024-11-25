function randomNumber(arr) {
    for(let i=0;i<5;i++){
        arr.push({[i]:[]})
    }

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            arr[i][i].push(Math.floor(Math.random() * 100));
        }
        // arr[i][i].push(Math.floor(Math.random() * 100));
    }
    console.log('arr...',arr);

};

const rndObj = randomNumber([]);