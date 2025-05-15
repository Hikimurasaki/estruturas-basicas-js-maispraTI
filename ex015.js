// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let termos = 10;
let sequencia = [0, 1];

for (let i = 2; i < termos; i++) {
  sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
}

console.log(
  `Os primeiros 10 termos da sequência de Fibonacci são: ${sequencia}`
);
