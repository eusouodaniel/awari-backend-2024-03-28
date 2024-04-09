const nome = 'Marcelo';

//escopo local
//declaração mais simples
// function cadastrarUsuario(usuario) {
//   if (usuario.nome === '') {
//     console.log(usuario)
//   }
// }

// cadastrarUsuario({
//   nome: 'Rafael',
//   sobrenome: 'Miralha',
//   curso: 'Backend'
// });

//funcao anonima
const cadastrar = function(usuario) {
  console.log(usuario);
}

// cadastrar({
//   nome: 'Rafael',
//   sobrenome: 'Miralha',
//   curso: 'Backend'
// });


const cadastrar = (usuario) => console.log(usuario); 

cadastrar({
  nome: 'Rafael',
  sobrenome: 'Miralha',
  curso: 'Backend'
});