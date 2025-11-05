export default class CountQueuingStrategy {
    private id: number
    private nome: string
    private populacao: number
    private idioma: [string]
    private moeda: string 
    private id_continente: number

    // Constructor
    constructor (id:number , nome:string , populacao:number , idioma:[string] , moeda:string , id_continente:number){
        this.id = id
        this.nome = nome
        this.populacao = populacao
        this.idioma = idioma
        this.moeda = moeda
        this.id_continente = id_continente
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
    set setIdioma(idioma:[string]){
        this.idioma = idioma
    }
    set setMoeda(moeda:string){
        this.moeda = moeda
    }
    set setId_Continente(id_continente:number){
        this.id_continente = id_continente
    }


}