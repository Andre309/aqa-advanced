import chalk from "chalk";

const url = 'https://swapi.dev/api/planets/';

function fetchPlanet(id) {
  return fetch(`${url}${id}/`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Помилка зі статусом ${response.status} для планети з ID ${id}`);
      }
      return response.json();
    })
    .then(data => data.name)
    .catch(error => {
      console.error(`Помилка обробки планети з ID ${id}:`, error.message); //Повідомлення про те, яка конкретно планета викликала помилку
      throw error;
    });
}

const planetPromises = [];
for (let i = 1; i <= 10; i++) {
  planetPromises.push(fetchPlanet(i));
}

console.log();
Promise.all(planetPromises)
  .then(planets => {
    console.log(chalk.yellow('Назви перших 10-ти планет:'), planets);
    console.log();
  })
  .catch(error => {
    console.error('Помилка в Promise.all:', error.message);
  });