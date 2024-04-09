const ERROR = 'ERROR';
const MENSAGEM_ERRO = 'Não foi possível realizar o cálculo';

// function adicao(primeiroValor, segundoValor) {
//   let soma = Number(primeiroValor)+Number(segundoValor);
//   return soma;
// }

// function subtracao(primeiroValor, segundoValor) {
//   let subtracao = Number(primeiroValor)-Number(segundoValor);
//   return subtracao;
// }

// function multiplicacao(primeiroValor, segundoValor) {
//   let multiplicacao = Number(primeiroValor)*Number(segundoValor);
//   return multiplicacao;
// }

// function divisao(primeiroValor, segundoValor) {
//   if (segundoValor === 0) {
//     return 'ERROR';
//   }
//   let divisao = Number(primeiroValor)/Number(segundoValor);
//   return divisao;
// }

// const adicao = function (primeiroValor, segundoValor) {
//   const adicao = Number(primeiroValor)+Number(segundoValor);
//   return adicao;
// }

// const subtracao = function (primeiroValor, segundoValor) {
//   const subtracao = Number(primeiroValor)-Number(segundoValor);
//   return subtracao;
// }

// const multiplicacao = function (primeiroValor, segundoValor) {
//   const multiplicacao = Number(primeiroValor)*Number(segundoValor);
//   return multiplicacao;
// }

// const divisao = function (primeiroValor, segundoValor) {
//   if (segundoValor === 0) {
//     return 'ERROR';
//   }
//   const divisao = Number(primeiroValor)/Number(segundoValor);
//   return divisao;
// }

const adicao = (primeiroValor, segundoValor) => Number(primeiroValor)+Number(segundoValor);
const subtracao = (primeiroValor, segundoValor) => {
  if (primeiroValor < segundoValor) {
    return ERROR;
  }
  return Number(primeiroValor)-Number(segundoValor);
}
const multiplicacao = (primeiroValor, segundoValor) => Number(primeiroValor)*Number(segundoValor);
const divisao = (primeiroValor, segundoValor) => {
  if (segundoValor === 0) {
    return ERROR;
  }
  return Number(primeiroValor)/Number(segundoValor);
};

const resultadoAdicao = adicao(80,90);
const resultadoSubtracao = subtracao(980,1000);
const resultadoMultiplicacao = multiplicacao(25,30);
const resultadoDivisao = divisao(100,0);

const verificaSubtracao = resultadoSubtracao !== ERROR ? resultadoSubtracao : MENSAGEM_ERRO;
const verificaDivisao = resultadoDivisao !== ERROR ? resultadoDivisao : MENSAGEM_ERRO;

console.log(`O resultado da soma foi: ${resultadoAdicao}`);
console.log(`O resultado da subtração foi: ${verificaSubtracao}`);
console.log(`O resultado da multiplicação foi: ${resultadoMultiplicacao}`);
console.log(`O resultado da divisão foi: ${verificaDivisao}`);