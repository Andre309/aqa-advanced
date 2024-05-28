import chalk from "chalk";

class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year; 
    }

    // Статичний метод, який приймає масив об'єктів (екземрлярів) книг та повертає найдавнішу книгу за роком видання.
    static findOldestBook(books) {
        if (books.length === 0) {
            return undefined;
        }

        let oldestBook = books[0];

        for (let book of books) {
            if (book.year < oldestBook.year) {
                oldestBook = book;
            }
        }

        return oldestBook;
    }

    // Геттери і Сеттери властивості name

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Назва не повинна бути порожнім рядком.');
        }
        this._name = value;
    }

    // Геттери і Сеттери властивості author
    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Автор повинен бути непорожнім рядком.');
        }
        this._author = value;
    }

    // Геттери і Сеттери властивості year
    get year() {
        return this._year;
    }

    set year(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error('Рік видання повинен бути позитивним цілим числом.');
        }
        this._year = value;
    }

    // Вивід всієї інформації класу Book

    printInfo() {
        console.log(`Назва: ${chalk.blue(this.name)}, Автор: ${chalk.green(this.author)}, Рік видання: ${chalk.yellow(this.year)}`);
    }
}

export default Book;
