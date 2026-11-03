// exercicio 1
function boasVindas() {
    console.log("Bem-vindo ao JavaScript!");
}
// exercicio 2
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
// exercicio 3
function somar(a, b) {
    return a + b;
}
// exercicio 4
function subtrair(a, b) {
    return a - b;
}
//exercicio 5
function multiplicar(a, b) {
    return a * b;
}
// exercicio 6
function dividir(a, b) {
    if (b === 0) {
        return "Erro: O divisor não pode ser zero.";
    }
    return a / b;
}
// exercicio 7
function dobro(a) {
    return a * 2;
}
// exercicio 8
function triplo(a) {
    return a * 3;
}
// exercicio 9
function quadrado(a) {
    return a * a;
}
// exercicio 10
function media(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
//exercicio 11
function parOuImpar(a) {
    if (a % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}
//exercicio 12
function maioridade(idade) {
    if (idade >= 18) {
        return "maior de idade";
    } else {
        return "menor de idade";
    }
}

//exercicio 13
function aprovacao(nota) {
    if (nota >= 7) {
        return "aprovado";
    } else {
        return "reprovado";
    }
}

//exercicio 14
function maiorDeDois(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return a;
    }
}

//exercicio 15
function positivoOuNegativo(a) {
    if (a > 0) {
        return "positivo";
    } else if (a < 0) {
        return "negativo";
    } else {
        return "zero";
    }
}

//exercicio 16
function desconto(preco) {
    return preco - (preco * 0.1);
}

//exercicio 17
function celsiusParaFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

//exercicio 18
function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}

//exercicio 19
function senhaValida(senha) {
    return senha.length >= 8;
}

//exercicio 20
function calculadora(a, b, operacao) {
    switch (operacao) {
        case '+':
            return somar(a, b);
        case '-':
            return subtrair(a, b);
        case '*':
            return multiplicar(a, b);
        case '/':
            return dividir(a, b);
        default:
            return "erro: operação inválida.";
    }
}

//exercicio 21
const somar = (a, b) => a + b;

//exercicio 22
const dobro = (a) => a * 2;

//exercicio 23
const saudacao = (nome) => `Oi, ${nome}!`;

//exercicio 24
const ehPar = (a) => a % 2 === 0;

//exercicio 25 
const primeiroElemento = (array) => array[0];

//exerciico 26
const ultimoElemento = (array) => array[array.length - 1];

//exercicio 27
const quantidadeElementos = (array) => array.length;

//exercicio 28
const adicionarElemento = (array, novoElemento) => {
    array.push(novoElemento);
    return array;
}

//exercicio 29
const removerUltimoElemento = (array) => {
    array.pop();
    return array;
}
//exercicio 30
const listarElementos = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//exercicio 31
const exibirNomes = (nomes) => {
    nomes.forEach((nome) => {
        console.log(nome);
    });
}

//exercicio 32
const exibirNumeros = (numeros) => {
    numeros.forEach((numero) => {
        console.log(`Número: ${numero}`);
    });
}
    return alunos
        .filter((aluno) => aluno.nota >= 7)
        .map((aluno) => aluno.nome);
};
