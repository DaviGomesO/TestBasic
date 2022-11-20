console.log("Hello World")

const nome = "Davi";

let idade = "21";
idade = 21;

var altura = 1.81;

console.log(typeof (10)); // Inteiro.
console.log(typeof (12.5)); // Real.
console.log(10 + 5); // Expressão que retorna um inteiro.
console.log(Math.sqrt(-1)); // Expressão que retorna NaN.
console.log(parseInt("blabla")); // Expressão que retorna NaN.
console.log(Infinity); // Número infinito.
console.log(typeof (true));
console.log(false);

const pessoa = {
  nome: "Davi",
  idade: 21,
  altura: 1.81,
  endereco: {
    cidade: "M. Nova",
    rua: "Mâncio Rodrigues"
  }
}

console.log(pessoa.endereco)

// Parâmetros.
function soma(numero1, numero2) {
  var total = (numero1 + numero2)

  return total;
}

// Argumentos.
var resultado = soma(2, 3)

console.log(resultado)

//Arrow Function
const imprime_nome = (nome) => {
  console.log(nome);
}

imprime_nome("Davi");

const novaPessoa = {
  ...pessoa, // Spread, basta por "..." antes do objeto base
  idade: 22,
  altura: 1.82
};

console.log(novaPessoa);

const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1, 6, 7, 8];
const array3 = [-1, 0, ...array1];
const array4 = [...array1, ...array2, ...array3];

console.log(array1, array2, array3, array4);

function mostrarNomeEIdade() {
  const { nome, idade } = pessoa;

  console.log(nome, idade);
}

console.log(mostrarNomeEIdade());

function mostrarEndereco() {
  const { endereco: { cidade: cidadePessoa, rua }, telefone = '99 00000-0000' } = pessoa;

  console.log(cidadePessoa, rua);
}

console.log(mostrarEndereco());

const array = ['Luis', 18, 1.80, '99 99999-9999'];

// pego o indice 0 e o indice 1 do array
const [nomeArray, idadeArray] = array;
console.log(nomeArray, idadeArray);

// vamos supor que eu queira pegar somente o indice 2 e 3, posso fazer dessa forma
const [, , alturaArray, telefone] = array;
console.log(altura, telefone);
