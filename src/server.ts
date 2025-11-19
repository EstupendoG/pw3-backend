import 'dotenv/config'
import express from 'express';
import cors from 'cors'
import ContinentRoutes from './routes/ContinentRoutes'
import CountryRouter from './routes/CountryRoutes';
import CityRouter from './routes/CityRoutes'

const app = express()
const PORT = 8000
app.listen(PORT, () => {
    console.log(`[INFO] Server iniciado na porta ${PORT}`)
})

app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(express.json())

app.use('/api/continents/', ContinentRoutes)
app.use('/api/countries', CountryRouter)
app.use('/api/cities', CityRouter)




