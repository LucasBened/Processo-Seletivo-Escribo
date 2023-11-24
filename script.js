const readlineSync = require('readline-sync');

const numInt = readlineSync.questionInt('Digite o valor desejado: ');
const numbers = [] 

const getNumbers = (valInt) =>{
    for(i = 0; i < valInt; i++){    
        if(i < valInt && ( i % 3 === 0 || i % 5 == 0)){  
            numbers.push(i)
        }
    }
}

getNumbers(numInt)

const sum = numbers.reduce( (acc, curr)  => {
    return acc + curr
  }, 0)

console.log(sum)

