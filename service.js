
var request = require('request');
var requestPromise = require('request-promise-native')
const url = 'http://localhost:8080/clients';

function listerClients(clientsFonction){
    requestPromise(url, 
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
    requestPromise(url, { json: true,
        method: 'POST',
        body: {
            nom : nom,
            prenoms : prenom
        }})
        .then((body) => callbackSuccess(body))
        .catch((err) => callbackErr(err));
}

exports.ajouterClient = ajouterClient;