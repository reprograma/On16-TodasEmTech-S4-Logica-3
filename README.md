# Lógica aplicada - Estrutura de repetição, arrays, métodos e objetos 🚀

**Semana 4 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)**

## Sumário

1. [Estrutura de repetição](#loops)
2. [Objetos](#objetos)
3. [Arrays](#arrays)
4. [Métodos de iteração](#métodos-de-iteração)
5. [Ferramentas da semana: readline e nodemon](#readline-e-nodemon)

### Chamada, apresentação das monitoras e acordos
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>
---

## Loops
Loop, laço, iteração ou estrutura de repetição. 

A gente faz diariamente atividades com repetição, por exemplo num exercicío físico. Digamos que nosso personal nos mandou fazer uma série de 10 pulos de corda. 

A gente pode criar uma função pulaCorda() e quando ela for chamada, dentro dela irá executar 10 vezes o console.log com a string pulei a corda e o valor da repetição digitado manualmente. 

Agora se o professor mudar a série para 100 vezes, vai ficar chato digitar 100 consoles, certo? É aí que as estruturas de repetição podem nos ajudar, temos um ponto de partida e um ponto de chegada para nosso sistema, vamos começar do pulo 1 e vamos até o pulo 100 e queremos mostrar isso no console. 

Podemos fazer isso com for, while e também com o do...while.

```
function pulaCorda() {
  console.log('Pulei a corda com function 1')
  console.log('Pulei a corda com function 2')
  console.log('Pulei a corda com function 3')
  console.log('Pulei a corda com function 4')
  console.log('Pulei a corda com function 5')
  console.log('Pulei a corda com function 6')
  console.log('Pulei a corda com function 7')
  console.log('Pulei a corda com function 8')
  console.log('Pulei a corda com function 9')
  console.log('Pulei a corda com function 10')
}

pulaCorda();
```
```
console.log('inicio')
for(let i = 1; i <=3; i++) {
  console.log(`Pulei a corda com for ${i}`)
}
console.log('fim')
```
```
console.log('inicio')
let i = 1;
while(i <=3) {
  console.log(`Pulei a corda com while ${i}`)
  i++
}
console.log('fim')
```
```
console.log('inicio')
let index = 1;
do{
  console.log(`Pulei a corda com do...while ${index}`) 
  index++
}while(index<=3)
console.log('fim')
```
1. Conceito
for é a estrutura de repetição com variavél de controle, a gente usa quando sabe exatamente qual são os nossos pontos de partida e de chegada.

while faz o teste lógico no início e sendo verdadeiro ele executa o bloco de código

do...while primeiro executa o bloco e depois faz o teste lógico, garantindo que a instrução será executada pelo menos 1 vez. 


2. Comandos especiais
    1. break: podemos encerrar uma instrução

    2. continue: podemos pular uma instrução

```
for(let i = 10; i > 0; i--) {

  console.log(i);

  if(i === 5) {
    break;
  }  
}

console.log("Deu o break");
```

```
let x = 10;

while(x < 100) {

  x += 10;
  
  if(x === 60 || x === 90) {
    console.log("CONTINUE");
    continue;
  }

  console.log("Testando continue " + x);

}
```
<br>


## Objetos

Objeto é um tipo de dado que contém uma coleção de propriedades organizadas em pares de chave (ou nome) e valor, sendo o valor qualquer tipo de dado (número, texto, função ou até mesmo outro objeto).

### Inicializando objetos

Para criar um novo Objeto, podemos atribuir a uma variável uma lista de elementos entre chaves, separados por vírgula e com a notação de `chave : valor`. Também é possível utilizando a palavra reservada `new` ou a partir de uma função.

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
}
```

```javascript
const pessoa = new Object()

pessoa.nome = 'Ariel';
pessoa.idade = 25;
pessoa.profissao = 'desenvolvedora';
```

### Acessando valores

Notação de ponto

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa.nome); // Ariel
console.log(pessoa.idade); // 25
console.log(pessoa.profissao); // desenvolvedora
```

Notação de colchetes (ou índice)

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa['nome']) // Ariel
console.log(pessoa['idade']) // 25
console.log(pessoa['profissao']) // desenvolvedora
```
Mais exemplos:

Declaração de objetos

```js
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const pokemon = {
  nome: 'Pikachu',
  tipo: 'elétrico',
  altura: 40.6,
}
```

Acessando o valor de uma propriedade do objeto.

```js
console.log(pokemon.nome) // Pikachu
```

```js
const nome = pokemon.nome
const tipo = pokemon.tipo
const altura = pokemon.altura

console.log(nome) // Pikachu
console.log(tipo) // elétrico
console.log(altura) // 40.6
```

Alterando propriedades

```
pokemon.nome = 'Bulbasaur'
```

Adicionando propriedades

```
pokemon.peso = '6,9kg'
```

Deletando propriedades

```
delete pokemon.peso
```
Atribuição via desestruturação

```js
const { nome, tipo, altura } = pokemon

console.log(nome) // Pikachu
console.log(tipo) // elétrico
console.log(altura) // 40.6
```

MDN: [destructuring assignment](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao)

### Date

```js
const hoje = new Date()

console.log(hoje) // 2020-09-05T10:56:49.693Z

const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()

console.log(dia, mes, ano) // 5 8 2020 🤔

const dataFormatada = hoje.toLocaleDateString('pt-BR')
console.log(dataFormatada) // 05/09/2020

```
MDN: [date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date),
[toLocaleDateString](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

## Arrays

Um array (ou lista) permite armazenar um conjunto de dados e atribuí-los a uma variável, sendo esta a estrutura de dados mais simples possível.

### Inicializando Arrays

Para criar um novo Array, podemos atribuir a uma variável uma lista de elementos entre colchetes e separados por vírgula. Também é possível utilizando a palavra reservada `new` e instanciando os valores que queremos atribuir ou apenas especificando o seu tamanho.

```javascript
const alunasReprograma = ['Andreia', 'Fernanda', 'Mariana', ...];
```

```javascript
const alunasReprograma = new Array('Andreia', 'Fernanda', 'Mariana', ...);
```

### Acessando valores

Para acessar o valor de um Array, use a notação de colchetes e informe a posição que deseja acessar, lembrando que a contagem começa em zero.

```javascript
const alunasReprograma = ['Andreia', 'Fernanda', 'Mariana', ...];

console.log(alunasReprograma[0]) // Andreia
console.log(alunasReprograma[1]) // Fernanda
console.log(alunasReprograma[2]) // Mariana
```

### Métodos de iteração

- `length` retorna um número que representa o tamanho do array.
- `push` adiciona um item na última posição do array.
- `filter` retorna um novo array com os elementos filtrados.
- `find` retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
- `map` retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
- `sort` ordena o array
- `reduce` reduz o array para um único valor mediante a uma operação matemática

### Exemplos

```js

const alunasReprograma = ["Paula", "Maria", "Estela", "Clara"]

//Quantos itens no array alunasReprograma?
console.log(alunasReprograma.length)

//Incluir um item no array

const novaAluna = "Simara"
alunasReprograma.push(novaAluna)

//Acessar informações num array
console.log(alunasReprograma[3]) //"Clara"

// Operador spread (...)
const alunasOn16 = [...alunasReprograma, "Andressa"]

console.log(alunasOn16)

//Metodos de iteração
//Map
const callback = function() {
  console.log(aluna)
}

alunasOn16.map(callback()) 


//Filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(numerosPares)


const produtos = ["geladeira", "fogao", "cama", "mesa"]

//find

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)

//sort - ordenação 

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdenadosDecrescente)


//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
})

console.log(soma) //70

```
## Readline e Nodemon

- Readline-sync é um pacote maravilhoso para pegar inputs no terminal, ou seja pegar entradas de dados no sistema. Se você veio de programação front-end isso equivale a pegar o value do input de um usuário num formulário.

 - Dentro da pasta de seu projetinho instale digitando o comando no terminal: npm install readline-sync


- Nodemon é uma forma de executar o node atualizando automaticamente sempre que incluirmos e salvarmos novas informações nos arquivos.js
 - Dentro da pasta de seu projetinho instale digitando o comando no terminal: npm install nodemon
 - Crie o script start no package.json:
  "scripts": {
    "start": "nodemon app.js"
  }
 - Execute apenas uma vez: npm run start (após isso ele fica olhando nosso código e atualizando a execução do node)


## Exemplo chefão

Vamos criar um sistema que armazena informações de algumas alunas matrículadas no formato abaixo:

```
nome: string
idade: number
local: string
conteudoFavorito: string
```
Comportamento do sistema:

- deverá ser possível buscar alunas pela localidade
- caso a pessoa usuária escolha não buscar por localidade, deverá mostrar a tabela de alunas 
ordenada de forma crescente pela idade


Passo 1: npm init -y

Passo 2: npm i --save readline-sync 

Passo 3: npm i --save-dev nodemon

Passo 4: crie o script de start

Passo 5: criar .gitignore

Passo 6: criar a database um array de objetos, não esquecer de exportar

Passo 7: criar o arquivo app.js

Passo 8: Rodar projeto npm run start
**`E bora codar!`**


**Desafio entregavel:**

#### Calma! É só uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!

Vamos criar um sistema que armazena informações de livros para que seja possível gerenciar:
  - os livros que já lemos e os livros que estão na nossa listinha de desejos
  

> Passo a passo:
1) Crie uma pasta que irá conter os arquivos abaixo: 
- README.md
- app.js
- database.js
- Inicialize o npm :  npm init -y
- Crie o script de start: 
- Crie o script start no package.json:
  "scripts": {
    "start": "nodemon app.js"
  }
- Crie o .gitignore (node_modules)
- instale as dependências nodemon e readline-sync: npm i --save readline-sync nodemon

2) No arquivo database crie e exporte a sua base no formato array de objetos contendo alguns dos livros que você já leu ou gostaria de ler com os seguintes campos:

```
nome: string
categoria: string
paginas: number
recomenda: boolean
leu: boolean
```

3) No arquivo app.js desenvolva sua lógica para o comportamento abaixo: 
  - deverá ser possível buscar livros pela categoria
  - Me recomenda livros pra ler? 
    Deverá listar livros que já foram lidos e que são recomendados 
  - Minha lista de desejo:
    Deverá listar livros que ainda não foram lidos 

- Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas.

```
O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas, conforme instrução acima.
```
4) No README.md você já sabe, conte sobre sua experiência e aprendizados com esse projeto.

5) A entrega é pelo classroom.

## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [youtube](https://www.youtube.com/channel/UCGaPf6u8sp-yd5BvOS3du0g)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)