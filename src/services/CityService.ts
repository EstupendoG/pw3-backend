import City from "../models/City";
import CityRepository from "../repositories/CityRepository";

export default class CityService{
    private repo = new CityRepository()

    // CREATE
    async create(
        nome: string,
        populacao: number,
        latitude: number,
        longitude: number,
        id_pais: number,
    ) {
        const fields = [nome, populacao, latitude, longitude, id_pais]
        for(let field of fields){
            if(!field){
                throw new Error(`[ERRO] Service: Em cidade, ${field} é obrigatório.`)
            }
        }

        const c = new City(nome, populacao, latitude, longitude, id_pais)
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
        latitude?: number,
        longitude?: number,
        id_pais?: number,
    ) {
        return this.repo.update( id, 
        {
            cty_nome: nome,
            cty_populacao: populacao,
            cty_latitude: latitude,
            cty_longitude: longitude,

            ctr_id: id_pais
        })
    }

    // DELETE
    async delete(id: number){
        return this.repo.delete(id)
    }
}