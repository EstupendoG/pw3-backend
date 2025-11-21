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
        return await this.repo.create(c)
    }

    // READ
    async getAll(){
        return await this.repo.findAll()
    }

    // READ (total)
    async getCount(){
        return await this.repo.findCount()
    }

    // READ (paginação)
    async getPage(page:number , limit:number){
        const offset = (page - 1) * limit
        const c = await this.repo.findPage(offset, limit)

        if(!c){
            throw new Error(`[ERRO] Serivce: Em continente, não foi possível paginar os continente`)
        }

        return c
    }

    // UPDATE
    async update(id:number , nome?: string , descricao?: string){
        return await this.repo.update(id , {ctn_nome: nome, ctn_descricao: descricao})
    }

    // DELETE
    async delete(id:number){
        return await this.repo.delete(id)
    }

}