"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Continent = /** @class */ (function () {
    // Constructor
    function Continent(nome, descricao, id) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    Object.defineProperty(Continent.prototype, "getId", {
        // Getters
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continent.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continent.prototype, "getDescricao", {
        get: function () {
            return this.descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continent.prototype, "setId", {
        // Setters
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continent.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Continent.prototype, "setDescricao", {
        set: function (descricao) {
            this.descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    return Continent;
}());
exports.default = Continent;
