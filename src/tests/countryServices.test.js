const { getAllCountries, getCountryByCode } = require("../services/country.services.js");
const db = require('../services/db.js');

jest.mock('../services/db.js', () => ({
    query: jest.fn(),
}));

describe('getAllCountries', () => {
    it('should return all countries', async () => {
        const mockRows = [{ countryCode: 'AAA', name: 'Country 1' }, { countryCode: 'AAB', name: 'Country 2' }, { id: 3, name: 'Country 3' }]
        db.query.mockResolvedValue([mockRows, null]);

        const result = await getAllCountries();
        expect(result).toEqual(mockRows);

    });
});

describe('getCountryByCode', () => {
    it('should return the country object for a valid countryCode', async () => {
        const mockRows = [{ countryCode: 'AAA', name: 'Country 1' }, { countryCode: 'AAB', name: 'Country 2' }, { id: 3, name: 'Country 3' }]
        const expectedValue = { countryCode: 'AAA', name: 'Country 1'}

        const result = await getCountryByCode('AAA');
        expect(result).toEqual(expectedValue);

    });

    it('should throw an error for an country Code', async () => {
        db.query.mockRejectedValue(new Error('Database Error'));
    
        await expect(getCountryByCode('ZZZ')).rejects.toThrow('Failed to Fetch City by ID');
    });
});