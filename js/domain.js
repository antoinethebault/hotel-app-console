"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    function Client(_uuid, _nom, _prenoms) {
        this._uuid = _uuid;
        this._nom = _nom;
        this._prenoms = _prenoms;
    }
    Object.defineProperty(Client.prototype, "uuid", {
        get: function () {
            return this._uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "prenoms", {
        get: function () {
            return this._prenoms;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
