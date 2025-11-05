export default class Continent{
    private id: number
    private nome: string
    private descricao: string
    
    // Constructor
    constructor(id:number , nome:string , descricao:string){
        this.id = id
        this.nome = nome
        this.descricao = descricao
    }

    // Getters
    get getId(){
        return this.id
    }
    get getNome(){
        return this.nome
    }
    get getDescricao(){
        return this.descricao
    }

    // Setters
    set setId(id:number){
        this.id = id
    }
    set setNome(nome:string){
        this.nome = nome
    }
    set setDescricao(descricao:string){
        this.descricao = descricao
    }
}