import { Request, Response } from 'express'
import CountryService from '../services/CountryService'

const service = new CountryService()

// Helper para converter Country para JSON
const countryToJSON = (country: any) => ({
    id: country.getId,
    nome: country.getNome,
    populacao: country.getPopulacao,
    idioma: country.getIdioma,
    moeda: country.getMoeda,
    id_continente: country.getId_Continente
})

// CREATE
export const createCountry = async (req:Request , res:Response) => {
    try{
        const { nome, populacao, idioma, id_continente, moeda, } = req.body
        const result = await service.create(nome, Number(populacao), idioma, Number(id_continente), moeda)

        return res.status(201).json(countryToJSON(result))
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao criar País`, err)
        return res.status(400).json({error: err.message})
    }
}

// READ (todos)
export const readCountries = async (req:Request , res:Response) => {
    try{
        const result = await service.getAll()

        return res.status(200).json(result.map(countryToJSON))
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao ler Países`)
        return res.status(400).json({error: err.message})
    }
}

// READ (por id)
export const readCountryById = async (req:Request , res:Response) => {
    try{
        const id = Number(req.params.id)
        const result = await service.getById(id)

        return res.status(200).json(countryToJSON(result))
    }
    catch(err: any){
        console.error(`[ERRO] Controller: Erro ao ler País id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}

// UPDATE
export const updateCountry = async (req:Request , res:Response) => {
    try{
        const id = Number(req.params.id)
        const { nome, populacao, idioma, id_continente, moeda, } = req.body
        const result = await service.update(id, nome, populacao, idioma, moeda, id_continente)

        return res.status(201).json(countryToJSON(result))
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