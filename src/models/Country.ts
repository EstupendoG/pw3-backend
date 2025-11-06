export default class Country {
    private id?: number
    private nome: string
    private populacao: number
    private idioma: string[]
    private moeda?: string
    private id_continente: number

    // Constructor
    constructor (nome:string , populacao:number , idioma:string[] , id_continente:number, moeda?:string, id?:number ){
        this.id = id
        this.nome = nome
        this.populacao = populacao
        this.idioma = idioma
        this.id_continente = id_continente
        this.moeda = moeda
    }

    // Getters
    get getId(){
        return this.id
    }
    get getNome(){
        return this.nome
    }
    get getPopulacao(){
        return this.populacao
    }
    get getIdioma(){
        return this.idioma
    }
    get getMoeda(){
        return this.moeda
    }
    get getId_Continente(){
        return this.id_continente
    }

    // Setters
    set setId(id:number){
        this.id = id
    }
    set setNome(nome:string){
        this.nome = nome
    }           
    set setPopulacao(populacao:number){
        this.populacao = populacao
    }
    set setIdioma(idioma:string[]){
        this.idioma = idioma
    }
    set setMoeda(moeda:string){
        this.moeda = moeda
    }
    set setId_Continente(id_continente:number){
        this.id_continente = id_continente
    }


}