
var request = require('request');
var requestPromise = require('request-promise-native')

function listerClients(clientsFonction){
    requestPromise('http://localhost:8080/clients', 
    { json: true })
    .then((body) => clientsFonction(null, null, body))
    .catch((err) => clientsFonction(err, null, null))
}

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
    }, (err, res, body) => {
        if (err) { 
            callbackErr(err)
        } else {
            callbackSuccess(body)
        }
    });
}

exports.ajouterClient = ajouterClient;