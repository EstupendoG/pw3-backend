"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Continent_1 = __importDefault(require("../models/Continent"));
var prismaClient_1 = __importDefault(require("../prismaClient"));
var ContinentRepository = /** @class */ (function () {
    function ContinentRepository() {
    }
    // CREATE
    ContinentRepository.prototype.create = function (continent) {
        return __awaiter(this, void 0, void 0, function () {
            var created;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, prismaClient_1.default.continent.create({
                            data: {
                                ctn_nome: continent.getNome,
                                ctn_descricao: continent.getDescricao
                            }
                        })];
                    case 1:
                        created = _b.sent();
                        return [2 /*return*/, new Continent_1.default(created.ctn_nome, (_a = created.ctn_descricao) !== null && _a !== void 0 ? _a : undefined, created.ctn_id)];
                }
            });
        });
    };
    // READ (todos)
    ContinentRepository.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var found;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prismaClient_1.default.continent.findMany()];
                    case 1:
                        found = _a.sent();
                        return [2 /*return*/, found.map(function (f) { var _a; return new Continent_1.default(f.ctn_nome, (_a = f.ctn_descricao) !== null && _a !== void 0 ? _a : undefined, f.ctn_id); })];
                }
            });
        });
    };
    // READ (por id)
    ContinentRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var found;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, prismaClient_1.default.continent.findUnique({
                            where: { ctn_id: id }
                        })];
                    case 1:
                        found = _b.sent();
                        return [2 /*return*/, found
                                ? new Continent_1.default(found.ctn_nome, (_a = found.ctn_descricao) !== null && _a !== void 0 ? _a : undefined, found.ctn_id)
                                : null];
                }
            });
        });
    };
    // UPDATE
    ContinentRepository.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var updated;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, prismaClient_1.default.continent.update({
                            where: { ctn_id: id },
                            data: data
                        })];
                    case 1:
                        updated = _b.sent();
                        return [2 /*return*/, new Continent_1.default(updated.ctn_nome, (_a = updated.ctn_descricao) !== null && _a !== void 0 ? _a : undefined, updated.ctn_id)];
                }
            });
        });
    };
    // DELETE
    ContinentRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prismaClient_1.default.continent.delete({
                            where: { ctn_id: id }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ContinentRepository;
}());
exports.default = ContinentRepository;
