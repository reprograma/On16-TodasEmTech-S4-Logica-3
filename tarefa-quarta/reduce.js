// realizar operacoes matematicas com os itens de um array
// me retorna o resultado dessa operacao matematica

const numeros = [1, 34, 35] 

const result = numeros.reduce((valorAnterior, valorAtual) => {
  return valorAnterior * valorAtual
})

console.log(result)//105