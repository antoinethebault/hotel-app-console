
const service = require('./service.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start(){
    console.log('** Administration Hotel **\n');
    console.log('1. Lister les clients');
    console.log('2. Ajouter un client');
    console.log('3. Rechercher un client par nom');
    console.log('4. Vérifier la disponibilité d\'une chambre');
    console.log('99. Quitter\n')
    console.log('Choisir une action : ')
}

exports.start = start;

function quitter(){
    console.log('Aurevoir');
    process.exit();
}

exports.quitter = quitter;

function afficherClients(err, res, body){
    if (err) { return console.log('Erreur', err); }
    console.log('>> Liste des clients');
    for (let i=0; i<body.length; i++){
        console.log(body[i].nom+" "+body[i].prenoms)
    }
    choisir();
}

exports.afficherClients = afficherClients;

function ajouterClient(rl){
    rl.question('Entrez un nom : ', (saisie) => {
        const nom = saisie;
        rl.question('Entrez un prenom : ', (saisie) => {
            const prenom = saisie;
            service.ajouterClient(nom, prenom, 
                (err) => {
                console.log(err);
                choisir();
            }, (body) => {
                console.log('Client créé uuid =', body.uuid);
                choisir();
            });
        });
    });
}

exports.ajouterClient = ajouterClient;

function choisir(){
start();
let choix;

  rl.question('', (line) => {
    choix = line;
    if (choix == '1'){
      service.listerClients();
    }
    else if (choix =='2'){
      service.creerClient(() => {
        ajouterClient(rl);
      });      
    }
    else if (choix == '99'){
      rl.close();
      quitter();
    }
    else {
        choisir();
    }
  });
}

exports.choisir = choisir;