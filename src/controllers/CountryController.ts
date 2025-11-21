import { Request, Response } from 'express'
import CountryService from '../services/CountryService'

const service = new CountryService()

const clearNumber = (value: any) =>
    Number(String(value).replace(/\s+/g, '').trim());


// CREATE
export const createCountry = async (req:Request , res:Response) => {
    try{
        const { nome, populacao, idioma, id_continente, moeda, } = req.body
        const result = await service.create(
            String(nome), 
            clearNumber(populacao), 
            String(idioma), 
            clearNumber(id_continente), 
            String(moeda)
        )

        return res.status(201).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao criar País`)
        return res.status(400).json({error: err.message})
    }
}

// READ
export const readCountries = async (req:Request , res:Response) => {
    try{
        const result = await service.getAll()

        return res.status(200).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao ler Países`)
        return res.status(400).json({error: err.message})
    }
}

// READ (total)
export const readCountriesCount = async (req:Request , res:Response) => {
    try{
        const result = await service.getCount()

        return res.status(200).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao contar Países`)
        return res.status(400).json({error: err.message})
    }
}

// READ (paginação)
export const readCountriesPage = async (req:Request , res:Response) => {
    try{
        const page = Number(req.params.page)
        const limit = Number(req.params.limit)

        const result = await service.getPage(page, limit)

        return res.status(200).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao ler Países Paginados`)
        return res.status(400).json({error: err.message})
    }
}


// UPDATE
export const updateCountry = async (req:Request , res:Response) => {
    try{
        const id = Number(req.params.id)
        const { nome, populacao, idioma, id_continente, moeda, } = req.body
        const result = await service.update(
            id, 
            String(nome), 
            clearNumber(populacao), 
            String(idioma), 
            String(moeda), 
            clearNumber(id_continente)
        )

        return res.status(201).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao atualizar País id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}

// DELETE
export const deleteCountry = async (req:Request , res:Response) => {
    try{
        const id = Number(req.params.id)
        const result = await service.delete(id)
        
        return res.status(201).json(result)
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao deletar País id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}