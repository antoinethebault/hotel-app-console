"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var presentation_1 = require("./presentation");
var url = 'http://localhost:8080/';
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.listerClients = function () {
        request_promise_native_1.default(url + 'clients', { json: true })
            .then(function (body) { return presentation_1.presentation.afficherClients(body); })
            .catch(function (err) { return presentation_1.presentation.afficherErreur(err); });
    };
    Service.ajouterClient = function (nom, prenom) {
        request_promise_native_1.default(url + 'clients', { json: true,
            method: 'POST',
            body: {
                nom: nom,
                prenoms: prenom
            } })
            .then(function (body) { return presentation_1.presentation.clientAjoute(body); })
            .catch(function (err) { return presentation_1.presentation.afficherErreur(err); });
    };
    Service.rechercherClient = function (nom) {
        request_promise_native_1.default(url + 'clients/client?nom=' + nom, { json: true })
            .then(function (body) { return presentation_1.presentation.afficherClients(body); })
            .catch(function (err) { return presentation_1.presentation.afficherErreur(err); });
    };
    Service.verifierDispoChambre = function (numero) {
        request_promise_native_1.default(url + 'chambres/chambreDispo?numero=' + numero, { json: true })
            .then(function (body) { return presentation_1.presentation.afficher(body); })
            .catch(function (err) { return presentation_1.presentation.afficherErreur(err); });
    };
    return Service;
}());
exports.Service = Service;
