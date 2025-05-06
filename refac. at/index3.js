// Essa variável "tabuada" armazena o número escolhido pelo usuário para calcular a tabuada


let tabuada = parseInt(prompt("Escolha um número para descobrir a tabuada "));


// O comando "isNaN" verifica se o caratere digitado realmente é um número ou se é uma letra ou outro caracter inválido


if (isNaN(tabuada)){

    alert("Erro:Você não digitou um número válido!");

} 


for (let i = 1; i <= 10; i++) {

    alert("${tabuada} x ${i} = ${tabuada * i}");


}