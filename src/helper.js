export const films = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await fetch(url);

  if (response.ok) {
    const rawFilms = (await response.json()).results;

    return cleanFilms(rawFilms);
  } else {
    throw new Error('Films status was not ok.');
  }
}

const cleanFilms = (filmCollection) => {
  const newFilms = filmCollection.map(film => {
    const { title , release_date , opening_crawl } = film;
    return {
      title,
      releaseDate: release_date.slice(0, 4),
      openingCrawl: opening_crawl
    }
  });

  return newFilms;
}

export const people = async () => {
  const url = 'https://swapi.co/api/people/';
  const response = await fetch(url);

  if (response.ok) {
    const rawPeople = (await response.json()).results;
    return cleanPeople(rawPeople);
  } else {
    throw new Error('People status was not ok.');
  }
}

const cleanPeople = (peopleList) => {
  const newPeople = peopleList.map(async (person, index) => {
    const { homeworld, species } = person;
    const secondFetches = [ fetch(homeworld), fetch(species) ];
    const response = await Promise.all(secondFetches);
    const parsedFetches = [ response[0].json(), response[1].json() ];
    const parsedJson = await Promise.all(parsedFetches);
    const parsedPop = parsedJson[0].population
    const numPop = parseInt(parsedJson[0].population)
    const homeData = {
      Homeworld: parsedJson[0].name,
      Population: isNaN(numPop) ? parsedPop : numPop.toLocaleString()
    };
    const speciesData = { Species: parsedJson[1].name };
    return { name: person.name,
             id: `${person.name}-${index}`,
             ...homeData,
             ...speciesData };
  });
  return Promise.all(newPeople);
}

export const planets = async () => {
  const url = 'https://swapi.co/api/planets/';
  const response = await fetch(url);

  if (response.ok) {
    const rawPlanets = (await response.json()).results;
    return cleanPlanets(rawPlanets);
  } else {
    throw new Error('Planets status was not ok.')
  }
}

const cleanPlanets = (planetList) => {
  const newPlanets = planetList.map(async (planet, index) => {
    const residentsList = await getResidents(planet.residents);
    const residents = cleanResidents(residentsList);

    const { name, terrain, population, climate } = planet;

    return {
      name,
      id: `${name}-${index}`,
      Terrain: terrain,
      Population: parseInt(population).toLocaleString(),
      Climate: climate,
      Residents: residents
    };
  });

  return Promise.all(newPlanets);
}

const getResidents = (residentUrls) => {
  const newResidents = residentUrls.map(async url => {
    const response = await fetch(url)
    const name = await response.json()
    return name
  })

  return Promise.all(newResidents)
}

const cleanResidents = (residentsList) => {
  const cleanResidents = residentsList.reduce((allResidents, resident) => {
      allResidents.push(resident.name);

      return allResidents;
    }, []).join(', ');

  return cleanResidents;
}

export const vehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/';
  const response = await fetch(url);

  if (response.ok) {
    const rawVehicles = (await response.json()).results;
    return cleanVehicles(rawVehicles);
  } else {
    throw new Error('Vehicles status was not ok.')
  }
}

const cleanVehicles = (vehiclesList) => {
  const newVehicles = vehiclesList.map((vehicle, index) => {
    const { name, model, vehicle_class, passengers } = vehicle;

    return {
      name,
      id: `${name}-${index}`,
      Model: model,
      Class: vehicle_class,
      Capacity: parseInt(passengers).toLocaleString() }
  });

  return newVehicles;
}
