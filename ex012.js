// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require("prompt-sync")();

let num = prompt("Digite um número para ver a sua tabuada: ");

for (let i = 1; i < 11; i++) {
  console.log(`${num}` * i);
}
