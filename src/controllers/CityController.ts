import { Request, Response } from "express";
import CityService from "../services/CityService";

const service = new CityService()

// CREATE
export const createCity = async (req:Request, res:Response) => {
    try{
        const {nome, populacao, latitude, longitude, id_pais} = req.body
        const response = await service.create(nome, populacao, latitude, longitude, id_pais)

        return res.status(201).json(response)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao criar Cidade`)
        return res.status(400).json({error: err.message})
    }
}

// READ (todos)
export const readCities = async (req:Request, res:Response) => {
    try{
        const response = await service.getAll()

        return res.status(201).json(response)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao ler Cidades`)
        return res.status(400).json({error: err.message})
    }
}

// READ (por id)
export const readCityById = async (req:Request, res:Response) => {
    try{
        const id = Number(req.params.id)
        const response = await service.getById(id)

        return res.status(201).json(response)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao ler Cidade id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}

// UPDATE
export const updateCity = async (req:Request, res:Response) => {
    try{
        const id = Number(req.params.id)
        const {nome, populacao, latitude, longitude, id_pais} = req.body
        const response = await service.update(id, nome, populacao, latitude, longitude, id_pais)

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
        const response = await service.delete(id)

        return res.status(201).json(response)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao deletar Cidade id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}