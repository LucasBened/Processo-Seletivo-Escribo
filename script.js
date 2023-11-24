const readlineSync = require('readline-sync');

const numInt = readlineSync.questionInt('Digite o valor desejado: ');
let nums = 0

const getNumbers = (valInt) =>{
    for(i = 0; i < valInt; i++){    
        if(i < valInt && ( i % 3 === 0 || i % 5 === 0)){  
            nums += i
        }
    }
    console.log(nums)
}

getNumbers(numInt)