// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")();

cont = 0;
for (let i = 0; i < 5; i++) {
  let nums = Number(prompt("Digite um número: "));
  cont += nums;
}
console.log(`A soma dos números digitados é igual a ${cont}`);
