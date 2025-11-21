import { Router } from "express";
import {
    createContinent, 
    readContinents, 
    readContinentsCount,
    readContinentsPage,
    updateContinent, 
    deleteContinent 
} from "../controllers/ContinentController";

const router = Router()

router.post('/', createContinent)
router.get('/', readContinents)
router.get('/count', readContinentsCount)
router.get('/:page/:limit', readContinentsPage)
router.put('/:id', updateContinent)
router.delete('/:id', deleteContinent)

export default router