import prisma from "../prismaClient";
import City from "../models/City";

export default class CityRepository{
    private toEntity(obj: any){
        return new City(
            obj.cty_nome,
            obj.cty_populacao,
            obj.cty_latitude,
            obj.cty_longitude,
            obj.ctr_id
        )
    }

    async create(city: City){
        const created = await prisma.city.create({
            data: {
                cty_nome: city.getNome,
                cty_populacao: city.getPopulacao,
                cty_latitude: city.getLatitude,
                cty_longitude: city.getLongitude,

                ctr_id: city.getId_pais
            }
            
        })

        return this.toEntity(created)
    }

    async findAll(){
        const found = await prisma.city.findMany()

        return this.toEntity(found)
    }

    async findById(id: number){
        const found = await prisma.city.findUnique({
            where:{ cty_id: id }
        })

        return this.toEntity(found)
    }

    async update(id: number, data: {
        cty_nome?: string,
        cty_populacao?: number,
        cty_latitude?: number,
        cty_longitude?: number,
        ctr_id?: number
    }){
        const updated = await prisma.city.update({
            where: { cty_id: id },
            data
        })

        return this.toEntity(updated)
    }

    async delete(id: number){
        const deleted = await prisma.city.delete({
            where: {cty_id: id}
        })

        return
    }
}