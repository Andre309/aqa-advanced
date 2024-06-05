//Використання async/await

const url = 'https://swapi.dev/api/people/14';

async function fetchData() {
    try {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Request failed');
    }
    const data = await response.json();

    const starshipPromises = data.starships.map(starshipUrl => fetch(starshipUrl));
    const starshipResponses = await Promise.all(starshipPromises);
    const starships = await Promise.all(starshipResponses.map(response => response.json()));

    const starshipNames = starships.map(starship => starship.name);
    console.log('Назви космічних кораблів:', starshipNames);

} catch (error) {
console.error('Помилка:', error);
throw error;
}
}

console.log();

fetchData();