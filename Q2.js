var login =  prompt("Digite seu login : ");
var senha = prompt("Digite a senha agora");
       while (login == senha) {
        senha =  window.prompt("Digite outra senha, que  não seja seu login :");
       } 
       window.alert("Registro Salvo");