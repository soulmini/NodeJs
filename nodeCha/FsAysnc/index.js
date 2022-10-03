//  Node.JS Asynchronous File System Core Modules

const fs = require('fs');

// fs.writeFile('read.txt', 'today is wednesday', (err) => {
//     console.log("file is created");
// });

// we pass them a function as an argument a callback
// that gets called when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it's nothing), and start
// checking for errors.


// fs.appendFile("read.txt", " my channal", (err) => {
//     console.log("task completed")
// });

// Read the data 

fs.readFile('read.txt', "utf8", (err, data) => {
    console.log(data);
});