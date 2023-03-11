
var populacaoA = 80000; 
var crescimentoA = populacaoA * 0.03; 
var populacaoB = 200000; 
var crescimentoB = populacaoB * 0.015; 

var totalAnos = 0; 
while (populacaoA < populacaoB) {
    populacaoA = populacaoA + crescimentoA;
    crescimentoA = populacaoA * 0.03;
    populacaoB = populacaoB + crescimentoB; 
    crescimentoB = populacaoB * 0.015; 
    totalAnos ++; 
}

document.write("Total de anos = " +totalAnos);