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
    const rawJson = await Promise.all([ response[0].json(), response[1].json() ]);
    const homeData = { homeworld: rawJson[0].name, homePop: rawJson[0].population };
    const speciesData = { species: rawJson[1].name };
    return { name: person.name,
             ...homeData, 
             ...speciesData }
  });
  return Promise.all(newPeople);
}
