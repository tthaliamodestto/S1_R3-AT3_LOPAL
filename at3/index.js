// 3) Peça ao usuário um número e exiba a tabuada de 1 a 10 desse número

// pede para o usuário um número para ver a tabuada

let numero = parseInt(prompt("Digite um número para ver a tabuada:"), 10);


// Verifica se o valor digitado é um número
while (isNaN(numero)) {
  numero = parseInt(prompt("Entrada inválida. Por favor, digite um número válido:"), 10);
}

// Cria uma string para armazenar a tabuada
let tabuada = `Tabuada do ${numero}:\n`;


// serve para calcular a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
  tabuada += `${numero} x ${i} = ${numero * i}\n`;
}

// Exibe a tabuada para o usuário
alert(tabuada);

