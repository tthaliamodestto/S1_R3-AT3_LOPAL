// 1) Crie um programa que peça um número ao usuário e exiba na tela todos os números de 1 até o número digitado.

// Pede ao usuário que escolha um número para converter para um número inteiro

 const num = parseInt(prompt("Digite um número para mostrar quantos números do 1 ao número escolhido:"));  


// Verifica se o valor que o usuário escolheu não é um número

if (isNaN(num)) {     


    // Exibe uma mensagem de erro se o valor não for um número
    alert("Erro! Escolha um número válido") 

} else {     
   

    // Se o número for válido, inicia um loop que vai de 1 até o número digitado pelo usuario


    for (let i = 1; i <= num; i++) {  
               
        // Exibe um alerta com o número atual do loop

        alert(`${i}`)     
    } 

}
