/*Escreva uma função somarValores(). Peça o usuário para digitar um valor no Prompt
armazenando este valor em um array. Faça isso enquanto o usuário entrar com um
valor não numérico ou apertar “Esc” ou “Cancelar”.
Calcule e retorne a soma dos valores deste array de itens.
*/

//n consegui

function somarValores() {
    const listaNum = [];
    let soma = 0;
  
    do {
      let num = prompt("Digite um Número: ");
      var isNumber = !isNaN(parseFloat(num)) && isFinite(num);
  
      if (isNumber) {
        listaNum.push(Number(num));
      }
    } while (isNumber);
  
    for (let numero of listaNum) {
      soma = numero + soma;
    }
  
    console.log(soma);
  }
  
  somarValores();