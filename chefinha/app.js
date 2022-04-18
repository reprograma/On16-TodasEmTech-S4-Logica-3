const alunas = require('./database')
console.table(alunas.filter(aluna => aluna.idade > 30))