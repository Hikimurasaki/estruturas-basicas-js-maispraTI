// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

console.log("1. Chocolate");
console.log("2. Morango");
console.log("3. Baunilha");
let saborDeSorvete = Number(prompt("Qual sabor de sorvete você escolhe? "));

switch (saborDeSorvete) {
  case 1:
    console.log("Você escolheu o de chocolate!");
    break;
  case 2:
    console.log("Você escolheu o de morango!");
    break;
  case 3:
    console.log("Você escolheu o de baunilha!");
    break;
  default:
    console.log("Opção inválida");
}
