import { Router } from "express";
import { getQuotation } from "../controllers/QuoteController";

const router = Router()

router.get('/:valor/:moeda', getQuotation)

export default router