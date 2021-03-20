/*Peça ao usuário para digitar várias idades separadas por vírgula
em um input e exiba quantas pessoas são maior de idade (18
anos) e quantas são menores.*/
/*Peça ao usuário para digitar várias idades separadas por vírgula
em um input e exiba quantas pessoas são maior de idade (18
anos) e quantas são menores.
 */

function MaioreMenor(idade_string){
    let idades = idade_string.split(",");

    let MaiorNum = [];
    let MenorNum = [];


    for(let i=0; i < idades.length; i++){
      if(Number(idades[i]) >= 18){
        MaiorNum++;
      }else {
          MenorNum++;
      }
    }
}
console.log("O n° de Idades maiores que 18 anos é: " + idadeMaior);
console.log("O n° de Idades menores que 18 anos é: " + idadeMenor);


let idades = prompt("Digite 5 idades separadas por vírgula");
calcularMaioreMenor(idades);