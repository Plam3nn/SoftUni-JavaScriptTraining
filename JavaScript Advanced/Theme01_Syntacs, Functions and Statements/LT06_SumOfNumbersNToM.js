function solve(startInput, endInput){
    let start = Number(startInput);
    let end = Number(endInput);    
    
    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;    
    }

    console.log(result);
}

solve('-8', '20');