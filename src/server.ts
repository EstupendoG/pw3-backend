import 'dotenv/config'
import express from "express";
import ContinentRoutes from './routes/ContinentRoutes'

const app = express()
const PORT = 8000
app.listen(PORT, () => {
    console.log(`[INFO] Server iniciado na porta ${PORT}`)
})



app.use('/api/continents/', ContinentRoutes)





