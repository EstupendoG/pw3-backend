import Continent from "../models/Continent";
import prisma from "../prismaClient";

export default class ContinentRepository {
    // CREATE
    async create(continent: Continent){
        const created = await prisma.continent.create({
            data: {
                nome: continent.getNome,
                descricao: continent.getDescricao
            }
        })

        return new Continent(created.nome , created.descricao ?? undefined, created.id)
    }

    // READ (todos)
    async findAll(): Promise<Continent[]>{
        const finded = await prisma.continent.findMany()
        return finded.map(f => new Continent(f.nome, f.descricao ?? undefined, f.id))
    }

    // READ (por id)
    async findById(id: number): Promise<Continent | null> {
        const finded = await prisma.continent.findUnique({
            where: { id }
        })

        return finded 
            ? new Continent(finded.nome, finded.descricao ?? undefined, finded.id)
            : null
    }

    // UPDATE
    async update(id: number , data: {nome?: string , descricao?: string}){
        const updated = await prisma.continent.update({
            where: { id },
            data
        })

        return new Continent(updated.nome , updated.descricao ?? undefined , updated.id)
    }

    // DELETE
    async delete(id: number){
        await prisma.continent.delete({
            where: {id}
        })

        return
    }
}