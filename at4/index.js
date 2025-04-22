//4) Crie um programa que solicite 5 notas e calcule a média delas.

// Solicita 5 notas ao usuário 
let somaNotas = 0;

// Loop para solicitar 5 notas
// O loop vai de 1 a 5, pois queremos 5 notas


for (let i = 1; i <= 5; i++) {
  let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));

  // Validação para garantir que a nota seja um número válido
  while (isNaN(nota) || nota < 0 || nota > 10) {
    nota = parseFloat(prompt(`Entrada inválida. Digite a ${i}ª nota (de 0 a 10):`));
  }

// Adiciona a nota à soma total
  somaNotas += nota;
}


// Calcula a média das notas
let media = somaNotas / 5;

// Mostra ao usuário a média das notas
alert(`A média das 5 notas é: ${media.toFixed(2)}`);
