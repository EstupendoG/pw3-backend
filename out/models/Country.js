"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Country = /** @class */ (function () {
    // Constructor
    function Country(nome, populacao, idioma, id_continente, moeda, id) {
        this.id = id;
        this.nome = nome;
        this.populacao = populacao;
        this.idioma = idioma;
        this.id_continente = id_continente;
        this.moeda = moeda;
    }
    Object.defineProperty(Country.prototype, "getId", {
        // Getters
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "getPopulacao", {
        get: function () {
            return this.populacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "getIdioma", {
        get: function () {
            return this.idioma;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "getMoeda", {
        get: function () {
            return this.moeda;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "getId_Continente", {
        get: function () {
            return this.id_continente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "setId", {
        // Setters
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "setPopulacao", {
        set: function (populacao) {
            this.populacao = populacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "setIdioma", {
        set: function (idioma) {
            this.idioma = idioma;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "setMoeda", {
        set: function (moeda) {
            this.moeda = moeda;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "setId_Continente", {
        set: function (id_continente) {
            this.id_continente = id_continente;
        },
        enumerable: false,
        configurable: true
    });
    return Country;
}());
exports.default = Country;
