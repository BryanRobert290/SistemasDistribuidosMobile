/*
17) Crie um array com dois itens: “Rock” e “Pagode”
18) Adicione “Funk” no final deste array.
19) Substitua o valor do meio por “Axé”. Seu código para encontrar o valor do meio deve
funcionar para qualquer array de tamanho par, faça a verificação com um IF.
20) Remova o primeiro valor do array e exiba ele no console.
21) Adicione “Rap” e “Reggae” no começo deste array.

*/
let tipoMusc = ["Rock","Pagode"];
console.log(tipoMusc);
tipoMusc.push("Funk");
let verificar = tipoMusc.length % 2;
if (verificar !=0){
    console.log("Impar");
    let meioarray = tipoMusc.length / 2;
    var itemremovido = tipoMusc.splice(verificar, 1, "Axé");
    }else{
    console.log("Par")
}
let removerprimeiroI = tipoMusc.splice(0, 1);
console.log("O intem removido foi :" + itemremovido);
tipoMusc.unshift("Rap","Raggae")
console.log(tipoMusc);