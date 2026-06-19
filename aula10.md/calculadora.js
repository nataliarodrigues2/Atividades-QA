/**
 * 1. Crie uma calculadora simples (Funções de Soma, Subtração, Divisão e Multiplicação)
    * A entrada de dados e operçaão deve ser pelo terminal (Exemplo: `node calculara.js soma 1 2`)
 */
// SOMAR
function soma(a,b) {
    return a + b;
}
// SUBTRAIR
function subtracao(c,d) {
    return c - d;
}
// MULTIPLICAR
function multiplicacao(e,f) {
    return e * f;
}
// DIVIDIR
function divisao(g,h) {
    if (h === 0) {
        console.log("Não há divisões por 0");
        return 0;
    }
    return g / h;
}

// node ./calculadora.js soma 1 2
const op = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])

switch (op) {
    case "soma":
        console.log(soma(valor1, valor2));
        break;
    case "subtracao":
        console.log(subtracao(valor1, valor2));
        break;
    case "multiplicacao":
        console.log(multiplicacao(valor1, valor2));
        break;
    case "divisao":
        console.log(divisao(valor1, valor2));
        break;
    default:
        console.log("Operação inválida!");
        break;
}