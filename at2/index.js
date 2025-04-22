let soma = 0;

// Solicita 10 números inteiros ao usuário
for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`), 10);


  // Validação para garantir que o número é inteiro
  while (isNaN(numero)) {
    numero = parseInt(prompt(`Entrada inválida. Digite o ${i}º número inteiro:`), 10);
  }

  soma += numero;
}

// Mostra ao usuario a soma dos números digitados
alert(`A soma dos 10 números é: ${soma}`);

