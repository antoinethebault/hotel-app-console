"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const presentation = require('./presentation.js');
//var requestPromise = require('request-promise-native');
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var presentation_1 = require("./presentation");
var presentation_2 = require("./presentation");
var presentation_3 = require("./presentation");
var presentation_4 = require("./presentation");
var url = 'http://localhost:8080/clients';
function listerClients() {
    request_promise_native_1.default(url, { json: true })
        .then(function (body) { return presentation_1.afficherClients(body); })
        .catch(function (err) { return presentation_2.afficherErreur(err); });
}
exports.listerClients = listerClients;
function ajouterClientService(nom, prenom) {
    request_promise_native_1.default(url, { json: true,
        method: 'POST',
        body: {
            nom: nom,
            prenoms: prenom
        } })
        .then(function (body) { return presentation_3.clientAjoute(null, body); })
        .catch(function (err) { return presentation_2.afficherErreur(err); });
}
exports.ajouterClientService = ajouterClientService;
function rechercherClientService(nom) {
    request_promise_native_1.default(url + '/client?nom=' + nom, { json: true })
        .then(function (body) { return presentation_4.afficherClient(body); })
        .catch(function (err) { return presentation_2.afficherErreur(err); });
}
exports.rechercherClientService = rechercherClientService;
