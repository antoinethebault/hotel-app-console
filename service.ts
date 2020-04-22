
//const presentation = require('./presentation.js');
//var requestPromise = require('request-promise-native');
import requestPromise from 'request-promise-native';
import{afficherClients} from './presentation';
import{afficherErreur} from './presentation';
import {clientAjoute} from './presentation';

const url = 'http://localhost:8080/clients';

export function listerClients(){
    requestPromise(url, 
    { json: true })
    .then((body) => afficherClients(body))
    .catch((err) => afficherErreur(err))
}

export function ajouterClientService(nom:string, prenom:string){
    requestPromise(url, { json: true,
        method: 'POST',
        body: {
            nom : nom,
            prenoms : prenom
        }})
        .then((body) => clientAjoute(null, body))
        .catch((err) => afficherErreur(err));
}