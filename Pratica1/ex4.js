/*Peça ao usuário para digitar 5 números em uma caixa de texto,
separados por vírgula, Verifique qual é o maior número e exiba-o.*/
function calcularMaiorNum(num_string) {
    let numeros = num_string.split(",");
  
    let maiorNum = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (Number(numeros[i]) > maiorNum) {
        maiorNum = Number(numeros[i]);
      }
    }
  
    return maiorNum;
  }
  let numeros = prompt("Digite 5 números separadas por vírgula", 0);
  console.log(calcularMaiorNum(numeros));