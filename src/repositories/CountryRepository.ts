import prisma from "../prismaClient";
import Country from "../models/Country";

export default class CountryRepository{
    // Metodo pra reaproveitar constructor
    private toEntity(obj: any): Country{
        return new Country(
            obj.ctr_nome,
            obj.ctr_populacao,
            obj.ctr_idioma,
            obj.ctn_id,
            obj.ctr_moeda ?? undefined,
            obj.ctr_id,
        )
    }
    // CREATE
    async create(country: Country){
        const created = await prisma.country.create({
            data: {
                ctr_nome: country.getNome,
                ctr_populacao: country.getPopulacao,
                ctr_idioma: country.getIdioma,
                ctr_moeda: country.getMoeda ?? "",

                ctn_id: country.getId_Continente
            }
        })

        return this.toEntity(created)
    }

    // READ (todos)
    async findAll(): Promise<Country[]>{
        const found = await prisma.country.findMany()
        return found
            .map((f) => this.toEntity(f))
    }

    // READ (por id)
    async findById(id: number): Promise<Country | null>{
        const found = await prisma.country.findUnique({
            where: {ctr_id: id}
        })

        return found 
            ? this.toEntity(found)
            : null
    }

    // UPDATE
    async update(id: number, data:{
        ctr_nome?: string, 
        ctr_populacao?: number, 
        ctr_idioma?: string, 
        ctn_id?: number, 
        ctr_moeda?: string,
    }){
        const { ctn_id, ...resto } = data;
        const updateData: any = { ...resto };
        if (ctn_id !== undefined) {
            updateData.ctn_id = { set: ctn_id };
        }

        const updated = await prisma.country.update({
            where: {ctr_id: id},
            data: updateData
        })

        return this.toEntity(updated)
    }

    // DELETE
    async delete(id:number){
        await prisma.country.delete({
            where: {ctr_id: id}
        })

        return
    }

}