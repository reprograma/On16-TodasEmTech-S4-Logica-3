// | Exemplo 01 | Descrição |
// | --- | --- |
// | `criar e acessar valores (objeto e array)` 
//|Crie objetos e arrays e acesses os valores
//     a) array lista de compras 
//     b) objeto livro (nome, autora, pagina, anoPublicao, jaLeu)
//     c) Criar um array com varios objetos de livros

// a) 
// const minhaListinha = ['blusa bonita lilas', 'calça jeans bonitona', 'tamanca']
// console.log(minhaListinha)

//b)
const livro = {
  nome:'Algoritmos para viver',
  autora: [ 'brian', 'tom'],
  pagina: 400,
  ano: '2016',
  jaLeu: true
}

console.log(livro.autora[1])//tom

// c)

const livros = [
  {
    nome:'Algoritmos para viver',
    autora: [ 'brian', 'tom'],
    pagina: 400,
    ano: '2016',
    jaLeu: true
  },
  {
    nome:'Algoritmos de destruição em massa',
    autora: [ 'brian', 'tom'],
    pagina: 400,
    ano: '2016',
    jaLeu: true
  },
  {
    nome:'Algoritmos para viver',
    autora: [ 'brian', 'tom'],
    pagina: 400,
    ano: '2016',
    jaLeu: true
  },
  {
    nome:'Algoritmos para viver',
    autora: [ 'brian', 'tom'],
    pagina: 400,
    ano: '2016',
    jaLeu: true
  }
]