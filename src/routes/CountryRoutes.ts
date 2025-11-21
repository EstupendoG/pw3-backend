import { Router } from "express";
import { 
    createCountry, 
    readCountries,
    readCountriesCount,
    readCountriesPage,
    updateCountry, 
    deleteCountry 
} from "../controllers/CountryController";

const router = Router()

router.post('/', createCountry)
router.get('/', readCountries)
router.get('/count', readCountriesCount)
router.get('/:page/:limit', readCountriesPage)
router.put('/:id', updateCountry)
router.delete('/:id', deleteCountry)

export default router