const fs = require('fs');

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // var fs = require('fs');
    // const data = fs.readFileSync('input.txt');
    // res.end(data.toString());

    // 2nd Way
    // Reading from a Stream
    // Create a readable stream
    // Handle stream events data, end, and error
    //     const rstream = fs.createReadStream('input.txt');
    //     rstream.on("data", (chunkData) => {
    //         res.write(chunkData);
    //     });
    //     rstream.on("end", () = {
    //         res.end();
    //     }); 



    // 3rd way 

    const rstream = fs.createReadStream('input.txt');

    rstream.pipe(res);

});


server.listen(8000, "127.0.0.1", () => {
    console.log("listen the port number");
});