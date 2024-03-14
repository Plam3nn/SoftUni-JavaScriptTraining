function solve(speed, zone) {
    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    let isSpeeding = speed - allowedSpeeds[zone] > 0;
    let outputMessage = `Driving ${speed} km/h in a ${allowedSpeeds[zone]} zone`;

    if (isSpeeding) {
        let exceededSpeed = speed - allowedSpeeds[zone];
        let status = '';

        if (exceededSpeed <= 20) status = 'speeding';
        else if(exceededSpeed <= 40) status = 'excessive speeding';
        else status = 'reckless driving';

        outputMessage = `The speed is ${exceededSpeed} km/h faster than the allowed speed of ${allowedSpeeds[zone]} - ${status}`
    }

    console.log(outputMessage);
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');