import EBook from './EBook.js';
import Book from './Book.js';
import chalk from 'chalk';

// Створення масиву з екземплярами класів Book
const books = [
    new Book("Сом", "Н. Джексон", 1952),
    new Book('Старик і море', 'Е. Хемінгуей', 1960),
    new Book('Біле ікло', 'Джек Лондон', 1917),
    new Book('JS tutorial', 'Невідомий', 2012)
];

// Визначення форматів для кожної книги
const formats = ['txt', 'pdf', 'png', 'json'];

// Використання методу fromBook для створення екземплярів EBook з книг
const ebooks = books.map((book, index) => {
    try {
        return EBook.fromBook(book, formats[index]);
    } catch (error) {
        console.error(error.message);
        return null;
    }
}).filter(ebook => ebook !== null);

// Виведення інформації про кожен екземпляр EBook у масиві ebooks
ebooks.forEach((ebook, index) => {
    try {
        ebook.printInfo();
    } catch (error) {
        console.error(`Error in ebook ${index + 1}: ${error.message}`);
    }
});
console.log();

// Виклик статичного методу для знаходження найдавнішої книги
try {
    const oldestBook = Book.findOldestBook(ebooks);
    console.log(chalk.whiteBright('Найдавніша книга:'));
    oldestBook.printInfo();
} catch (error) {
    console.error(error.message);
}
console.log();
