
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

function ajouterClient(nom, prenom, callbackErr, callbackSuccess){
    request('http://localhost:8080/clients', { json: true,
        method: 'POST',
        body: {
            nom : nom,
            prenoms : prenom
        }
    }, function(err, res, body) {
        if (err) { 
            callbackErr(err)
        } else {
            callbackSuccess(body)
        }
    });
}

exports.ajouterClient = ajouterClient;