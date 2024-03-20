function solve(steps, stepLength, speed){
    var distance = steps * stepLength;
    var additionalRestInMinutes = Math.floor(distance / 500);
    var timeInMinutes = distance / 1000 / speed * 60 + additionalRestInMinutes;
    var timeInSeconds = Math.ceil(timeInMinutes * 60);
    
    var outputTime = new Date(null, null, null, null, null, timeInSeconds)
    .toString()
    .split(' ')[4];

    console.log(outputTime);
}

solve(4000, 0.60, 5);