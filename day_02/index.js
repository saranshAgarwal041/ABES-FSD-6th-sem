import { appendFileSync,readFileSync,writeFileSync } from "./readAndWriteFile.js";

appendFileSync('./example.txt','This data has been appended through sync func:appendFileSync');
readFileSync('./example.txt');
writeFileSync('./example.txt','This data has been written through sync func:writeFileSync');