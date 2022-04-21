const alunas = require('./database')
const read = require('readline-sync')

// - deverá ser possível buscar alunas pela localidade
const perguntaLocalidade = read.question('Deseja pesquisar por localidade? S/N: ').toUpperCase()

if(perguntaLocalidade === 'S') {
  const informaEstado = read.question('Qual local? PE/BA/MG/PR/PE: ').toUpperCase()

  const filtreAlunas = alunas.filter(aluna => aluna.local === informaEstado)
  console.table(filtreAlunas)
} 
// - caso a pessoa usuária escolha não buscar por localidade, 
//deverá mostrar a tabela de alunas ordenada de forma crescente a-z pelo nome
if (perguntaLocalidade === 'N') {
  const listaDeNomes = alunas.map(aluna => aluna.nome)
  const alunasOrdenadas = listaDeNomes.sort()
  console.table(alunasOrdenadas)
}

