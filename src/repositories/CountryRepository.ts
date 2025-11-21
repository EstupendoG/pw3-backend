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

    // READ
    async findAll(): Promise<Country[]>{
        const found = await prisma.country.findMany({
            orderBy: {
                ctr_nome: 'asc'
            }
        })

        return found
            .map((f) => this.toEntity(f))
    }

    // READ (total)
    async findCount(): Promise<number>{
        const count = await prisma.country.count()

        return count
    }

    // READ (paginação)
    async findPage(skip:number , take:number): Promise<Country[]>{
        const found = await prisma.country.findMany({
            skip,
            take,
            orderBy: {
                ctr_id: 'asc'
            },
        })
        return found
            .map((f) => this.toEntity(f))
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