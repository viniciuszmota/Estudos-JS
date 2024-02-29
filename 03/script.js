/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let firstNumber = prompt("Digite o primeiro número: ")
let secondNumber = prompt("Digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const subtraction = firstNumber - secondNumber
const multiplication = firstNumber * secondNumber
const division = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Resultado da soma = " + sum)
alert("Resultado da subtração = " + subtraction)
alert("Resultado da multiplicação = " + multiplication)
alert("Resultado da divisão = " + division)
alert("Resto da divisão = " + restDiv)