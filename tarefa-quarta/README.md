Revisar aula 3 e ver os metodos:

find
sort
reduce

Vamos finalizar o sistema de alunas e vai criar o sistema de livros



Vamos introduzir a leitura do projeto de sábado:

um sistema que armazena informações de livros para que seja possível gerenciar:
  - os livros que já lemos e os livros que estão na nossa listinha de desejos

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