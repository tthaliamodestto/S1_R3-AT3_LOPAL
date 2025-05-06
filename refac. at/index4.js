// Declara uma variável  que será a soma dos numeros digitados pelo usuário
//E também define ela como 0

let soma = 0; 


for (let i = 1; i <= 5; i++) { 


    let media= parseInt(prompt("Digite a ${i}º nota para descobrir sua média ")); 


// O comando "isNaN" irá verificar se o usuário realmente digitou um número ou algum caractere inválido que não seja um número

    if (isNaN(media)) {

        alert("Erro!!Você não digitou um número válido!");

        i--; 


    } else {


        soma += media / 5;
        // Esse comando fará o calculo para descobrir a média dos números que o usuário escolheu


    }
}

alert("A sua média de acordo com sua notas é: ${soma}");

// informa ao usuário sua média dos números escolhidos