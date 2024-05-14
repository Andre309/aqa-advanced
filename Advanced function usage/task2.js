import chalk from "chalk";

function factorial(n) {
    console.log(chalk.blueBright(n));
    if (n <= 0) {
        return;
    } else {
       factorial(n-1);
    }
}

factorial(5);
