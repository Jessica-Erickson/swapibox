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