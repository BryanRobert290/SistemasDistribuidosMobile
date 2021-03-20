/*) Escreva um bloco de código que irá perguntar através do prompt a identificação do
visitante:
a) Se o visitante digitar “Admin” abra um prompt perguntando a senha. Se o
input for vazio ou apertar Esc (perguntar) exiba um alerta com “Cancelado”, se for uma
outra string exiba um alerta com a mensagem “Não conheço você”.
b) A senha deverá ser checada da seguinte maneira:
i) Se for igual a “UniBH” - exiba um alerta “Bem vindo”,
ii) Se for uma outra string - exiba um alerta “Senha incorreta!”)
iii) Se for vazio ou cancelado - exiba “Cancelado”
*/

let visitante = prompt("Digite sua identificação (login):");

if (visitante = "Admin") {
    let senha = prompt("Digite a senha:");
    
    if (senha == "") {
        alert("Cancelado");
      } else if (senha == "UniBH") {
        alert("Bem-Vindo!");
      } else {
        alert("Senha Incorreta!");
      }
    } else if (visitante == "") {
      alert("Cancelado");
    } else {
      alert("Não conheço você!");
    }

