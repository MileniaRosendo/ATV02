var numeros;
var contador = 0; 
var soma = 0; 
while (contador < 5 ) {
    numeros = parseInt(prompt("Digite o " +(contador + 1)+ "° número dos 5 : ")); 
    contador ++; 
    
    soma = soma + numeros; 
}

document.write("A soma deu : "+ soma +"<br>");
document.write("E a Média : " + soma/contador); 


