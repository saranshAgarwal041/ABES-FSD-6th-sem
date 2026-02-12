import fs from 'fs';

export const appendFileSync = (path, data) => {
    try {
        fs.appendFileSync(path, data);
        console.log("Data appended successfully");
    } catch (error) {
        console.log("Error appending data:", error);
    }
};

export const writeFileSync = (path, data) => {
    try {
        fs.writeFileSync(path, data);
        console.log("File written successfully");
    } catch (error) {
        console.log("Error writing file:", error);
    }
};

writeFileSync('./example.txt', 'This data has been written through sync func:writeFileSync');

export const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        console.log("File read successfully:", data);
    } catch (error) {
        console.log("Error reading file:", error);
    }
};

readFileSync('./example.txt');
