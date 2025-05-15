// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let num;
let quantidade = 0;
let soma = 0;

do {
  num = Number(prompt("Digite um número decimal (0 para sair): "));
  if (num !== 0) {
    quantidade++;
    soma += num;
  }
} while (num !== 0);

if (quantidade > 0) {
  let mediaAritmetica = soma / quantidade;
  console.log(`A média aritmética dos números digitados é ${mediaAritmetica}`);
} else {
  console.log("Nenhum número foi digitado para calcular a média.")
}