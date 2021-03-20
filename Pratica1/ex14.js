/*Escreva uma condição IF para checar se o valor de um produto está entre 100 e 200
reais de forma inclusiva.*/

let produto = prompt("Digite o Valor do Produto");

   
    if (produto >=100 && produto <=200) {
        console.log("O valor do produto é "+ produto +" E está entre 100 e 200");
    } else {
        console.log("O valor do produto é "+ produto +" E não está entre 100 e 200");
    }