function solve(firstNumber, secondNumber){
    while (true){
        let temp = firstNumber % secondNumber;

        firstNumber = secondNumber;
        secondNumber = temp;

        if (secondNumber === 0) return firstNumber;
    }
}

console.log(solve(1, 1));