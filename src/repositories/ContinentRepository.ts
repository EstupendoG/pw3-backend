import Continent from "../models/Continent";
import prisma from "../prismaClient";

export default class ContinentRepository {
    async create(continent: Continent){
        const created = await prisma.continent.create({
            data: {
                nome: continent.getNome,
                descricao: continent.getDescricao
            }
        })

        return new Continent(created.nome , created.descricao ?? undefined, created.id)
    }
}