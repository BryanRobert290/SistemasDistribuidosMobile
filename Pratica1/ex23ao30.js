/*23) Escolha um pinguim na Lista de pinguins fictícios da Wikipedia e crie um objeto
chamado meuPinguim com propriedades que representam as informações listadas
em cada coluna dessa página da Wikipedia (por exemplo: o nome do personagem,
origem e autor).
24) Use console.log () para imprimir o nome do pinguim no console como parte de uma
mensagem de boas-vindas, como "Olá, sou um pinguim e meu nome é [NOME
AQUI]!"
25) Escreva outra linha de código que adicione uma nova propriedade ao seu pinguim
chamada podeVoar e defina-a como false. (Observação: não modifique o código de
criação de pinguins que você escreveu acima! Execute esta etapa em uma linha de
código separada.)
26) Adicione um método ao seu pinguim chamado emitirSom que imprime no console:
"CHIRP CHIRP! É assim que os pinguins se parecem?" (Observação: mais uma vez,
não modifique seu código anterior! Execute esta etapa escrevendo uma nova linha
de código.)
27) Escreva outro método chamado fly e, dentro desse método, use uma instrução if /
else para imprimir "Eu posso voar!" no console se a propriedade podeVoar do seupinguim for verdadeira ou "Não posso voar!" se sua propriedade podeVoar for false.
28) Chame o método fly () do seu pinguim e verifique se ele funciona!
29) Escreva um loop for ... in para imprimir cada propriedade no console.
30) Escreva outro loop for ... in para imprimir o valor de cada chave no console. (Dica:
você precisará usar a notação de colchetes para acessar os valores dessa forma,
em vez da notação de ponto!)
 */
const meuPinguim = {
    nome: ["Kowalski"],
    origem: ["Estados Unidos"],
    autor:["Tom McGrath"]
   }
console.log("Olá, sou um pinguim e meu nome é: "+ meuPinguim.nome);
    const meuPinguim = {
    //podeVoar = false
    emitirsom:function(){
        return "CHIRP CHIRP!";
    }
 }
    console.log(meuPinguim.emitirsom);