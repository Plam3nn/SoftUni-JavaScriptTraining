function solve(input){
    // let result = input
    // .split(/[ ,.?!]/)
    // .filter(Boolean)
    // .map(x => x.toUpperCase())
    // .join(', ');
        
    let result = input
    .match(/\w+/g)
    .map(x => x.toUpperCase())
    .join(', ');

    console.log(result);
}

solve('Hi, how are you?');