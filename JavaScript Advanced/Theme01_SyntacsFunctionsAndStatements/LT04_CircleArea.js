function calculateCircleArea(radius){
    if (typeof(radius) !== 'number'){
        console.log('We can not calculate the circle area, because we receive a string.');
        return;
    }

    console.log((Math.PI * radius * radius).toFixed(2));
}

calculateCircleArea(5);