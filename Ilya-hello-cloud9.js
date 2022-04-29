var readline = require('readline-sync');
var i = 10;
var input;

console.log("Hello there, Ilya!");
console.log("i is " + i);

do {
    input = readline.question("Enter a number (or 's' to quit): ");
    if (input === 's') {
        console.log('OK, exiting.')
    }
    else{
        i += Number(input);
        console.log("i is now " + i);
    }
} while (input != 'q');

console.log("Buh-bye!");
