const numbersList = [1,10,14,2,4,5,43,34];

let numbersListCopy = Array.from(numbersList);

function sortUnix(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

numbersListCopy.sort(sortUnix);

console.log();

console.log(numbersList);

console.log(numbersListCopy);

console.log();