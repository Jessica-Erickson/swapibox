export const getFilms = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await fetch(url);

  if (response.ok) {
    const rawFilms = (await response.json()).results;
    debugger
    return cleanFilms(rawFilms);
  } else {
    throw new Error('Status was not ok');
  }
}

const cleanFilms = (filmCollection) => {
  const newFilms = filmCollection.map(film => {
    const { title , release_date , opening_crawl } = film;
    return {
      title,
      release_date: release_date.slice(0, 4),
      opening_crawl
    }
  });

  return newFilms;
}