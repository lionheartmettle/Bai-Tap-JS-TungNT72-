const fs = require("fs");
let arr = [];

//Cach 1 : CallBack
// function run(fileNumber) {
//   fs.readFile(`./numfiles/${fileNumber}`, "utf-8", function(err, data) {
//     if (err) {
//       console.log(`Not found file : ` + fileNumber);
//       console.log(arr.join(''));
//       return;
//     }
//     let fileName = Number(data.slice(26, data.length - 4));
//     let binary = Number(data.slice(data.length - 2, data.length - 1));
//     arr.push(binary);
//     run(fileName);
//   });
// }
// run(1024);

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
getPromise(1024).catch(function(e) {
  console.log(arr.join('')); 
});
//Cach 3 : Async - Await
async function read() {
  let res = '';
  let fileName = '1024';

  do {

  } while(fileName != undefined)
}