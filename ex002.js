// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require("prompt-sync")();

let idade = prompt("Digite sua idade: ");

if (idade <= 11) {
  console.log("CRIANÇA");
} else if (idade > 11 && idade < 18) {
  console.log("CRIANÇA");
} else if (idade > 18 && idade < 60) {
  console.log("ADULTO");
} else {
  console.log("IDOSO");
}
