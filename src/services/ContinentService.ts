import Continent from "../models/Continent";
import ContinentRepository from "../repositories/ContinentRepository";

export default class ContinentServices{
    private repo = new ContinentRepository()

    // CREATE
    async create(nome:string , descricao?:string){
        if(!nome){
            throw new Error('[ERROR] Service: Em continente, nome é obrigátorio')
        }

        const c = new Continent(nome, descricao)
        return this.repo.create(c)
    }

    // READ (todos)
    async getAll(){
        return this.repo.findAll()
    }

    // READ (por id)
    async getById(id:number){
        const c = await this.repo.findById(id)
        if(!c){
            throw new Error(`[ERROR] Service: Em continente, não foi possível achar id ${id}`)
        }
        return c
    }

    // UPDATE
    async update(id:number , nome?: string , descricao?: string){
        return this.repo.update(id , {ctn_nome: nome, ctn_descricao: descricao})
    }

    // DELETE
    async delete(id:number){
        return this.repo.delete(id)
    }

}