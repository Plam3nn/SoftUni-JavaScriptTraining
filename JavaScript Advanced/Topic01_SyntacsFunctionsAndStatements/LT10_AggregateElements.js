function solve(array) {
    printSum(array);
    printInversedSum(array);
    printConcatNumbers(array);
}

function printSum(array){
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    console.log(sum);
}

function printInversedSum(array){
    let inverseSum = 0;

    for (let i = 0; i < array.length; i++) {
        inverseSum += 1 / array[i];
    }

    console.log(inverseSum);
}

function printConcatNumbers(array){
    let concatenatedNumbers = '';

    for (let i = 0; i < array.length; i++) {
        concatenatedNumbers += array[i];
    }
    
    console.log(concatenatedNumbers);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);