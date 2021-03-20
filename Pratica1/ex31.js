/*Crie uma função para validar um CPF. A função deverá receber um número como
input e retornar se este número é um CPF válido. Para este número ser considerado
válido ele deve ter 11 dígitos e a soma dos seus dígitos não poderá ser maior que
80.   
 */
function validarcpf(){
let soma = 0;
let numCPF = prompt("Digite o seu cpf apenas números sem caracteres" );
if (numCPF.length == 11) {
    for (let digito in numCPF){
        soma = Number(digito) + soma;
    
    }if (soma <= 80) {
        alert("CPF valido");
    }else {
        alert("CPF invalido");
    }    
} else {
    alert("CPF invalido");
}
}
validarcpf();