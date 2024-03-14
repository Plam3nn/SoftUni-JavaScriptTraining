function solve(x1, y1, x2, y2){

    let determineIfValid = (x1, y1, x2, y2) => {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        let isValid = Number.isInteger(distance) ? 'valid' : 'invalid';

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
    }

    determineIfValid(x1, y1, 0, 0);
    determineIfValid(x2, y2, 0, 0);
    determineIfValid(x1, y1, x2, y2);
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);