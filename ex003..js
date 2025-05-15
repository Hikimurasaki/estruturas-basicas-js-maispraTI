// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

let nota = prompt("Qual sua nota? ");

if (nota <= 5) {
  console.log("REPROVADO");
} else if (nota <= 6) {
  console.log("RECUPERAÇÃO");
} else {
  console.log("APROVADO");
}
