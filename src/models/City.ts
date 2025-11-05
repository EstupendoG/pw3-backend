export default class City{
    private id: number
    private nome: string
    private populacao: number
    private latitude: number
    private longitude: number
    private id_pais: number
    
    // Constructor
    constructor(id:number , nome: string , populacao: number , latitude: number , longitude: number , id_pais: number){
        this.id = id
        this.nome = nome
        this.populacao = populacao
        this.latitude = latitude
        this.longitude = longitude
        this.id_pais = id_pais
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
    get getLatitude(){
        return this.latitude
    }
    get getLongitude(){
        return this.longitude
    }
    get getId_pais(){
        return this.id_pais
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
    set setLatitude(latitude:number){
        this.latitude = latitude
    }
    set setLongitude(longitude:number){
        this.longitude = longitude
    }
    set setId_pais(id_pais:number){
        this.id_pais = id_pais
    }
}