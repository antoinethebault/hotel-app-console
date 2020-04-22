"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const service = require('./service.js');
//const readline = require('readline');
var readline_1 = __importDefault(require("readline"));
var service_1 = require("./service");
var service_2 = require("./service");
var service_3 = require("./service");
var service_4 = require("./service");
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function start() {
    console.log('** Administration Hotel **\n');
    console.log('1. Lister les clients');
    console.log('2. Ajouter un client');
    console.log('3. Rechercher un client par nom');
    console.log('4. Vérifier la disponibilité d\'une chambre');
    console.log('99. Quitter\n');
    console.log('Choisir une action : ');
}
exports.start = start;
function quitter() {
    console.log('Aurevoir');
    process.exit();
}
function afficherErreur(err) {
    console.log(err.message);
    choisir();
}
exports.afficherErreur = afficherErreur;
function afficher(msg) {
    console.log(msg);
    choisir();
}
exports.afficher = afficher;
function afficherClients(body) {
    console.log('>> Liste des clients');
    for (var i = 0; i < body.length; i++) {
        console.log(body[i].nom + " " + body[i].prenoms);
    }
    choisir();
}
exports.afficherClients = afficherClients;
function ajouterClient(rl) {
    rl.question('Entrez un nom : ', function (saisie) {
        var nom = saisie;
        rl.question('Entrez un prenom : ', function (saisie) {
            var prenom = saisie;
            service_2.ajouterClientService(nom, prenom);
        });
    });
}
function clientAjoute(err, body) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Client créé uuid =', body.uuid);
        choisir();
    }
}
exports.clientAjoute = clientAjoute;
function rechercherClient() {
    rl.question('Entrez un nom : ', function (saisie) {
        var nom = saisie;
        service_3.rechercherClientService(nom);
    });
}
function afficherClient(client) {
    console.log('Client trouve :');
    console.log(client);
    choisir();
}
exports.afficherClient = afficherClient;
function verifierDispoChambre() {
    rl.question('Entrez le numero : ', function (saisie) {
        var numero = saisie;
        service_4.verifierDispoChambreService(numero);
    });
}
function choisir() {
    start();
    var choix;
    rl.question('', function (line) {
        choix = line;
        if (choix == '1') {
            service_1.listerClients();
        }
        else if (choix == '2') {
            ajouterClient(rl);
        }
        else if (choix == '3') {
            rechercherClient();
        }
        else if (choix == '4') {
            verifierDispoChambre();
        }
        else if (choix == '99') {
            rl.close();
            quitter();
        }
        else {
            choisir();
        }
    });
}
exports.choisir = choisir;
