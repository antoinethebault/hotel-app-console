var presentation = require('./presentation.js');
var service = require('./service.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

choisir();

function choisir(){
presentation.start();
var choix;
  rl.question('', function(line) {
    choix = line;
    if (choix == '1'){
      service.listerClients(function(err, res, clients){
        presentation.afficherClients(err, res, clients);
        choisir();
      });
    }
    else if (choix =='2'){
      service.creerClient(function(){
        presentation.ajouterClient(rl);
        choisir();
      });      
    }
    else if (choix == '99'){
      rl.close();
      presentation.quitter();
    }
  });
}

exports.choisir = choisir;

