"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var City = /** @class */ (function () {
    // Constructor
    function City(nome, populacao, latitude, longitude, id_pais, id) {
        this.nome = nome;
        this.populacao = populacao;
        this.latitude = latitude;
        this.longitude = longitude;
        this.id_pais = id_pais;
        this.id = id;
    }
    Object.defineProperty(City.prototype, "getId", {
        // Getters
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "getPopulacao", {
        get: function () {
            return this.populacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "getLatitude", {
        get: function () {
            return this.latitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "getLongitude", {
        get: function () {
            return this.longitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "getId_pais", {
        get: function () {
            return this.id_pais;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "setId", {
        // Setters
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "setPopulacao", {
        set: function (populacao) {
            this.populacao = populacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "setLatitude", {
        set: function (latitude) {
            this.latitude = latitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "setLongitude", {
        set: function (longitude) {
            this.longitude = longitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "setId_pais", {
        set: function (id_pais) {
            this.id_pais = id_pais;
        },
        enumerable: false,
        configurable: true
    });
    return City;
}());
exports.default = City;
