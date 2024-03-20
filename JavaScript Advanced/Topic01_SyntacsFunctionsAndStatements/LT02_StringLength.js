function solve(firstString, secondString, thirdString){
    let sumLength = firstString.length + secondString.length + thirdString.length;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

getLengths('chocolate', 'ice cream', 'cake');