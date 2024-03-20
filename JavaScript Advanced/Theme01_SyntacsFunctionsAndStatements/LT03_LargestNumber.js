function solve(firstNumber, secondNumber, thirdNumber){    
    // let largestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
    // largestNumber = largestNumber > thirdNumber ? largestNumber : thirdNumber;

    // let largestNumber = firstNumber > secondNumber  && firstNumber > thirdNumber ? firstNumber : 
    // secondNumber > firstNumber && secondNumber > thirdNumber ? secondNumber : thirdNumber;

    let largestNumber = Math.max(Math.max(firstNumber, secondNumber), thirdNumber);
    console.log(`The largest number is ${largestNumber}.`);
}

solve(1, 2, 3);