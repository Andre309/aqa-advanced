//Використання Promises

const url = 'https://swapi.dev/api/people/14';

function fetchData() {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        });
}

console.log();
fetchData()
    .then(data => {
        const starshipPromises = data.starships.map(starshipUrl => fetch(starshipUrl).then(response => response.json()));
        return Promise.all(starshipPromises);
    })
    .then(starships => {
        const starshipNames = starships.map(starship => starship.name);
        console.log('Назви космічних кораблів:', starshipNames);
        console.log();
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
