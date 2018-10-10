export const getFilms = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Status was not ok');
  }
}