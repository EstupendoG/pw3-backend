import { Request , Response } from 'express'
import ContinentService from '../services/ContinentService'

const service = new ContinentService()

// CREATE
export const createContinent = async (req:Request , res:Response) => {
    try{
        const { nome , descricao } = req.body
        const result = await service.create(nome, descricao)

        return res.status(200).json(result)
    }
    catch (err: any) {
        console.error('[ERRO] Controller: Erro ao criar Continente')
        return res.status(400).json({error: err.message})
    }
}

// READ (todos)
export const readContinents = async (req:Request , res:Response) => {
    try{
        const result = await service.getAll()

        return res.status(200).json(result)
    }
    catch(err:any){
        console.error('[ERRO] Controller: Erro ao ler Continentes')
        return res.status(400).json({error: err.message})
    }
}

// READ (por id)
export const readContinentById = async (req:Request , res:Response) => {
    try{
        const id = Number(req.params.id)
        const result = await service.getById(id)

        return res.status(200).json(result)
    }
    catch(err:any){
        console.error(`[ERRO] Controller: Erro ao ler Continente id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}

// UPDATE
export const updateContinent = async (req:Request , res:Response) => {
    try{
        const id = Number(req.params.id)
        const {nome , descricao} = req.body

        const result =  await service.update(id, nome, descricao)
        return res.status(201).json(result)
    }
    catch(err:any){
        console.error(`[ERRO] Controller: Erro ao atualizar Continentes id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}

// DELETE
export const deleteContinent = async (req:Request , res:Response) => {
    try{
        const id = Number(req.params.id)
        const result = await service.delete(id)
        
        return res.status(201).json(result)
    }
    catch(err:any){
        console.error(`[ERRO] Controller: Erro ao deletar Continente id ${req.params.id}`)
        return res.status(400).json({error: err.message})
    }
}