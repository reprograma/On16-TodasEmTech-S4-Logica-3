//Exemplo do break

for(let contador = 10; contador > 0;  contador = contador - 1) {
  console.log(contador)

  if(contador === 5) {
    break
  }  
}
console.log("Deu o break")


//Exemplo do continue
let counter = 10

while(counter < 100) {
  counter += 10
  
  if(counter === 60 || counter === 90) {
    console.log("CONTINUE")
    continue
  }

  console.log("Testando continue " + counter)
}