var contador = 0;
var numMaior = -1;
var num = 0;
while(contador < 5)
{
    num = parseInt(window.prompt("Digite o " +(contador + 1)+ "° número : "));
    if (num >= numMaior) {
        numMaior = num;
    }
    contador++;
}
document.write("O número maior foi : " + numMaior);