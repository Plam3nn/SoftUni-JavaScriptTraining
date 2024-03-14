function solve(){
    let number = Number(arguments[0]);

    for (let i = 1; i < arguments.length; i++){
        if (arguments[i] === 'chop'){
            number /= 2;
            console.log(number);
        }
        else if (arguments[i] === 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }
        else if (arguments[i] === 'spice'){
            number += 1;
            console.log(number);
        } 
        else if (arguments[i] === 'bake'){
            number *= 3;
            console.log(number);
        }
        else if (arguments[i] === 'fillet'){
            number -= number * 0.2;
            console.log(number);
        }
    }
}

//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');