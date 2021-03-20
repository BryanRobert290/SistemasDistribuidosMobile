/*Escreva uma função calcularIdadeDoCachorro que deverá:
a) Receber dois argumentos:
i) idade real do cachorro
ii) uma função que irá exibir a categoria etária do Cachorro e que recebe
como parâmetro a idade real do cachorro e retorna “Criança” caso ele
seja menor que 14, “Adolescente” caso seja entre 14 e 28 e “Adulto”
caso seja maior que 28
b) Calcule a idade do cachorro baseada na taxa de conversão 1 ano humano =
7 anos de cachorro.
c) Use a idade do cachorro para chamar a função recebida como parâmetro e
exiba no console a idade do cachorro e a categoria etária dele*/
function calcularIdadeDoCachorro(idadeCachorro){
           if(idadeCachorro < 14){
        console.log("A idade do Cachorro é : " + idadeCachorro +" E ele é Criança")
    }else if (idadeCachorro >= 14 && idadeCachorro <=28){
        console.log("A idade do Cachorro é : " + idadeCachorro +" E ele é Adolescente")
}else if(idadeCachorro >28){
    console.log("A idade do Cachorro é : " + idadeCachorro +" E ele é Adulto")
}
}
let idadereal;
let idadeCachorro = prompt("Digite a Idade do Cachorro :");
idadereal = Number(idadeCachorro) * 7;
calcularIdadeDoCachorro(idadereal);
