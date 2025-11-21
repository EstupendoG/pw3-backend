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
var LANGUAGES_PT_MAP = {
    "Afrikaans": "Africânder", "Albanian": "Albanês", "Amharic": "Amárico",
    "Arabic": "Árabe", "Armenian": "Armênio", "Aymara": "Aimará",
    "Azerbaijani": "Azerbaijano", "Basque": "Basco", "Belarusian": "Bielorrusso",
    "Bengali": "Bengali", "Berber": "Berbere", "Bislama": "Bislamá",
    "Bosnian": "Bosníaco", "Bulgarian": "Búlgaro", "Burmese": "Birmanês",
    "Catalan": "Catalão", "Chamorro": "Chamorro", "Chinese": "Chinês",
    "Croatian": "Croata", "Czech": "Tcheco", "Danish": "Dinamarquês",
    "Dari": "Dari", "Divehi": "Divehi", "Dutch": "Holandês",
    "Dzongkha": "Dzongkha", "English": "Inglês", "Estonian": "Estoniano",
    "Faroese": "Feroês", "Fijian": "Fijiano", "Finnish": "Finlandês",
    "French": "Francês", "Fula": "Fula", "Gaelic": "Gaélico",
    "Galician": "Galego", "Ganda": "Ganda", "Georgian": "Georgiano",
    "German": "Alemão", "Greek": "Grego", "Greenlandic": "Groenlandês",
    "Guarani": "Guarani", "Gujarati": "Gujarati", "Haitian Creole": "Crioulo Haitiano",
    "Hausa": "Hauçá", "Hebrew": "Hebraico", "Hindi": "Hindi",
    "Hiri Motu": "Hiri Motu", "Hungarian": "Húngaro", "Icelandic": "Islandês",
    "Igbo": "Igbo", "Indonesian": "Indonésio", "Irish": "Irlandês",
    "Italian": "Italiano", "Japanese": "Japonês", "Javanese": "Javanês",
    "Kannada": "Kannada", "Kanuri": "Kanuri", "Kashmiri": "Caxemira",
    "Kazakh": "Cazaque", "Khmer": "Khmer", "Kikuyu": "Kikuyu",
    "Kinyarwanda": "Quiniaruanda", "Korean": "Coreano", "Kyrgyz": "Quirguiz",
    "Lao": "Lao", "Latin": "Latim", "Latvian": "Letão",
    "Letzeburgesh": "Luxemburguês", "Lingala": "Lingala", "Lithuanian": "Lituano",
    "Luba-Katanga": "Luba-Katanga", "Luo": "Luo", "Luxembourgish": "Luxemburguês",
    "Macedonian": "Macedônio", "Madurese": "Madurês", "Malagasy": "Malgaxe",
    "Malay": "Malaio", "Malayalam": "Malaiala", "Maldivian": "Maldiviano",
    "Maltese": "Maltês", "Manipuri": "Manipuri", "Manx": "Manx",
    "Maori": "Maori", "Marathi": "Marati", "Mari": "Mari",
    "Marshallese": "Marshalês", "Minangkabau": "Minangkabau", "Mirandese": "Mirandês",
    "Miskito": "Miskito", "Mohawk": "Mohawk", "Moldavian": "Moldavo",
    "Mongolian": "Mongol", "Montenegrin": "Montenegrino", "Morisyen": "Morisien",
    "Mossi": "Mossi", "Nahuatl": "Nahuatl", "Namibian": "Namibiano",
    "Nauruan": "Nauruano", "Navajo": "Navajo", "Ndonga": "Ndonga",
    "Nepali": "Nepalês", "Newari": "Newari", "Nias": "Nias",
    "Niuean": "Niueano", "Norwegian": "Norueguês", "Norwegian Bokmal": "Norueguês Bokmål",
    "Norwegian Nynorsk": "Norueguês Nynorsk", "Occitan": "Occitano", "Odia": "Odia",
    "Ojibwa": "Ojibwa", "Oromo": "Oromo", "Ossetian": "Ossético",
    "Palauan": "Palauano", "Pali": "Pali", "Papiamento": "Papiamento",
    "Pashto": "Paxto", "Persian (Farsi)": "Persa", "Polish": "Polonês",
    "Portuguese": "Português", "Romanian": "Romeno", "Russian": "Russo",
    "Samoan": "Samoano", "Sango": "Sango", "Sanskrit": "Sânscrito",
    "Serbian": "Sérvio", "Seychellois Creole": "Crioulo Seichelense", "Shan": "Shan",
    "Shona": "Shona", "Sicilian": "Siciliano", "Sindhi": "Sindi",
    "Sinhala": "Cingalês", "Siswati": "Siswati", "Slovak": "Eslovaco",
    "Slovene": "Esloveno", "Somali": "Somali", "Spanish": "Espanhol",
    "Sundanese": "Sundanês", "Susu": "Susu", "Swahili": "Suaíli",
    "Swati": "Suati", "Swedish": "Sueco", "Tagalog": "Tagalo",
    "Tajik": "Tadjique", "Tamil": "Tâmil", "Tatar": "Tátaro",
    "Telugu": "Telugu", "Tetum": "Tétum", "Thai": "Tailandês",
    "Tibetan": "Tibetano", "Tigre": "Tigre", "Tigrinya": "Tigrínia",
    "Tok Pisin": "Tok Pisin", "Tokelauan": "Tokelauano", "Tonga": "Tonganês",
    "Tongan": "Tonganês", "Tswana": "Tswana", "Tumbuka": "Tumbuka",
    "Turkish": "Turco", "Turkmen": "Turcomeno", "Tuvan": "Tuvan",
    "Twi": "Twi", "Udmurt": "Udmurt", "Ukrainian": "Ucraniano",
    "Umbundu": "Umbundo", "Upper Sorbian": "Alto Sórbio", "Urdu": "Urdu",
    "Uyghur": "Uigur", "Uzbek": "Uzbeque", "Vai": "Vai",
    "Venda": "Venda", "Vietnamese": "Vietnamita", "Volapük": "Volapük",
    "Walloon": "Valon", "Waray": "Waray", "Welsh": "Galês",
    "Wolof": "Vólof", "Xhosa": "Xhosa", "Yakut": "Iakuto",
    "Yao": "Yao", "Yapese": "Yapês", "Yiddish": "Iídiche",
    "Yoruba": "Iorubá", "Yupik": "Yupik", "Zapotec": "Zapoteca",
    "Zaza": "Zaza", "Zhuang": "Zhuang", "Zulu": "Zulu"
};
var CURRENCIES_PT_MAP = {
    "Afghan Afghani": "Afegani Afegão", "Albanian Lek": "Lek Albanês",
    "Algerian Dinar": "Dinar Argelino", "Angolan Kwanza": "Kwanza Angolano",
    "Argentine Peso": "Peso Argentino", "Armenian Dram": "Dram Armênio",
    "Aruban Florin": "Florim de Aruba", "Australian Dollar": "Dólar Australiano",
    "Azerbaijani Manat": "Manat Azerbaijano", "Bahamian Dollar": "Dólar das Bahamas",
    "Bahraini Dinar": "Dinar do Bahrein", "Bangladeshi Taka": "Taka Bangladexano",
    "Barbadian Dollar": "Dólar Barbadiano", "Belarusian Ruble": "Rublo Bielorrusso",
    "Belize Dollar": "Dólar de Belize", "Bermudian Dollar": "Dólar das Bermudas",
    "Bhutanese Ngultrum": "Ngultrum Butanês", "Bolivian Boliviano": "Boliviano",
    "Botswanan Pula": "Pula Botsuanesa", "Brazilian Real": "Real Brasileiro",
    "British Pound Sterling": "Libra Esterlina", "Brunei Dollar": "Dólar de Brunei",
    "Bulgarian Lev": "Lev Búlgaro", "Burundian Franc": "Franco Burundiano",
    "Cambodian Riel": "Riel Cambojano", "Canadian Dollar": "Dólar Canadense",
    "Cape Verdean Escudo": "Escudo Cabo-Verdiano", "Cayman Islands Dollar": "Dólar das Ilhas Cayman",
    "Central African CFA Franc": "Franco CFA da África Central", "Chilean Peso": "Peso Chileno",
    "Chinese Yuan": "Yuan Chinês", "Colombian Peso": "Peso Colombiano",
    "Comorian Franc": "Franco Comoriano", "Congolese Franc": "Franco Congolês",
    "Costa Rican Colón": "Colón Costarriquenho", "Croatian Kuna": "Kuna Croata",
    "Cuban Peso": "Peso Cubano", "Czech Koruna": "Coroa Tcheca",
    "Danish Krone": "Coroa Dinamarquesa", "Djiboutian Franc": "Franco Jibutiano",
    "Dominican Peso": "Peso Dominicano", "East Caribbean Dollar": "Dólar do Caribe Oriental",
    "Egyptian Pound": "Libra Egípcia", "Salvadoran Colón": "Colón Salvadorenho",
    "Equatorial Guinean Franc": "Franco da Guiné Equatorial", "Eritrean Nakfa": "Nakfa Eritreia",
    "Estonian Kroon": "Coroa Estoniana", "Ethiopian Birr": "Birr Etíope",
    "Euro": "Euro", "Falkland Islands Pound": "Libra das Ilhas Malvinas",
    "Fijian Dollar": "Dólar Fijiano", "French Franc": "Franco Francês",
    "Gambian Dalasi": "Dalasi Gambiano", "Georgian Lari": "Lari Georgiano",
    "Ghanaian Cedi": "Cedi Ganês", "Gibraltar Pound": "Libra de Gibraltar",
    "Greek Drachma": "Dracma Grego", "Greenlandic Krone": "Coroa Groenlandesa",
    "Grenadian Dollar": "Dólar de Granada", "Guatemalan Quetzal": "Quetzal Guatemaleco",
    "Guinean Franc": "Franco Guinéano", "Guyanaese Dollar": "Dólar Guianense",
    "Haitian Gourde": "Gourde Haitiano", "Honduran Lempira": "Lempira Hondurenho",
    "Hong Kong Dollar": "Dólar de Hong Kong", "Hungarian Forint": "Forint Húngaro",
    "Icelandic Króna": "Coroa Islandesa", "Indian Rupee": "Rupia Indiana",
    "Indonesian Rupiah": "Rupia Indonésia", "Iranian Rial": "Rial Iraniano",
    "Iraqi Dinar": "Dinar Iraquiano", "Irish Pound": "Libra Irlandesa",
    "Israeli Shekel": "Shekel Israelense", "Jamaican Dollar": "Dólar Jamaicano",
    "Japanese Yen": "Iene Japonês", "Jordanian Dinar": "Dinar Jordaniano",
    "Kazakhstani Tenge": "Tenge Cazaque", "Kenyan Shilling": "Xelim Queniano",
    "Kuwaiti Dinar": "Dinar Kuwaitiano", "Kyrgyzstani Som": "Som Quirguiz",
    "Laotian Kip": "Kip Laosiano", "Latvian Lats": "Lats Letão",
    "Lebanese Pound": "Libra Libanesa", "Lesotho Loti": "Loti de Lesoto",
    "Liberian Dollar": "Dólar Liberiano", "Libyan Dinar": "Dinar Líbio",
    "Liechtenstein Franc": "Franco de Liechtenstein", "Lithuanian Litas": "Litas Lituano",
    "Luxembourg Franc": "Franco Luxemburguês", "Macanese Pataca": "Pataca Macaense",
    "Macedonian Denar": "Denário Macedônio", "Madagascan Ariary": "Ariary Malgaxe",
    "Malawian Kwacha": "Kwacha Malauiano", "Malaysian Ringgit": "Rincal Malaio",
    "Maldivian Rufiyaa": "Rufiyaa Maldiviana", "Malian Franc": "Franco Maliano",
    "Maltese Lira": "Lira Maltesa", "Mauritanian Ouguiya": "Ouguiya Mauritana",
    "Mauritian Rupee": "Rupia Mauriciana", "Mexican Peso": "Peso Mexicano",
    "Micronesian Dollar": "Dólar Micronesiano", "Moldovan Leu": "Leu Moldavo",
    "Mongolian Tugrik": "Tugrik Mongol", "Moroccan Dirham": "Dirã Marroquino",
    "Mozambican Metical": "Metical Moçambicano", "Myanmar Kyat": "Kyat Birmanês",
    "Namibian Dollar": "Dólar da Namíbia", "Nepalese Rupee": "Rupia Nepalesa",
    "Netherlands Guilder": "Florim Holandês", "New Zealand Dollar": "Dólar Neozelandês",
    "Nicaraguan Córdoba": "Córdoba Nicaraguano", "Nigerian Naira": "Naira Nigeriana",
    "Norwegian Krone": "Coroa Norueguesa", "Omani Rial": "Rial Omanense",
    "Pakistani Rupee": "Rupia Paquistanesa", "Palauan Dollar": "Dólar Palauano",
    "Panamanian Balboa": "Balboa Panamenho", "Papua New Guinean Kina": "Kina de Papua-Nova Guiné",
    "Paraguayan Guaraní": "Guarani Paraguaio", "Peruvian Sol": "Sol Peruano",
    "Philippine Peso": "Peso Filipino", "Polish Zloty": "Zloti Polonês",
    "Portuguese Escudo": "Escudo Português", "Qatari Rial": "Rial Catari",
    "Romanian Leu": "Leu Romeno", "Russian Ruble": "Rublo Russo",
    "Rwandan Franc": "Franco Ruandês", "Saint Helena Pound": "Libra de Santa Helena",
    "Samoan Tala": "Tala Samoano", "São Tomé and Príncipe Dobra": "Dobra de São Tomé e Príncipe",
    "Saudi Riyal": "Rial Saudita", "Serbian Dinar": "Dinar Sérvio",
    "Seychellois Rupee": "Rupia Seichelense", "Sierra Leonean Leone": "Leone Serra-Leonês",
    "Singapore Dollar": "Dólar de Singapura", "Slovak Koruna": "Coroa Eslovaca",
    "Slovenian Tolar": "Tolar Esloveno", "Solomon Islands Dollar": "Dólar das Ilhas Salomão",
    "Somali Shilling": "Xelim Somali", "South African Rand": "Rand Sul-Africano",
    "South Korean Won": "Won Sul-Coreano", "Spanish Peseta": "Peseta Espanhola",
    "Sri Lankan Rupee": "Rupia Sri-Lankana", "Sudanese Pound": "Libra Sudanesa",
    "Surinamese Dollar": "Dólar Surinamês", "Swedish Krona": "Coroa Sueca",
    "Swiss Franc": "Franco Suíço", "Syrian Pound": "Libra Síria",
    "Tajikistani Somoni": "Somoni Tajique", "Tanzanian Shilling": "Xelim Tanzaniano",
    "Thai Baht": "Baht Tailandês", "Tongan Paanga": "Paanga Tonganês",
    "Trinidad and Tobago Dollar": "Dólar de Trinidad e Tobago", "Tunisian Dinar": "Dinar Tunisino",
    "Turkish Lira": "Lira Turca", "Turkmenistani Manat": "Manat Turcomeno",
    "Tuvaluan Dollar": "Dólar Tuvaluano", "Ugandan Shilling": "Xelim Ugandense",
    "Ukrainian Hryvnia": "Hryvnia Ucraniana", "United Arab Emirates Dirham": "Dirã dos Emirados Árabes Unidos",
    "United States Dollar": "Dólar Americano", "Uruguayan Peso": "Peso Uruguaio",
    "Uzbekistani Som": "Som Uzbeko", "Vanuatu Vatu": "Vatu Vanuatuano",
    "Venezuelan Bolívar": "Bolívar Venezuelano", "Vietnamese Dong": "Dong Vietnamita",
    "Yemeni Rial": "Rial Iemenita", "Zambian Kwacha": "Kwacha Zambiano",
    "Zimbabwean Dollar": "Dólar Zimbabueano"
};
var GeoService = /** @class */ (function () {
    function GeoService() {
        this.continentRepository = new ContinentRepository_1.default();
        this.countryRepository = new CountryRepository_1.default();
    }
    GeoService.prototype.fetchFromRestCountries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://restcountries.com/v3.1/all?fields=name,flag,languages,currencies,continents,translations,population")];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("Erro ao buscar dados da API REST Countries");
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    GeoService.prototype.translateLanguage = function (lang) {
        return LANGUAGES_PT_MAP[lang] || lang;
    };
    GeoService.prototype.translateCurrency = function (currency) {
        return CURRENCIES_PT_MAP[currency] || currency;
    };
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
    GeoService.prototype.syncCountries = function (countries, continentMap) {
        return __awaiter(this, void 0, void 0, function () {
            var count, _i, countries_1, country, countryName, continentEng, continentId, language, currency, population, existingCountry, newCountry, error_1;
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
                        language = country.languages
                            ? Object.values(country.languages)[0]
                            : "Desconhecido";
                        currency = country.currencies
                            ? (_f = (_e = Object.values(country.currencies)[0]) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : "Desconhecida"
                            : "Desconhecida";
                        // Traduz para português
                        language = this.translateLanguage(language);
                        currency = this.translateCurrency(currency);
                        population = (_g = country.population) !== null && _g !== void 0 ? _g : 0;
                        return [4 /*yield*/, prismaClient_1.default.country.findFirst({
                                where: { ctr_nome: countryName }
                            })];
                    case 3:
                        existingCountry = _h.sent();
                        if (!!existingCountry) return [3 /*break*/, 5];
                        newCountry = new Country_1.default(countryName, population, language, continentId, currency);
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
                                include: { continent: true }
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
    GeoService.prototype.getGeoData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var continents, countries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prismaClient_1.default.continent.findMany()];
                    case 1:
                        continents = _a.sent();
                        return [4 /*yield*/, prismaClient_1.default.country.findMany({
                                include: { continent: true }
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
