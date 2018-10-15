export const getFilms = async () => {
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

export const getPeople = async () => {
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
  const newPeople = peopleList.map(async person => {
    const response = await Promise.all([ fetch(person.homeworld), fetch(person.species) ]);
    const parsedJson = await Promise.all([ response[0].json(), response[1].json() ]);
    const homeData = { homeworld: parsedJson[0].name, homePop: parsedJson[0].population };
    const speciesData = { species: parsedJson[1].name };
    return { name: person.name,
             ...homeData,
             ...speciesData }
  });
  return Promise.all(newPeople);
}

export const getPlanets = async () => {
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
  const newPlanets = planetList.map(async planet => {
    const residentsList = await getResidents(planet.residents)
    const residents = cleanResidents(residentsList)

    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      ...residents
    }
  })

  return Promise.all(newPlanets)
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
  const cleanResidents = residentsList.reduce((allResidents, resident, i) => {
      allResidents[`resident${i}`] = resident.name

      return allResidents
    }, {})

  return cleanResidents
}

export const getVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/';
  const response = await fetch(url);

  
}