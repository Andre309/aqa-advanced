const person = {
    firstName: 'Antonio',
    lastName: 'Banderas',
    age: 58
};

person.email = 'antonio@mail.com';

delete person.age;
console.log(person);