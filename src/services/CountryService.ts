import Country from "../models/Country";
import CountryRepository from "../repositories/CountryRepository";

export default class CountryService{
    private repo = new CountryRepository()

    // CREATE
    async create(
        nome: string,
        populacao: number,
        idioma: string,
        id_continente: number,
        moeda?: string,
    ) {
        const fields = [nome, populacao, idioma, id_continente]
        for(let field of fields){
            if(!field){
                throw new Error(`[ERRO] Service: Em país, ${field} é obrigatório.`)
            }
        }

        const c = new Country(nome, populacao, idioma, id_continente, moeda)
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
            throw new Error(`[ERRO] Serivce: Em país, não foi possível paginar os países`)
        }

        return c
    }

    // UPDATE
    async update(
        id: number,
        nome?: string,
        populacao?: number,
        idioma?: string,
        moeda?: string,
        id_continente?: number
    ) {
        return await this.repo.update( id, 
        {
            ctr_nome: nome, 
            ctr_populacao: Number(populacao), 
            ctr_idioma: idioma, 
            ctr_moeda: moeda,
            ctn_id: Number(id_continente),
        })
    }

    // DELETE
    async delete(id: number){
        return await this.repo.delete(id)
    }
}