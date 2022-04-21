//sort - ordena uma lista

const produtos = ['mesa', 'geladeira', 'computador', 'fogao']

const listaOrdenadaAZ = produtos.sort()
console.log(listaOrdenadaAZ)

const numeros = [67, 98, 64, 13, 3]
const numerosDecrescente = numeros.sort((num1,num2) => num2-num1)
console.log(numerosDecrescente)

const numerosCrescente = numeros.sort((num1,num2) => num1-num2)
console.log(numerosCrescente)





