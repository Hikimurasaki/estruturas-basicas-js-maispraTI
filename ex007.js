// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let macas = Number(prompt("Quantas maças você deseja comprar? "));

if (macas < 12) {
  console.log(`O preço será de R$ ${macas * (0.3).toFixed(2)}`);
} else {
  console.log(`O preço será de R$ ${macas * (0.25).toFixed(2)}`);
}
