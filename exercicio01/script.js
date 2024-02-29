/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).
*/

alert("Iremos realizar as seguintes operações com dois números: 1) Soma; 2) Subtração; 3) Multiplicação; 4) Divisão e 5) Resto da divisão:")
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")
let resultSum = Number(numberOne) + Number(numberTwo)
let resultSub = Number(numberOne) - Number(numberTwo)
let resultMult = Number(numberOne) * Number(numberTwo)
let resultDiv = Number(numberOne) / Number(numberTwo)
let resultRes = Number(numberOne) % Number(numberTwo)

alert("O resultado da Soma é: " + resultSum)
alert("O resultado Subtração é: " + resultSub)
alert("O resultado Multiplicação é: " + resultMult)
alert("O resultado Divisão é: " + resultDiv)
alert("O resto da divisão é: " + resultRes)

let evenNumber = resultSum % 2

if (evenNumber === 0) {
    alert(`A soma dos números ${numberOne} e ${numberTwo} é par!`)
} else {
    alert(`A soma dos números ${numberOne} e ${numberTwo} é ímpar!`)
}

if (numberOne === numberTwo) {
    alert(`Os números ${numberOne} e ${numberTwo} são iguais!`)
} else {
    alert(`Os números ${numberOne} e ${numberTwo} são diferentes!`)
}