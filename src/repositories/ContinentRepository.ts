import Continent from "../models/Continent";
import prisma from "../prismaClient";

export default class ContinentRepository {
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

    // READ (todos)
    async findAll(): Promise<Continent[]>{
        const found = await prisma.continent.findMany()
        return found.map(f => new Continent(f.ctn_nome, f.ctn_descricao ?? undefined, f.ctn_id))
    }

    // READ (por id)
    async findById(id: number): Promise<Continent | null> {
        const found = await prisma.continent.findUnique({
            where: { ctn_id: id }
        })

        return found 
            ? new Continent(found.ctn_nome, found.ctn_descricao ?? undefined, found.ctn_id)
            : null
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