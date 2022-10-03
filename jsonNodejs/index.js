 const fs = require("fs");
 const bioData = {
     name: "Ayush",
     age: 26,
     channel: "Thapa Technical",
 };


 //  const jsonData = JSON.stringify(bioData);

 //  console.log(jsonData);

 //  const objData = JSON.parse(jsonData);
 //  console.log(objData);



 // 1: convert to JSON => done
 // 2:dusre file me add krdena
 // 3: readfile
 // 4:again convert back to js obj ori
 // 5:console.log


 const jsonData = JSON.stringify(bioData);
 fs.writeFile('json1.json', jsonData, (err) => {
     console.log("done");
 })

 fs.readFile('json1.json', "utf-8", (err, date) => {
     //  console.log(data);
     const orgData = JSON.parse(data);
     //  console.log(data);
     console.log(orgData);
 });