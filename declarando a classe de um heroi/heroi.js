class tipoHeroi
{
    constructor(nome,idade,tipo)
    {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

 atacar(){

    switch (this.tipo)
    {
        case "Mago":
            return `${this.nome} atacou usando magia!` 
        case "Guerreiro":
            return `${this.nome} atacou usando espada`
        case "Monge":
            return`${this.nome} atacou usando artes marciais!`
        case "Ninja":
            return`${this.nome} atacou usando shuriken`
    }
 }
}

let heroi = new tipoHeroi("Gandalf", 2000, "Mago")

console.log(heroi.atacar())