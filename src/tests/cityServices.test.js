const { getAllCities, getCityById, getCityOrderByPopulationDesc, getCityOrderByPopulationAsc } = require('../services/city.services.js'); // Update 'your-module' with the correct path

// Mocking the database module
jest.mock('../services/db.js', () => ({
  query: jest.fn(),
}));

const db = require('../services/db.js');

describe('getAllCities', () => {
  it('should return an array of city objects', async () => {
    const mockRows = [{ id: 1, name: 'City 1', population: 100000 }, { id: 2, name: 'City 2', population: 150000 }];
    db.query.mockResolvedValue([mockRows, null]);
    
    const result = await getAllCities();
    expect(result).toEqual(mockRows);
  });
});

describe('getCityById', () => {
  it('should return the city object for a valid city ID', async () => {
    const mockRow = { id: 1, name: 'City 1', population: 100000 };
    db.query.mockResolvedValue([[mockRow], null]);

    const result = await getCityById(1);
    expect(result).toEqual(mockRow);
  });

  it('should throw an error for an invalid city ID', async () => {
    db.query.mockRejectedValue(new Error('Database Error'));

    await expect(getCityById(999)).rejects.toThrow('Failed to Fetch City by ID');
  });
});

describe('getCityOrderByPopulationDesc', () => {
  it('should return cities ordered by population descending', async () => {
    const mockRows = [{ id: 1, name: 'City 1', population: 100000 }, { id: 2, name: 'City 2', population: 150000 }];
    db.query.mockResolvedValue([mockRows, null]);

    const result = await getCityOrderByPopulationDesc();
    expect(result).toEqual(mockRows);
  });

  it('should throw an error if ordering fails', async () => {
    db.query.mockRejectedValue(new Error('Database Error'));

    await expect(getCityOrderByPopulationDesc()).rejects.toThrow('Failed to order cities by population');
  });
});

describe('getCityOrderByPopulationAsc', () => {
  it('should return cities ordered by population ascending', async () => {
    const mockRows = [{ id: 1, name: 'City 1', population: 100000 }, { id: 2, name: 'City 2', population: 150000 }];
    db.query.mockResolvedValue([mockRows, null]);

    const result = await getCityOrderByPopulationAsc();
    expect(result).toEqual(mockRows);
  });

  it('should throw an error if ordering fails', async () => {
    db.query.mockRejectedValue(new Error('Database Error'));

    await expect(getCityOrderByPopulationAsc()).rejects.toThrow('Failed to order cities by population');
  });
});
