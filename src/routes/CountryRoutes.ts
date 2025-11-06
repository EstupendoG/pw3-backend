import { Router } from "express";
import { 
    createCountry, 
    readCountries, 
    readCountryById,
    updateCountry, 
    deleteCountry 
} from "../controllers/CountryController";

const router = Router()

router.post('/', createCountry)
router.get('/', readCountries)
router.get('/:id', readCountryById)
router.put('/:id', updateCountry)
router.delete('/:id', deleteCountry)

export default router