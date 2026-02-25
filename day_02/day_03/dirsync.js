import fs from "fs";
const readDirSync = (path) => {
    try {
        const files = fs.readdirSync(path);
        console.log("Directory contents:", files);
    } catch (error) {
        console.log("Error reading directory:", error);
    }
};
const makeDirSync = (path) => {
    try {
        fs.mkdirSync(path, { recursive: true });
        console.log("Directory created successfully");
    } catch (error) {
        console.log("Error creating directory:", error);
    }
};
const removeDirSync = (path) => {
    try {
        fs.rmSync(path, { recursive: true, force: true });
        console.log("Directory removed successfully");
    } catch (error) {
        console.log("Error removing directory:", error);
    }
};
makeDirSync('../day_04');     
readDirSync('../');          
removeDirSync('../day_04');   

