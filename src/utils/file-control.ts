import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

const filePath = join('src/countries/data/countries.json');

export const readData = () => {
    return JSON.parse(readFileSync(filePath, "utf-8"));
}

export const writeData = (data: object) => {
    writeFileSync(filePath, JSON.stringify(data, null, 2));
}