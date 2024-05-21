import chalk from "chalk";

const book = {
    title: 'Mowgli',
    author: 'R. Cipling',
    year: 1894
};

const {title, author} = book;

console.log();

console.log((`Назва: ${chalk.blue(title)}`));
console.log((`Автор: ${chalk.blue(author)}`));

console.log();