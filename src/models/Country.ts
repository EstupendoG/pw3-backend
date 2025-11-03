export default class CountQueuingStrategy {
    private id: number
    private nome: string
    private populacao: number
    private idioma: [string]
    private moeda: string 
    private continente: number
    constructor (id:number , nome:string , populacao:number , idioma:[string] , moeda:string , continente:number){
        this.id = id
        this.nome = nome
        this.populacao = populacao
        this.idioma = idioma
        this.moeda = moeda
        this.continente = continente
    }


}