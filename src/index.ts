import fs from 'fs';
import AdmZip from 'adm-zip';

export function JsonZiip(jsonData: any, outputFileName: string): Buffer {
    // Write JSON data to a file
    fs.writeFileSync(`${outputFileName}.json`, JSON.stringify(jsonData));

    // Create a zip file containing temp.json
    const zip = new AdmZip();

    // Check if the file exists before trying to add it to the zip file
    if (fs.existsSync(`${outputFileName}.json`)) {
        zip.addLocalFile(`${outputFileName}.json`);
    }

    zip.writeZip(`${outputFileName}.zip`);

    // Clean up temporary file
    fs.unlinkSync(`${outputFileName}.json`);

    // Read the zipped file into a Buffer
    const data = fs.readFileSync(`${outputFileName}.zip`);

    // Clean up the zipped file
    fs.unlinkSync(`${outputFileName}.zip`);

    // Return the Buffer
    return data;
}