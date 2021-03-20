/*Escreva um if para checar se o valor de um produto NÃO está entre 100 e 200 de
forma inclusiva. Faça duas maneiras para isto, uma usando o NOT (!) e outra sem
utilizá-lo.(tirar duvida)*/ 
let produto = prompt("Digite o Valor do Produto");

   
    if (produto >=100 && produto <=200) {
        console.log("O valor do produto é "+ produto +" E está entre 100 e 200");
    } else {
        console.log("O valor do produto é "+ produto +" E não está entre 100 e 200");
    }