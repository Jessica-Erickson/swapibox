import * as API from './helper.js';

describe('API', () => {
  describe('getFilms', () => {
    let mockFilms;

    beforeEach(() => {
      mockFilms = {
        results: [
          {title: 'Star Wars 1',
            release_date: '1977-01-03',
            opening_crawl: 'This is opening crawl 1'},
          {title: 'Star Wars 2',
            release_date: '1978-04-05',
            opening_crawl: 'This is opening crawl 2'},
          {title: 'Star Wars 3',
            release_date: '1979-07-09',
            opening_crawl: 'This is opening crawl 3'}
        ]
      };

      window.fetch = jest.fn(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockFilms)
      }));
    });

    it('should call fetch with the correct url', async () => {
      const expected = 'https://swapi.co/api/films/'

      await API.getFilms()

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return films if the status is ok', async () => {
      const expected = [
          {title: 'Star Wars 1',
            releaseDate: '1977',
            openingCrawl: 'This is opening crawl 1'},
          {title: 'Star Wars 2',
            releaseDate: '1978',
            openingCrawl: 'This is opening crawl 2'},
          {title: 'Star Wars 3',
            releaseDate: '1979',
            openingCrawl: 'This is opening crawl 3'}
        ]

      const result = await API.getFilms();

      expect(result).toEqual(expected);
    });

    it('should throw an error if the status is not ok', async () => {
      const expected = Error('Films status was not ok.');

      window.fetch = jest.fn(() => Promise.resolve({ ok: false }));

      await expect(API.getFilms()).rejects.toEqual(expected);
    });
  });

  describe('getPeople', () => {
    let url1;
    let url2;
    let url3;
    let mockFormatted;
    let mockResponse;
    let mockPlanet;
    let mockSpecies;

    beforeEach(() => {
      url1 = 'https://swapi.co/api/people/';
      url2 = 'https://swapi.co/api/planets/1/';
      url3 = 'https://swapi.co/api/species/1/';

      mockFormatted = [
      { name: 'Luke Skywalker',
        homeworld: 'Tatooine',
        species: 'Human',
        homePop: '200000' }];

      mockResponse = { results: [
      { name: 'Luke Skywalker',
        homeworld: 'https://swapi.co/api/planets/1/',
        species: 'https://swapi.co/api/species/1/' }
      ] };

      mockPlanet = { name: 'Tatooine', population: '200000' };

      mockSpecies = { name: 'Human' };

      window.fetch = jest.fn((url) => {
        if (url === url1) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        } else if (url === url2) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockPlanet)
          });
        } else if (url === url3) {
          return  Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockSpecies)
          });
        }
      });
    });

    it('should call fetch with the correct url', async () => {
      await API.getPeople();

      expect(window.fetch).toHaveBeenCalledWith(url1);
    });

    it('should call fetch with all relevant urls', async () => {  
      await API.getPeople();

      expect(window.fetch).toHaveBeenCalledWith(url1);
      expect(window.fetch).toHaveBeenCalledWith(url2);
      expect(window.fetch).toHaveBeenCalledWith(url3);
    });

    it('should return people if the status is ok', async () => {
      const people = await API.getPeople();

      expect(people).toEqual(mockFormatted);
    });
  });
});






















