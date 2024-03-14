function solve(number){
    let digits = number.toString().split('');
    let areTheSame = true;
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        if (areTheSame){
            areTheSame = digits[0] === digits[i];
        }

        sum += Number(digits[i]);
    }
    
    console.log(areTheSame);
    console.log(sum);
}

solve(2222222);
solve(12);