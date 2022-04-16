const alunasReprograma = ['Andreia', 'Fernanda', 'Mariana']

// diz o tamanho do array
console.log(alunasReprograma.length)//3
// acessa itens dentro do array a partir da posição
alunasReprograma[0] //'Andreia'
alunasReprograma[2] // 'Mariana' 

// como inserir novo item no fim do array
const novaAluna = 'Lays'
alunasReprograma.push(novaAluna) 
console.log(alunasReprograma) // ['Andreia', 'Fernanda', 'Mariana', 'Lays']

alunasReprograma[3] //Lays

for (let aluna = 0; aluna < alunasReprograma.length; aluna++) {
  console.log(alunasReprograma[aluna])
}

//parametro