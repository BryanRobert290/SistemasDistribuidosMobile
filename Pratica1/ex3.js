/*Faça um programa que entre com cinco números e imprima o
quadrado de cada número (Looping).*/

function calcularQUadrado() {
    let quadrado;
    for (let i = 0; i < 5; i++) {
      let num = prompt("Digite um Número");
      let quadrado = Math.pow(num, 2);
      console.log(quadrado);
    }
  
    return quadrado;
  }
  
  calcularQUadrado();