# JSON to Zip

[![npm version](https://img.shields.io/npm/v/json-to-zip.svg)](https://www.npmjs.com/package/json-to-zip)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/json-to-zip/blob/main/LICENSE)

A lightweight npm package that converts a JSON object into a zipped file.
This package provides a function `JsonZiip` that takes JSON data and an output file name, creates a zip file with the JSON data, and returns a Buffer of the zipped file.

## Installation

```bash
npm install your-package-name
```
## Usage

``` bash
import { JsonZiip } from 'your-package-name';

const jsonData = {
    key: 'value',
    anotherKey: 'another value'
};

const buffer = JsonZiip(jsonData, 'output');

// `buffer` now contains a Buffer of a zipped file containing `jsonData`
```