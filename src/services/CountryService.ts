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
        
        const populacaoNum = Number(populacao)
        const idContinenteNum = Number(id_continente)
        
        
        if(!nome || !populacaoNum || !idioma || !idContinenteNum){
            throw new Error(`[ERRO] Service: Em país, um campo obrigatório está vazio.`)
        }

        const c = new Country(nome, populacaoNum, idioma, idContinenteNum, moeda)
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
        idioma?: string,
        moeda?: string,
        id_continente?: number
    ) {
        return this.repo.update( id, 
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
        return this.repo.delete(id)
    }
}