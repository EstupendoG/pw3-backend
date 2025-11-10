import City from "../models/Country";
import CityRepository from "../repositories/CountryRepository";

export default class CityService{
    private repo = new CityRepository()

    // CREATE
    async create(
        cty_nome: string,
        cty_populacao: number,
        cty_latitude: number,
        cty_longitude: number,
        ctr_id: number
    ) {
        const fields = [nome, populacao, idioma, id_continente]
        for(let field of fields){
            if(!field){
                throw new Error(`[ERRO] Service: Em país, ${field} é obrigatório.`)
            }
        }

        const c = new Country(nome, populacao, idioma, id_continente, moeda)
        return this.repo.create(c)
    }

    // READ (todos)
    async getAll(){
        return this.repo.findAll()
    }

    // READ (por id)
    async getById(id: number){
        const c = this.repo.findById(id)
        if(!c){
            throw new Error(`[ERRO] Serivce: Em país, não foi possível achar o id ${id}`)
        }

        return c
    }

    // UPDATE
    async update(
        id: number,
        nome?: string,
        populacao?: number,
        idioma?: string[],
        moeda?: string,
    ) {
        return this.repo.update( id, 
        {
            ctr_nome: nome, 
            ctr_populacao: populacao, 
            ctr_idioma: idioma, 
            ctr_moeda: moeda
        })
    }

    // DELETE
    async delete(id: number){
        return this.repo.delete(id)
    }
}