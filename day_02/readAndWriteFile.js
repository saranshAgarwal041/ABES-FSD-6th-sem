import fs, { read, write } from 'fs';
const writeFileSync=(path,data)=>{
    try{
fs.writeFileSync(path,data);
console.log("File written successfully");
}catch(error){
    console.log("Error writing file:");
}
}
writeFileSync('./example.txt','This data has been written through sync func:writeFileSync');
const readFileSync=(path)=>{
    try{
const data=fs.readFileSync(path,'utf-8');
console.log("File read successfully:");
}catch(error){
    console.log("Error reading file:");
}
}
readFileSync('./example.txt');