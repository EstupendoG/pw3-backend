import { Router } from "express";
import { 
    createCity,
    readCities,
    readCitiesCount,
    readCitiesPage,
    updateCity,
    deleteCity 
} from "../controllers/CityController";

const router = Router()

router.post('/', createCity)
router.get('/', readCities)
router.get('/count', readCitiesCount)
router.get('/:page/:limit', readCitiesPage)
router.put('/:id', updateCity)
router.delete('/:id', deleteCity)

export default router