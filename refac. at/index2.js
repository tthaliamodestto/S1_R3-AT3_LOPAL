 // Serve para declarar a variável "soma" e define o valor dela como 0

let soma = 0; 


for (let i = 1; i <= 10; i++) { 
    
    
    // O comando faz com que o loop repita 10 vezes


    let num = parseInt(prompt("Digite o $ {i}º número inteiro")); 
    

    // Serve para pedir para o usuário digitar números para efetuar a soma e declara a variável "num"


// O comando "isNaN" serve para verificar se o usuário digitou uma letra ou outro caracter que não seja um número

    if (isNaN(num))
        
        {
        alert("Erro!!Você não digitou um carctere válido!");
        i--; 


    } else {

        soma += num;
        
        // Esse comando serve para somar o número digitado e a variável "soma"

    }

}


alert("A soma dos 10 números é: ${soma}");


// Diz ao usuário o resultado da soma dos 10 números escolhidos
// E também, o comando "alert" serve para mostrar o resultado da soma dos 10 números 