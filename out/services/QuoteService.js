"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ISOs = {
    "Brazilian real": "BRL",
    "Angola": "ANG",
    "United States dollar": "USD",
    "Euro": "EUR",
    "Japanese yen": "JPY",
    "British pound": "GBP",
    "Australian dollar": "AUD",
    "Canadian dollar": "CAD",
    "Swiss franc": "CHF",
    "Chinese yuan": "CNY",
    "Hong Kong dollar": "HKD",
    "Singapore dollar": "SGD",
    "Swedish krona": "SEK",
    "New Zealand dollar": "NZD",
    "Mexican peso": "MXN",
    "Norwegian krone": "NOK",
    "South African rand": "ZAR",
    "Russian ruble": "RUB",
    "Indian rupee": "INR",
    "Argentine peso": "ARS",
    "Colombian peso": "COP",
    "Chilean peso": "CLP",
    "Turkish lira": "TRY",
    "Israeli new shekel": "ILS",
    "Philippine peso": "PHP",
    "Thai baht": "THB",
    "South Korean won": "KRW",
    "Danish krone": "DKK",
    "Polish złoty": "PLN",
    "Czech koruna": "CZK",
    "Hungarian forint": "HUF",
    "Icelandic króna": "ISK",
    "Malaysian ringgit": "MYR",
    "Indonesian rupiah": "IDR",
    "Vietnamese đồng": "VND",
    "Saudi riyal": "SAR",
    "United Arab Emirates dirham": "AED",
    "Qatari riyal": "QAR",
    "Kuwaiti dinar": "KWD",
    "Bahraini dinar": "BHD",
    "Omani rial": "OMR",
    "Egyptian pound": "EGP",
    "Moroccan dirham": "MAD",
    "Nigerian naira": "NGN",
    "Kenyan shilling": "KES",
    "Ghanaian cedi": "GHS",
    "West African CFA franc": "XOF",
    "Central African CFA franc": "XAF",
    "CFP franc": "XPF",
    "Peruvian sol": "PEN",
    "Bolivian boliviano": "BOB",
    "Dominican peso": "DOP",
    "Uruguayan peso": "UYU",
    "Paraguayan guaraní": "PYG",
    "Costa Rican colón": "CRC",
    "Guatemalan quetzal": "GTQ",
    "Honduran lempira": "HNL",
    "Nicaraguan córdoba": "NIO",
    "Panamanian balboa": "PAB",
    "Cuban convertible peso": "CUC",
    "Jamaican dollar": "JMD",
    "Trinidad and Tobago dollar": "TTD",
    "Bahamian dollar": "BSD",
    "Barbadian dollar": "BBD",
    "Eastern Caribbean dollar": "XCD",
    "Belize dollar": "BZD",
    "Haitian gourde": "HTG",
    "Falkland Islands pound": "FKP",
    "Gibraltar pound": "GIP",
    "Cayman Islands dollar": "KYD",
    "Netherlands Antillean guilder": "ANG",
    "Aruban florin": "AWG",
    "Bermudian dollar": "BMD",
    "Samoan tālā": "WST",
    "Vanuatu vatu": "VUV",
    "New Taiwan dollar": "TWD",
    "Pakistani rupee": "PKR",
    "Bangladeshi taka": "BDT",
    "Sri Lankan rupee": "LKR",
    "Nepalese rupee": "NPR",
    "Kazakhstani tenge": "KZT",
    "Uzbekistani soʻm": "UZS",
    "Azerbaijani manat": "AZN",
    "Armenian dram": "AMD",
    "Georgian lari": "GEL",
    "Turkmenistan manat": "TMT",
    "Iranian rial": "IRR",
    "Iraqi dinar": "IQD",
    "Jordanian dinar": "JOD",
    "Lebanese pound": "LBP",
    "Syrian pound": "SYP",
    "Yemeni rial": "YER",
    "Afghan afghani": "AFN",
    "Mongolian tögrög": "MNT",
    "Kyrgyzstani som": "KGS",
    "Tajikistani somoni": "TJS",
    "Lao kip": "LAK",
    "Cambodian riel": "KHR",
    "Myanma kyat": "MMK",
    "Brunei dollar": "BND",
    "Macanese pataca": "MOP",
    "Maldivian rufiyaa": "MVR",
};
var QuoteService = /** @class */ (function () {
    function QuoteService() {
        this.isoDict = Object.fromEntries(Object.entries(ISOs).map(function (_a) {
            var key = _a[0], value = _a[1];
            return [
                key.toLowerCase(),
                value
            ];
        }));
    }
    QuoteService.prototype.normalize = function (raw) {
        return raw
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    };
    QuoteService.prototype.toIso = function (rawName) {
        var _a;
        var normalized = this.normalize(rawName);
        return (_a = this.isoDict[normalized]) !== null && _a !== void 0 ? _a : null;
    };
    return QuoteService;
}());
exports.default = QuoteService;
