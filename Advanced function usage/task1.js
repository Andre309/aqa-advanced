import chalk from "chalk";

function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        if (typeof evenCallback === 'function') {
            evenCallback(chalk.bold.green(num));
        }
    } else {
        if (typeof oddCallback === 'function') {
            oddCallback(chalk.bold.red(num));
        }
    }
}

function handleEven(num) {
    console.log(`number ${num} is even`);
}

function handleOdd(num) {
    console.log(`number ${num} is odd`);
}

console.log();

handleNum(4, handleEven, handleOdd); 
handleNum(5, handleEven, handleOdd);

console.log();


