
var populacaoA = parseFloat(window.prompt("Insira o valor da população de A: ")); 
var taxaCrescimentoA = parseFloat(window.prompt("Insira a taxa de crescimento para A: "));
var crescimentoA = populacaoA * taxaCrescimentoA;
var populacaoB = parseFloat(window.prompt("Insira o valor da populaçaõ B: ")); 
var taxaCrescimentoB = parseFloat(window.prompt("Insira a taxa de crescimento para B: ")); 
var crescimentoB = populacaoB * taxaCrescimentoB; 

var totalAnos = 0; 
while (populacaoA < populacaoB) {
    populacaoA = populacaoA + crescimentoA;
    crescimentoA = populacaoA * taxaCrescimentoA;
    populacaoB = populacaoB + crescimentoB; 
    crescimentoB = populacaoB * taxaCrescimentoB; 
    totalAnos ++; 
}
console.log("Total de anos = " +totalAnos);
document.write("Total de anos = " +totalAnos);
