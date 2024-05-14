import chalk from "chalk";

function divide(numerator, denominator) {
    if (denominator === 0) {
        console.log(chalk.red('Ділення на нуль недопустиме!'));
        return;
    } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        console.log(chalk.red('Ділення неможливе. Один з аргументів не є числом.'));
        return;
    } 

    const sum = numerator / denominator
    console.log(chalk.blue(sum));
    //return sum;
}

console.log();

// 1 case

try {
    divide(20, 5);
} catch (error) {
    console.error('Помилка:', error.message);
} finally {
    console.log(chalk.gray('Робота завершена'))
}

console.log();

// 2 case

try {
    divide(20, 0);
} catch (error) {
    console.error('Помилка:', error.message);
} finally {
    console.log(chalk.gray('Робота завершена'))
}

console.log();

// 3 case

try {
    divide('bb', 5);
} catch (error) {
    console.error('Помилка:', error.message);
} finally {
    console.log(chalk.gray('Робота завершена'))
}

console.log();

// 4 case

try {
    divide(20, true);
} catch (error) {
    console.error('Помилка:', error.message);
} finally {
    console.log(chalk.gray('Робота завершена'))
}

console.log();