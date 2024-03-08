var agora = new Date()

var diaSem = agora.getDay()

/*
Domingo - 0
Sábado - 6
*/

console.log(diaSem)

switch(diaSem) {

case 0:

console.log('Domingo')

break

case 1:

console.log('Segunda')

break

case 2:

console.log('Terça')

break

default:

console.log('Dia Inválido')

}