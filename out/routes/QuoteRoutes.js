"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var QuoteController_1 = require("../controllers/QuoteController");
var router = (0, express_1.Router)();
router.get('/:valor/:moeda', QuoteController_1.getQuotation);
exports.default = router;
