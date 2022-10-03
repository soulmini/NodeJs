// Challenge Time
// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data into it.
// 3:Add more data into the file at the end of the existing data.
// 4:Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder



const fs = require('fs');

// fs.mkdirSync('thapa');

// fs.writeFileSync("thapa/bio.txt", "hello or");

// fs.writeFileSync("thapa/bio1.txt", "hello or");

fs.appendFileSync("thapa/bio.txt", "ayush");

// const data = fs.readFileSync("thapa/bio.txt", "utf8");
// console.log(data);

const data = fs.readFileSync("thapa/bio.txt");

real_data = data.toString();
console.log(real_data);