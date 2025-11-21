import { Request, Response } from "express"
import QuoteService from "../services/QuoteService"

const service = new QuoteService()

export const getQuotation = async (req: Request, res: Response) => {
    try {
        const valor = Number(req.params.valor)
        const moedaRaw = decodeURIComponent(req.params.moeda)
        const moeda = service.toIso(moedaRaw)

        console.log(moedaRaw)
        console.log(moeda)
        console.log(typeof(moeda))

        if (!moeda) {
            return res.status(400).json({
                error: `Moeda '${moedaRaw}' não reconhecida no dicionário`
            })
        }

        const base = "BRL"

        const apiUrl = `https://open.er-api.com/v6/latest/${base}`

        const response = await fetch(apiUrl)
        const data = await response.json() as Record<string, number>

        console.log(data)

        const taxa = data.rates[moeda]

        const valorConvertido = (valor * taxa).toFixed(2)

        return res.status(200).json({
            quote: valorConvertido,
            currency: moeda,
        })

    } catch (err: any) {
        console.error("Erro ao usar API:", err)
        return res.status(500).json({ error: err.message })
    }
}
