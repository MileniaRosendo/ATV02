let nome, idade, salario, sexo, estadoCivil;

do {
  nome = prompt("Digite seu nome:");
} while (nome.length <= 3);

do {
  idade = parseInt(prompt("Digite sua idade:"));
} while (idade < 0 || idade > 150);

do {
  salario = parseFloat(prompt("Digite seu salário:"));
} while (salario <= 0);

do {
  sexo = prompt("Digite seu sexo (f/m):");
} while (sexo !== "f" && sexo !== "m");

do {
  estadoCivil = prompt("Digite seu estado civil (s/c/v/d):");
} while (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d");

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Salário: " + salario);
console.log("Sexo: " + sexo);
console.log("Estado Civil: " + estadoCivil);

document.write("Nome: " + nome + "\n");
document.write("Idade: " + idade + "\n");
document.write("Salário: " + salario + "\n");
document.write("Sexo: " + sexo + "\n");
document.write("Estado Civil: " + estadoCivil + "\n");
