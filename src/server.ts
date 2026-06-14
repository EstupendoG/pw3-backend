import 'dotenv/config'
import express from "express";
import cors from 'cors'
import ContinentRoutes from './routes/ContinentRoutes'
import CountryRoutes from './routes/CountryRoutes';
import CityRoutes from './routes/CityRoutes'
import GeoRoutes from './routes/GeoRoutes'
import GeoService from './services/GeoService'
import QuoteRouter from './routes/QuoteRoutes';

const app = express()
const PORT = 8000
const geoService = new GeoService()

// Inicializa o servidor e sincroniza dados geográficos
app.listen(PORT, async () => {
    console.log(`[INFO] Server iniciado na porta ${PORT}`)
    
    try {
        console.log(`[INFO] Sincronizando dados geográficos...`)
        await geoService.initializeGeoData()
        console.log(`[INFO] Dados geográficos sincronizados com sucesso!`)
    } catch (error) {
        console.error(`[ERRO] Falha ao sincronizar dados geográficos:`, error)
    }
})

app.use(express.json())

app.use(cors({
    origin: process.env.FRONTEND_ORIGIN
}))

app.use('/api/continents/', ContinentRoutes)
app.use('/api/countries', CountryRoutes)
app.use('/api/cities', CityRoutes)
app.use('/api/geo', GeoRoutes)
app.use('/api/quote', QuoteRouter)