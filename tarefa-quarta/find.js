//find -> encontra um item dentro da nossa lista
const produtos = ['mesa', 'geladeira', 'computador', 'fogao']

const encontraGeladeira = produtos.find(item => item === 'geladeira')
console.log(encontraGeladeira)

const encontraFogao = produtos.find(item => item === 'fogão')
console.log(encontraFogao)

