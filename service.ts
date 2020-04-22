
//const presentation = require('./presentation.js');
//var requestPromise = require('request-promise-native');
import requestPromise from 'request-promise-native';
import{afficherClients} from './presentation';
import{afficherErreur} from './presentation';
import {clientAjoute} from './presentation';
import {afficherClient} from './presentation';
import {afficher} from './presentation';

const url = 'http://localhost:8080/';

export function listerClients(){
    requestPromise(url+'clients', 
    { json: true })
    .then((body) => afficherClients(body))
    .catch((err) => afficherErreur(err))
}

export function ajouterClientService(nom:string, prenom:string){
    requestPromise(url+'clients', { json: true,
        method: 'POST',
        body: {
            nom : nom,
            prenoms : prenom
        }})
        .then((body) => clientAjoute(null, body))
        .catch((err) => afficherErreur(err));
}

export function rechercherClientService(nom:string){
    requestPromise(url+'clients/client?nom='+nom, 
        { json: true })
        .then((body) => afficherClient(body))
        .catch((err) => afficherErreur(err))
}

export function verifierDispoChambreService(numero:string){
    requestPromise(url+'chambres/chambreDispo?numero='+numero, 
        { json: true })
        .then((body) => afficher(body))
        .catch((err) => afficherErreur(err))
}