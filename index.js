'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
 const distance_catA_between_mouse = Math.abs(x - z)  
 const distance_catB_between_mouse = Math.abs(y - z)
 
 // Math.abs es igual a |x-z| para obtener el valor absoluto
 
    if (distance_catA_between_mouse < distance_catB_between_mouse){
        return "Cat A"
    }
    else if (distance_catB_between_mouse < distance_catA_between_mouse){
        return "Cat B"
    }
    else return "Mouse C"
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const xyz = readLine().split(' ');

        const x = parseInt(xyz[0], 10);

        const y = parseInt(xyz[1], 10);

        const z = parseInt(xyz[2], 10);

        let result = catAndMouse(x, y, z);

        ws.write(result + "\n");
    }

    ws.end();
}
