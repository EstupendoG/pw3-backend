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

    // READ
    async getAll(){
        const c = await this.repo.findAll()

        if(!c){
            throw new Error(`[ERRO] Serivce: Em cidades, não foi possível ler as cidades`)
        }

        return c
    }

    // READ (total)
    async getCount(){
        const c = this.repo.findCount()

        if(!c){
            throw new Error(`[ERRO] Serivce: Em cidades, não foi possível contar as cidades`)
        }
    }

    // READ (paginação)
    async getPage(page:number , limit:number){
        const offset = (page - 1) * limit

        const c = this.repo.findPage(offset, limit)

        if(!c){
            throw new Error(`[ERRO] Serivce: Em cidades, não foi possível paginar as cidades`)
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