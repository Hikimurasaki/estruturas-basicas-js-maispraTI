// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let num = Number(prompt("Deseja calcular o fatorial de qual número? "));
let resultado = 1;

for (let i = 2; i <= num; i++) {
  resultado *= i;
}

console.log(`O fatorial de ${num} é ${resultado}`);
