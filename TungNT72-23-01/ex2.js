const fs = require("fs");
let arr = [];

//Cach 1 : CallBack
// fs.readFile("./numfiles/1024", "utf-8", function(err, data) {
//   if (err) {
//     throw err;
//   }
//   let fileNumber = Number(data.slice(26, data.length - 4));
//   let binary = Number(data.slice(data.length - 2, data.length - 1));
//   arr.push(binary);
//   return run(fileNumber);
// });

// function run(fileNumber) {
//   fs.readFile(`./numfiles/${fileNumber}`, "utf-8", function(err, data) {
//     if (err) {
//       throw arr.join('');
//     }
//     let fileNumber = Number(data.slice(26, data.length - 4));
//     let binary = Number(data.slice(data.length - 2, data.length - 1));
//     arr.push(binary);
//     return run(fileNumber);
//   });
// }

//Cach 2 : Promise
function getPromise(fileNumber) {  
  return new Promise(function (resolve,reject) {
    fs.readFile(`./numfiles/${fileNumber}`, "utf-8", function(err, data) {
      if (err) {
        reject(err);
      } else {
        let fileNumber = Number(data.slice(26, data.length - 4));
        let binary = Number(data.slice(data.length - 2, data.length - 1));
        arr.push(binary);
        resolve(fileNumber);        
      }
    });
  }).then((data) => getPromise(data));
}
fs.readFile("./numfiles/1024", "utf-8", function(err, data) {
  if (err) {
    throw err;
  }
  let fileNumber = Number(data.slice(26, data.length - 4));
  let binary = Number(data.slice(data.length - 2, data.length - 1));
  arr.push(binary);  
  getPromise(fileNumber).catch(function(e) {
    console.log(arr.join('')); 
  });
});

