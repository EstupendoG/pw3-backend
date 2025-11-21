"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var GeoController_1 = require("../controllers/GeoController");
var router = (0, express_1.Router)();
router.get("/", GeoController_1.getGeoData);
exports.default = router;
