// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")();

let num = prompt("Digite um número inteiro: ");

if (num % 2 == 0) {
  console.log("Número PAR");
} else {
  console.log("Número ÍMPAR");
}
