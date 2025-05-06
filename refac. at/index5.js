//Pede para o usuário digitar dois números e declara as variáveis

let inicio = parseInt(prompt("Digite o número inicial:"));

let fim = parseInt(prompt("Digite o número final :"))

//O comando "isNaN" verificará se o usuário realmente digitou um número ou se é outro carctere inválido

if (isNaN(inicio || fim || inicio > fim)) {

    alert("Erro:Você não digitou um número válido!");

} else {

    // Se o usuário digitar os números válidos, descobriremos os números pares entre o intervalo

    let resultado = '';

    // "resultado" armazerá os números pares no intervalo dos dois números 

    for (let i = inicio; i <= fim; i++) {

        {

            // Loop do número "inicial" e número "fim"


            if (i % 2 === 0) {

                // Verificará se "i" é par

                resultado += `${i}\n`;

                // Caso "i" for par, adicionará a variável "resultado"

            }

        }


        // Mostrará para o usuário os números pares encontrados 

        alert("Os números pares entre ${inicio} e ${fim}} são:\n${resultado}");


    }
}