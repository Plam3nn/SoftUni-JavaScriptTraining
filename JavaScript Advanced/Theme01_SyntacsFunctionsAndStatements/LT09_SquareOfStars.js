function solve(size){
    let square = '';

    for (let i = 0; i < size; i++){
        square += `${'* '.repeat(size)}\n`;
    }

    console.log(square.trimEnd());
}

solve(2);