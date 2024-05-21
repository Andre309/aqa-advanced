import chalk from "chalk";

const users = [
    { name: "John", email: "john@mail.com", age: 30, country: 'USA' },
    { name: "Jane", email: "Jane@mail.com", age: 25, country: 'UK' },
    { name: "Mike", email: "Mike@mail.com", age: 40, country: 'Netherland' }
];

for (const user of users) {
    const {name, country, email, age} = user;
    console.log(`Name: ${chalk.yellowBright(name)}, Country: ${chalk.redBright(country)}, Email: ${chalk.blue(email)}, Age: ${chalk.green(age)}`);
}