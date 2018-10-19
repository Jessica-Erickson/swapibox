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

      expect(API.getFilms()).rejects.toEqual(expected);
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
        id: 'Luke Skywalker-0',
        Homeworld: 'Tatooine',
        Species: 'Human',
        Population: '200,000' }];

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

    it('should return text if planet population is text', async () => {
      mockPlanet = { name: 'Tatooine', population: 'unknown' };
      mockFormatted = [
        { name: 'Luke Skywalker',
          id: 'Luke Skywalker-0',
          Homeworld: 'Tatooine',
          Species: 'Human',
          Population: 'unknown' }
      ];
      const people = await API.getPeople();

      expect(people).toEqual(mockFormatted);

    })

    it('should throw an error if the status is not ok', () => {
      const expected = Error('People status was not ok.');

      window.fetch = () => Promise.resolve({ ok: false });

      expect(API.getPeople()).rejects.toEqual(expected);
    });
  });

  describe('getPlanets', () => {
    let url1;
    let url2;
    let url3;
    let url4;
    let mockResults;
    let mockResponse1;
    let mockResponse2;
    let mockResponse3;
    let mockResponse4;
    let mockFormatted;

    beforeEach(() => {
      url1 = 'https://swapi.co/api/planets/';
      url2 = 'https://swapi.co/api/people/5/';
      url3 = 'https://swapi.co/api/people/68/';
      url4 = 'https://swapi.co/api/people/81/';

      mockResponse1 = {
        results: [
          { name: 'Tatooine',
            terrain: "Desert",
            population: "120000",
            climate: "Arid",
            residents: [ url2, url3, url4 ]
          }
        ]
      };

      mockResponse2 = {
        name: 'Leia Organa'
      }

      mockResponse3 = {
        name: 'Bail Prestor Organa'
      }

      mockResponse4 = {
        name: 'Raymus Antilles'
      }

      mockFormatted = [
        {
          name: 'Tatooine',
          id: 'Tatooine-0',
          Terrain: "Desert",
          Population: "120,000",
          Climate: "Arid",
          Residents: 'Leia Organa, Bail Prestor Organa, Raymus Antilles'
        }
      ]

      window.fetch = jest.fn((url) => {
        if (url === url1) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse1)
          })
        }
        else if (url === url2) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse2)
          })
        }
        else if (url === url3) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse3)
          })
        }
        else if (url === url4) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse4)
          })
        }
      })
    })

    it('should call fetch with the relevant urls', async () => {
      await API.getPlanets();

      expect(window.fetch).toHaveBeenCalledWith(url1);
      expect(window.fetch).toHaveBeenCalledWith(url2);
      expect(window.fetch).toHaveBeenCalledWith(url3);
      expect(window.fetch).toHaveBeenCalledWith(url4);
    })

    it('should format the response properly', async () => {
      const APIcall = await API.getPlanets();

      expect(APIcall).toEqual(mockFormatted);
    })

    it('should throw an error if the status is not ok', () => {
      const expected = Error('Planets status was not ok.');

      window.fetch = () => Promise.resolve({ ok: false });

      expect(API.getPlanets()).rejects.toEqual(expected);
    })
  });

  describe('getVehicles', () => {
    let url;
    let mockResponse;
    let mockFormatted;

    beforeEach(() => {
      url = 'https://swapi.co/api/vehicles/';

      mockResponse = {
        results: [
          { name: 'Sand Crawler',
            model: 'Digger Crawler',
            vehicle_class: 'wheeled',
            passengers: '30' }
        ]
      };

      mockFormatted = [
        { name: 'Sand Crawler',
          id: 'Sand Crawler-0',
          Model: 'Digger Crawler',
          Class: 'wheeled',
          Capacity: '30' }
      ];

      window.fetch = jest.fn(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    });

    it('should call fetch with the correct parameters', async () => {
      await API.getVehicles();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return the correct data when status is ok', async () => {
      const vehicles = await API.getVehicles();

      expect(vehicles).toEqual(mockFormatted);
    });

    it('should throw an error if status is not ok', () => {
      const expected = Error('Vehicles status was not ok.');

      window.fetch = () => Promise.resolve({ ok: false });

      expect(API.getVehicles()).rejects.toEqual(expected);
    });
  });
});
