import { Router } from "express";
import {createContinent, 
        readContinents, 
        readContinentById, 
        updateContinent, 
        deleteContinent 
    } from "../controllers/ContinentController";

const router = Router()

router.post('/', createContinent)
router.get('/', readContinents)
router.get('/:id', readContinentById)
router.put('/:id', updateContinent)
router.delete('/:id', deleteContinent)

export default router