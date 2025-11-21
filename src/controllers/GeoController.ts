import { Request, Response } from "express";
import GeoService from "../services/GeoService";

const geoService = new GeoService();

// Retorna dados já existentes no banco
export const getGeoData = async (req: Request, res: Response) => {
    try {
        const data = await geoService.getGeoData();
        res.json(data);
    } catch (error) {
        console.error("Erro ao buscar dados geográficos:", error);
        res.status(500).json({ 
            error: "Erro ao buscar dados dos países e continentes.",
            details: error instanceof Error ? error.message : "Erro desconhecido"
        });
    }
};
