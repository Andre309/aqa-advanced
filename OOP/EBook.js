import chalk from "chalk";
import Book from './Book.js';

class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this.format = format; 
    }

    // Статичний метод, який приймає як аргументи екземпляр класу Book
    static fromBook(book, format) {
        if (!(book instanceof Book)) {
            throw new Error('Аргумент повинен бути екземпляром класу Book.');
        }
        return new EBook(book.name, book.author, book.year, format);
    }

    //Геттер властивості Format

    get format() {
        return this._format;
    }

    // Сеттер властивості Format

    set format(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Формат файлу не повинен бути порожнім рядком або чисом.');
        }
        this._format = value;
    }

    // Вивід всієї інформації класу EBook

    printInfo() {
        console.log(`Назва: ${chalk.blue(this.name)}, Автор: ${chalk.green(this.author)}, Рік видання: ${chalk.yellow(this.year)}, Формат файлу: ${chalk.red(this.format)}`);
    }
}

export default EBook;
