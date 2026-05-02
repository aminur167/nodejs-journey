const fs = require('fs');

// write kora.....
// fs.writeFileSync('myfile.txt','Hello Programmer!')
// fs.appendFileSync('myfile.txt',' How are you?')


// read kora......
const data = fs.readFileSync('myfile.txt');
console.log(data.toString());


