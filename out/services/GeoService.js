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
var prismaClient_1 = __importDefault(require("../prismaClient"));
var ContinentRepository_1 = __importDefault(require("../repositories/ContinentRepository"));
var CountryRepository_1 = __importDefault(require("../repositories/CountryRepository"));
var Continent_1 = __importDefault(require("../models/Continent"));
var Country_1 = __importDefault(require("../models/Country"));
var CONTINENTS_MAP = {
    "Africa": "África",
    "Antarctica": "Antártida",
    "Asia": "Ásia",
    "Europe": "Europa",
    "North America": "América do Norte",
    "South America": "América do Sul",
    "Oceania": "Oceania"
};
var LANGUAGES_PT = {
    "Afrikaans": "Africânder",
    "Albanian": "Albanês",
    "Amharic": "Amárico",
    "Arabic": "Árabe",
    "Armenian": "Armênio",
    "Aymara": "Aimará",
    "Azerbaijani": "Azeri",
    "Bangladeshi": "Bengali",
    "Basque": "Basco",
    "Belarusian": "Bielorrusso",
    "Bengali": "Bengali",
    "Berber": "Berbere",
    "Bislama": "Bislama",
    "Bosnian": "Bósnio",
    "Bulgarian": "Búlgaro",
    "Burmese": "Birmanês",
    "Cambodian": "Cambojano",
    "Carolinian": "Carolínio",
    "Catalan": "Catalão",
    "Chibarwe": "Chibarwe",
    "Chinese": "Chinês",
    "Croatian": "Croata",
    "Czech": "Tcheco",
    "Danish": "Dinamarquês",
    "Dari": "Dari",
    "Divehi": "Divehi",
    "Dutch": "Holandês",
    "English": "Inglês",
    "Estonian": "Estoniano",
    "Faroese": "Faroês",
    "Fijian": "Fijiano",
    "Finnish": "Finlandês",
    "French": "Francês",
    "Georgian": "Georgiano",
    "German": "Alemão",
    "Ghanaian": "Ganês",
    "Greek": "Grego",
    "Greenlandic": "Gronelandês",
    "Guaraní": "Guarani",
    "Gujarati": "Gujarati",
    "Haitian Creole": "Crioulo Haitiano",
    "Hausa": "Hauçá",
    "Hebrew": "Hebraico",
    "Hindi": "Hindi",
    "Hungarian": "Húngaro",
    "Icelandic": "Islandês",
    "Igbo": "Ibo",
    "Indonesian": "Indonésio",
    "Irish": "Irlandês",
    "Italian": "Italiano",
    "Japanese": "Japonês",
    "Javanese": "Javanês",
    "Kazakh": "Cazaque",
    "Khmer": "Khmer",
    "Korean": "Coreano",
    "Kurdish": "Curdo",
    "Kyrgyz": "Quirguiz",
    "Lao": "Laosiano",
    "Latin": "Latim",
    "Latvian": "Letão",
    "Lingala": "Lingala",
    "Lithuanian": "Lituano",
    "Luxembourgish": "Luxemburguês",
    "Macedonian": "Macedônio",
    "Malagasy": "Malgaxe",
    "Malay": "Malaio",
    "Malayalam": "Malaiala",
    "Maltese": "Maltês",
    "Maldivian": "Maldiviano",
    "Marathi": "Marathi",
    "Mongolian": "Mongol",
    "Montenegrin": "Montenegrino",
    "Nepali": "Nepalês",
    "Norwegian": "Norueguês",
    "Norwegian Nynorsk": "Norueguês Nynorsk",
    "Pali": "Páli",
    "Panjabi": "Panjabi",
    "Papiamento": "Papiamento",
    "Persian (Farsi)": "Persa",
    "Polish": "Polonês",
    "Portuguese": "Português",
    "Punjabi": "Punjabi",
    "Romanian": "Romeno",
    "Russian": "Russo",
    "Samoan": "Samoano",
    "Sango": "Sango",
    "Sanskrit": "Sânscrito",
    "Serbian": "Sérvio",
    "Seychellois Creole": "Crioulo Seichelense",
    "Shona": "Shona",
    "Sinhala": "Cingalês",
    "Slovak": "Eslovaco",
    "Slovene": "Esloveno",
    "Somali": "Somali",
    "Spanish": "Espanhol",
    "Swahili": "Suaíli",
    "Swedish": "Sueco",
    "Swiss German": "Alemão Suíço",
    "Tagalog": "Tagalo",
    "Tajik": "Tajique",
    "Tamil": "Tâmil",
    "Tatar": "Tártaro",
    "Telugu": "Télugo",
    "Thai": "Tailandês",
    "Tibetan": "Tibetano",
    "Tigrinya": "Tigrínia",
    "Tok Pisin": "Tok Pisin",
    "Tonga": "Tonga",
    "Tsonga": "Tsonga",
    "Turkish": "Turco",
    "Turkmen": "Turcomeno",
    "Twi": "Twi",
    "Ukrainian": "Ucraniano",
    "Urdu": "Urdu",
    "Uyghur": "Uigur",
    "Uzbek": "Uzbeque",
    "Vietnamese": "Vietnamita",
    "Walloon": "Valão",
    "Welsh": "Galês",
    "Xhosa": "Xosa",
    "Yiddish": "Iídiche",
    "Yoruba": "Iorubá",
    "Zulu": "Zulu"
};
var CURRENCIES_PT = {
    "Euro": "Euro",
    "US Dollar": "Dólar Americano",
    "British Pound": "Libra Esterlina",
    "Japanese Yen": "Iene Japonês",
    "Swiss Franc": "Franco Suíço",
    "Canadian Dollar": "Dólar Canadense",
    "Australian Dollar": "Dólar Australiano",
    "New Zealand Dollar": "Dólar Neozelandês",
    "Chinese Yuan": "Yuan Chinês",
    "Indian Rupee": "Rupia Indiana",
    "Brazilian Real": "Real Brasileiro",
    "Russian Ruble": "Rublo Russo",
    "Mexican Peso": "Peso Mexicano",
    "Singapore Dollar": "Dólar de Singapura",
    "Hong Kong Dollar": "Dólar de Hong Kong",
    "Swedish Krona": "Coroa Sueca",
    "Norwegian Krone": "Coroa Norueguesa",
    "Danish Krone": "Coroa Dinamarquesa",
    "Polish Zloty": "Zloty Polonês",
    "Czech Koruna": "Coroa Tcheca",
    "Hungarian Forint": "Forint Húngaro",
    "Romanian Leu": "Leu Romeno",
    "Turkish Lira": "Lira Turca",
    "South African Rand": "Rand Sul-Africano",
    "Israeli Shekel": "Shekel Israelense",
    "Thai Baht": "Baht Tailandês",
    "Malaysian Ringgit": "Ringgit Malaio",
    "Indonesian Rupiah": "Rupia Indonésia",
    "Philippine Peso": "Peso Filipinense",
    "Vietnamese Dong": "Dong Vietnamita",
    "Pakistani Rupee": "Rupia Paquistanesa",
    "Bangladesh Taka": "Taka Bengali",
    "Sri Lankan Rupee": "Rupia do Sri Lanka",
    "Kuwait Dinar": "Dinar Kuwaitiano",
    "Saudi Riyal": "Rial Saudita",
    "United Arab Emirates Dirham": "Dirham dos EAU",
    "Qatari Rial": "Rial Qatariano",
    "Omani Rial": "Rial Omanense",
    "Bahraini Dinar": "Dinar Barenita",
    "Argentine Peso": "Peso Argentino",
    "Chilean Peso": "Peso Chileno",
    "Colombian Peso": "Peso Colombiano",
    "Peruvian Sol": "Sol Peruano",
    "Venezuelan Bolivar": "Bolívar Venezuelano",
    "Ecuadorian Dollar": "Dólar Equatoriano"
};
var GeoService = /** @class */ (function () {
    function GeoService() {
        this.continentRepository = new ContinentRepository_1.default();
        this.countryRepository = new CountryRepository_1.default();
    }
    // Busca dados da API REST Countries
    GeoService.prototype.fetchFromRestCountries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://restcountries.com/v3.1/all?fields=name,flag,languages,currencies,continents,translations,population")];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("Erro ao buscar dados da API REST Countries");
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // Sincroniza continentes no banco usando o repository
    GeoService.prototype.syncContinents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var continentMap, _i, _a, _b, engName, ptName, continent, newContinent, created;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        continentMap = new Map();
                        _i = 0, _a = Object.entries(CONTINENTS_MAP);
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        _b = _a[_i], engName = _b[0], ptName = _b[1];
                        return [4 /*yield*/, prismaClient_1.default.continent.findFirst({
                                where: { ctn_nome: ptName }
                            })];
                    case 2:
                        continent = _c.sent();
                        if (!!continent) return [3 /*break*/, 4];
                        newContinent = new Continent_1.default(ptName, "Continente: ".concat(ptName));
                        return [4 /*yield*/, this.continentRepository.create(newContinent)];
                    case 3:
                        created = _c.sent();
                        continentMap.set(engName, created.getId);
                        return [3 /*break*/, 5];
                    case 4:
                        continentMap.set(engName, continent.ctn_id);
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, continentMap];
                }
            });
        });
    };
    // Sincroniza países no banco usando o repository
    GeoService.prototype.syncCountries = function (countries, continentMap) {
        return __awaiter(this, void 0, void 0, function () {
            var count, _i, countries_1, country, countryName, continentEng, continentId, languageEn, language, currencyEn, currency, population, existingCountry, newCountry, error_1;
            var _a, _b, _c, _d, _e, _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        count = 0;
                        _i = 0, countries_1 = countries;
                        _h.label = 1;
                    case 1:
                        if (!(_i < countries_1.length)) return [3 /*break*/, 8];
                        country = countries_1[_i];
                        _h.label = 2;
                    case 2:
                        _h.trys.push([2, 6, , 7]);
                        countryName = (_c = (_b = (_a = country.translations) === null || _a === void 0 ? void 0 : _a.por) === null || _b === void 0 ? void 0 : _b.common) !== null && _c !== void 0 ? _c : country.name.common;
                        continentEng = ((_d = country.continents) === null || _d === void 0 ? void 0 : _d[0]) || "Oceania";
                        continentId = continentMap.get(continentEng);
                        if (!continentId)
                            return [3 /*break*/, 7];
                        languageEn = country.languages
                            ? Object.values(country.languages)[0]
                            : "Desconhecido";
                        language = LANGUAGES_PT[languageEn] || languageEn;
                        currencyEn = country.currencies
                            ? (_f = (_e = Object.values(country.currencies)[0]) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : "Desconhecida"
                            : "Desconhecida";
                        currency = CURRENCIES_PT[currencyEn] || currencyEn;
                        population = (_g = country.population) !== null && _g !== void 0 ? _g : 0;
                        return [4 /*yield*/, prismaClient_1.default.country.findFirst({
                                where: { ctr_nome: countryName }
                            })];
                    case 3:
                        existingCountry = _h.sent();
                        if (!!existingCountry) return [3 /*break*/, 5];
                        newCountry = new Country_1.default(countryName, population, language, continentId, currency);
                        console.log("[DEBUG] Criando pa\u00EDs: ".concat(countryName, ", idioma: ").concat(language, ", moeda: ").concat(currency, ", continente: ").concat(continentId));
                        return [4 /*yield*/, this.countryRepository.create(newCountry)];
                    case 4:
                        _h.sent();
                        count++;
                        _h.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _h.sent();
                        console.error("Erro ao processar pa\u00EDs:", error_1);
                        return [3 /*break*/, 7];
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8:
                        console.log("[DEBUG] ".concat(count, " pa\u00EDses criados"));
                        return [2 /*return*/];
                }
            });
        });
    };
    // Inicializa dados geográficos (executado uma vez ao iniciar o servidor)
    GeoService.prototype.initializeGeoData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var existingContinents, countriesData, continentMap, countryCount, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, prismaClient_1.default.continent.count()];
                    case 1:
                        existingContinents = _a.sent();
                        if (existingContinents > 0) {
                            console.log("[INFO] Banco de dados j\u00E1 cont\u00E9m dados. Pulando sincroniza\u00E7\u00E3o.");
                            return [2 /*return*/];
                        }
                        console.log("[INFO] Banco vazio. Iniciando sincroniza\u00E7\u00E3o de dados...");
                        return [4 /*yield*/, this.fetchFromRestCountries()];
                    case 2:
                        countriesData = _a.sent();
                        return [4 /*yield*/, this.syncContinents()];
                    case 3:
                        continentMap = _a.sent();
                        return [4 /*yield*/, this.syncCountries(countriesData, continentMap)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, prismaClient_1.default.country.count()];
                    case 5:
                        countryCount = _a.sent();
                        console.log("[INFO] Sincroniza\u00E7\u00E3o conclu\u00EDda! ".concat(countryCount, " pa\u00EDses carregados."));
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        console.error("Erro ao inicializar dados geográficos:", error_2);
                        throw error_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    // Função para sincronizar manualmente (se necessário)
    GeoService.prototype.syncGeoData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var countriesData, continentMap, continents, countries, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.fetchFromRestCountries()];
                    case 1:
                        countriesData = _a.sent();
                        return [4 /*yield*/, this.syncContinents()];
                    case 2:
                        continentMap = _a.sent();
                        return [4 /*yield*/, this.syncCountries(countriesData, continentMap)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, prismaClient_1.default.continent.findMany()];
                    case 4:
                        continents = _a.sent();
                        return [4 /*yield*/, prismaClient_1.default.country.findMany({
                                include: {
                                    continent: true
                                }
                            })];
                    case 5:
                        countries = _a.sent();
                        return [2 /*return*/, {
                                continentes: continents.map(function (c) { return ({
                                    id: c.ctn_id,
                                    nome: c.ctn_nome,
                                    descricao: c.ctn_descricao
                                }); }),
                                paises: countries.map(function (c) { return ({
                                    id: c.ctr_id,
                                    nome: c.ctr_nome,
                                    populacao: c.ctr_populacao,
                                    idioma: c.ctr_idioma,
                                    moeda: c.ctr_moeda,
                                    continente: c.continent.ctn_nome
                                }); })
                            }];
                    case 6:
                        error_3 = _a.sent();
                        console.error("Erro ao sincronizar dados geográficos:", error_3);
                        throw error_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    // Apenas retorna dados sem sincronizar
    GeoService.prototype.getGeoData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var continents, countries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prismaClient_1.default.continent.findMany()];
                    case 1:
                        continents = _a.sent();
                        return [4 /*yield*/, prismaClient_1.default.country.findMany({
                                include: {
                                    continent: true
                                }
                            })];
                    case 2:
                        countries = _a.sent();
                        return [2 /*return*/, {
                                continentes: continents.map(function (c) { return ({
                                    id: c.ctn_id,
                                    nome: c.ctn_nome,
                                    descricao: c.ctn_descricao
                                }); }),
                                paises: countries.map(function (c) { return ({
                                    id: c.ctr_id,
                                    nome: c.ctr_nome,
                                    populacao: c.ctr_populacao,
                                    idioma: c.ctr_idioma,
                                    moeda: c.ctr_moeda,
                                    continente: c.continent.ctn_nome
                                }); })
                            }];
                }
            });
        });
    };
    return GeoService;
}());
exports.default = GeoService;
