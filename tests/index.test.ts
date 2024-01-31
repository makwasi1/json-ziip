import fs from 'fs';
import { JsonZiip } from '../src/index';

jest.mock('fs');

describe('JsonZiip', () => {
    it('should create a zip file from JSON data and return a Buffer', () => {
        const jsonData = { key: 'value' };
        const outputFileName = 'test';

        // Mock fs functions
        (fs.writeFileSync as jest.Mock).mockImplementation(() => {});
        (fs.unlinkSync as jest.Mock).mockImplementation(() => {});
        (fs.readFileSync as jest.Mock).mockImplementation(() => Buffer.from('test data'));

        const result = JsonZiip(jsonData, outputFileName);

        // Check that writeFileSync was called with the correct arguments
        expect(fs.writeFileSync).toHaveBeenCalledWith(`${outputFileName}.json`, JSON.stringify(jsonData));

        // Check that readFileSync was called with the correct arguments
        expect(fs.readFileSync).toHaveBeenCalledWith(`${outputFileName}.zip`);

        // Check that unlinkSync was called with the correct arguments
        expect(fs.unlinkSync).toHaveBeenCalledWith(`${outputFileName}.json`);
        expect(fs.unlinkSync).toHaveBeenCalledWith(`${outputFileName}.zip`);

        // Check that the function returned a Buffer
        expect(result).toBeInstanceOf(Buffer);
    });
});