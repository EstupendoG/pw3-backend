import Continent from "../models/Continent";
import prisma from "../prismaClient";

export default class ContinentRepository {
    private toEntity(obj: any){
        return new Continent(
            obj.ctn_nome,
            obj.ctn_descricao,
            obj.ctn_id,
        )
    }

    // CREATE
    async create(continent: Continent){
        const created = await prisma.continent.create({
            data: {
                ctn_nome: continent.getNome,
                ctn_descricao: continent.getDescricao
            }
        })

        return new Continent(created.ctn_nome , created.ctn_descricao ?? undefined, created.ctn_id)
    }

    // READ
    async findAll(): Promise<Continent[]>{
        const found = await prisma.continent.findMany({
            orderBy: {
                ctn_nome: 'asc'
            },
        })
        return found
            .map(f => new Continent(f.ctn_nome, f.ctn_descricao ?? undefined, f.ctn_id))
    }

    // READ (total)
    async findCount(): Promise<number>{
        const count = await prisma.continent.count()

        return count
    }

    // READ (paginação)
    async findPage(skip:number , take:number): Promise<Continent[]>{
        const found = await prisma.continent.findMany({
            skip,
            take,
            orderBy: {
                ctn_id: 'asc'
            }
        })

        return found
            .map((f) => this.toEntity(f))
    }

    // UPDATE
    async update(id: number , data: {ctn_nome?: string , ctn_descricao?: string}){
        const updated = await prisma.continent.update({
            where: { ctn_id: id },
            data
        })

        return new Continent(updated.ctn_nome , updated.ctn_descricao ?? undefined , updated.ctn_id)
    }

    // DELETE
    async delete(id: number){
        await prisma.continent.delete({
            where: {ctn_id: id}
        })

        return
    }
}