// Challenge Time with async
// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data into it.
// 3:Add more data into the file at the end of the existing data.
// 4:Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder


const fs = require('fs');

// fs.mkdir('thapa', (err) => {
//     console.log("created");
// });

// fs.writeFile('read.txt', 'today is wednesday', (err) => {
//     console.log("file is created");
// });

// fs.appendFile("read.txt", " my channal", (err) => {
//     console.log("task completed")
// });



// Read the data 

// fs.readFile('read.txt', "utf8", (err, data) => {
//     console.log(data);
// });

// rename
// fs.rename('read.tex', "reade.tex", (err) => {
//     console.log("rename");
// })

// fs.unlink('reade.tex', (err) => {
//     console.log("deleted");
// })