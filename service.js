
var presentation = require('./presentation.js');
var request = require('request');

function listerClients(clientsFonction){
    request('http://localhost:8080/clients', 
    { json: true }, 
    function(err, res, body) {
            clientsFonction(err, res, body);
        })
    };

exports.listerClients = listerClients;

function creerClient(creerClientFonction){
    creerClientFonction();
}

exports.creerClient = creerClient;

function ajouterClient(nom, prenom){
    request.post('http://localhost:8080/clients', {
      json: {nom: nom, prenom: prenom}},
        (error, res, body) => {
            if (error) {
                console.error(error);
                return;
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
  });
}

exports.ajouterClient = ajouterClient;