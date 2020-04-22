"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var service_1 = require("./service");
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
var presentation = /** @class */ (function () {
    function presentation() {
    }
    presentation.choisir = function () {
        start();
        var choix;
        rl.question('', function (line) {
            choix = line;
            if (choix == '1') {
                service_1.Service.listerClients();
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
                presentation.choisir();
            }
        });
    };
    presentation.afficherClients = function (body) {
        console.log('>> Liste des clients');
        for (var i = 0; i < body.length; i++) {
            console.log(body[i].nom + " " + body[i].prenoms);
        }
        presentation.choisir();
    };
    presentation.afficherErreur = function (err) {
        console.log(err.message);
        presentation.choisir();
    };
    presentation.clientAjoute = function (body) {
        console.log('Client créé uuid =', body.uuid);
        presentation.choisir();
    };
    presentation.afficher = function (msg) {
        console.log(msg);
        presentation.choisir();
    };
    return presentation;
}());
exports.presentation = presentation;
function quitter() {
    console.log('Aurevoir');
    process.exit();
}
function ajouterClient(rl) {
    rl.question('Entrez un nom : ', function (saisie) {
        var nom = saisie;
        rl.question('Entrez un prenom : ', function (saisie) {
            var prenom = saisie;
            service_1.Service.ajouterClient(nom, prenom);
        });
    });
}
function rechercherClient() {
    rl.question('Entrez un nom : ', function (saisie) {
        var nom = saisie;
        service_1.Service.rechercherClient(nom);
    });
}
function verifierDispoChambre() {
    rl.question('Entrez le numero : ', function (saisie) {
        var numero = saisie;
        service_1.Service.verifierDispoChambre(numero);
    });
}
