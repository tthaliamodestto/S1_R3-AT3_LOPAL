// Pede um número para o usuário e declara a variavel chamdada "num" 


let num = parseInt(prompt(" Digite um número "));  


// O comando IsNaN serve para conferir se o usuário digitou uma letra ou outro caracter que não seja um número


if (isNaN(num)) {     
  
    
    alert ("Erro!!Você não digitou um caractere válido!")
 
    
} else {     


    //Se o usuário digitar um número válido irá começar um loop desde o número 1 até o número que o usuário escolheu


    for (let i = 1; i <= num; i++) {         
       

        console.log({i})     

    } 
   
    
}