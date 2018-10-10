import * as API from './helper.js';

describe('API', () => {
  describe('getFilms', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({

      }));
    });

    it('should call fetch with the correct url', async () => {
      const expected = 'https://swapi.co/api/films/'

      await API.getFilms()

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })
  })
});