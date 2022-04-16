const livros = [
  {
    nome:'Algoritmos para viver',
    autora: [ 'brian', 'tom'],
    pagina: 400,
    ano: '2016',
    jaLeu: true
  },
  {
    nome:'Estrutura de Dados e Algoritmos com Javascript',
    autora: 'Loiane',
    pagina: 300,
    ano: '2019',
    jaLeu: false
  },
  {
    nome:'Aquario o signo curioso',
    autora: 'Alexander',
    pagina: 30,
    ano: '2018',
    jaLeu: true
  }
]



//filter : retorna um array com os itens filtrados

//filter
//funcao callback
//funcao anonima
//arrow function

// const filtraLivrosQueJaLi = function(livro) {
//   if(livro.jaLeu === true) {
//     console.log(livro.nome)
//   }
// }

// livros.filter(filtraLivrosQueJaLi)


//map retorna um novo array com as informacoes 
//que eu passar na minha funcao callback

livros.map((livro) => console.log(livro.pagina))

// for (let livro = 0; livro < livros.length; livro++) {
//   console.log(livros[livro].nome)
// }