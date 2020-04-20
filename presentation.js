
var service = require('./service.js');
var index = require('./index.js');

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
    for (var i=0; i<body.length; i++){
        console.log(body[i].nom+" "+body[i].prenoms)
    }
}

exports.afficherClients = afficherClients;

function ajouterClient(rl){
    rl.question('Entrez un nom : ', function(saisie){
        var nom = saisie;
        rl.question('Entrez un prenom : ', function(saisie){
            var prenom = saisie;
            service.ajouterClient(nom, prenom, 
                function(err){
                console.log(err);
                index.choisir();
            }, function (body){
                console.log('Client créé uuid =', body.uuid);
                index.choisir();
            });
            index.choisir();
        });
    });
}

exports.ajouterClient = ajouterClient;