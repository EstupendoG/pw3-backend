import { Request, Response } from "express";
import CityService from "../services/CityService";

const service = new CityService()

const clearNumber = (value: any) =>
    Number(String(value).replace(/\s+/g, '').trim());


// CREATE
export const createCity = async (req:Request, res:Response) => {
    try{
        const {nome, populacao, latitude, longitude, id_pais} = req.body
        const result = await service.create(
            String(nome), 
            clearNumber(populacao), 
            clearNumber(latitude), 
            clearNumber(longitude), 
            clearNumber(id_pais)
        )

        return res.status(201).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao criar Cidade`)
        return res.status(400).json({error: err.message})
    }
}

// READ
export const readCities = async (req:Request , res:Response) => {
    try{
        const result = await service.getAll()

        return res.status(200).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao ler Cidades`)
        return res.status(400).json({error: err.message})
    }
}

// READ (count)
export const readCitiesCount = async (req:Request , res:Response) => {
    try{
        const result = await service.getCount()

        return res.status(200).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao contar Cidades`)
        return res.status(400).json({error: err.message})
    }
}

// READ (paginação)
export const readCitiesPage = async (req:Request, res:Response) => {
    try{
        const page = Number(req.params.page)
        const limit = Number(req.params.limit)
        
        const result = await service.getPage(page, limit)

        return res.status(200).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao paginar Cidades`)
        return res.status(400).json({error: err.message})
    }
}

// UPDATE
export const updateCity = async (req:Request, res:Response) => {
    try{
        const id = Number(req.params.id)
        const {nome, populacao, latitude, longitude, id_pais} = req.body
        const response = await service.update(
            id, 
            String(nome), 
            Number(populacao), 
            Number(latitude), 
            Number(longitude), 
            Number(id_pais))

        return res.status(201).json(response)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao atualizar Cidade id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}

// DELETE
export const deleteCity = async (req:Request, res:Response) => {
    try{
        const id = Number(req.params.id)
        const result = await service.delete(id)

        return res.status(201).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao deletar Cidade id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}