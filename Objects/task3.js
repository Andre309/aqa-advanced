const car1 = {
    brand: 'Shelby',
    model: 'Daytona',
    year: '1965'
};

const car2 = {
    brand: 'Pagani',
    model: 'Huayra',
    owner: 'Croatia'
};

const car3 = {...car1, ...car2};

console.log(car3);
