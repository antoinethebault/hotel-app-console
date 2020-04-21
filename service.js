
const presentation = require('./presentation.js');
var request = require('request');
var requestPromise = require('request-promise-native')
const url = 'http://localhost:8080/clients';

function listerClients(){
    requestPromise(url, 
    { json: true })
    .then((body) => presentation.afficherClients(null,null,body))
    .catch((err) => presentation.afficherClients(err,null,null))
}

exports.listerClients = listerClients;

function ajouterClient(nom, prenom){
    requestPromise(url, { json: true,
        method: 'POST',
        body: {
            nom : nom,
            prenoms : prenom
        }})
        .then((body) => presentation.clientAjoute(null, body))
        .catch((err) => presentation.clientAjoute(err, null));
}

exports.ajouterClient = ajouterClient;