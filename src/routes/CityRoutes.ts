import { Router } from "express";
import { 
    createCity,
    readCities,
    readCityById,
    updateCity,
    deleteCity 
} from "../controllers/CityController";

const router = Router()

router.post('/', createCity)
router.get('/', readCities)
router.get('/:id', readCityById)
router.put('/:id', updateCity)
router.delete('/:id', deleteCity)

export default router