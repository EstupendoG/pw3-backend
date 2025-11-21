import { Router } from "express";
import { getGeoData } from "../controllers/GeoController";

const router = Router();

router.get("/", getGeoData);

export default router;
