//5) Peça dois números ao usuário e exiba todos os números pares no intervalo entre eles. 

//pede dois números ao usuário
let numero1 = parseInt(prompt("Digite o primeiro número:"), 10);
let numero2 = parseInt(prompt("Digite o segundo número:"), 10);

// Garante que os números sejam válidos
while (isNaN(numero1)) {
  numero1 = parseInt(prompt("Entrada inválida. Digite o primeiro número:"), 10);
}

// Garante que os números sejam válidos
while (isNaN(numero2)) {
  numero2 = parseInt(prompt("Entrada inválida. Digite o segundo número:"), 10);
}

// Determina o menor e o maior para percorrer corretamente
let inicio = Math.min(numero1, numero2);
let fim = Math.max(numero1, numero2);

let pares = [];

// Loop para encontrar números pares entre os dois números
for (let i = inicio + 1; i < fim; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

// Exibe os números pares encontrados ou uma mensagem se não houver
if (pares.length > 0) {
  alert(`Números pares entre ${numero1} e ${numero2}: ${pares.join(", ")}`);
} else {
  alert(`Não há números pares entre ${numero1} e ${numero2}.`);
}

