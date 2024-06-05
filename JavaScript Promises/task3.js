const url = 'https://swapi.dev/api/films/3/';

async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Помилка запиту');
        }
        const data = await response.json();

        const planetPromises = data.planets.map(async planetUrl => {
            const planetResponse = await fetch(planetUrl);
            if (!planetResponse.ok) {
                throw new Error('Помилка запиту для планет');
            }
            const planetData = await planetResponse.json();
            const residentPromises = planetData.residents.map(async residentUrl => {
                const residentResponse = await fetch(residentUrl);
                if (!residentResponse.ok) {
                    throw new Error('Помилка запиту для резидентів');
                }
                const residentData = await residentResponse.json();
                return residentData.name;
            });
            const residents = await Promise.all(residentPromises);
            return {
                planetName: planetData.name,
                residents: residents
            };
        });

        const planetsWithResidents = await Promise.all(planetPromises);
        console.log('Планети з резидентами:', planetsWithResidents);

    } catch (error) {
        console.error('Помилка:', error.message);
    }
}

fetchData();
