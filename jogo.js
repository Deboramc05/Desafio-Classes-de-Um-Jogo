class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            console.log(`- ${this.tipo} - é um TIPO INVÁLIDO`);
            ataque = "ATAQUE INVÁLIDO";
        }

        // Saída -> ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Gandalf", 300, "mago");
heroi1.atacar(); // O mago atacou usando magia

const heroi2 = new Heroi("Conan", 35, "guerreiro");
heroi2.atacar(); // O guerreiro atacou usando espada

const heroiInvalido = new Heroi("Desconhecido", 25, "alien");
heroiInvalido.atacar(); // - alien - é um TIPO INVÁLIDO
                          // O alien atacou usando ATAQUE INVÁLIDO
