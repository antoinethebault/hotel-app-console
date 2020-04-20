var services = require('./services.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var choix = 0;
services.afficherMenu();
rl.on('line', (line) => {
    console.log(`Received: ${line}`);
});
