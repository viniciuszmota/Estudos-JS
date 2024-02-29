/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
    { 
        name: 'João', 
        firstGrade: 8, 
        secondGrade: 7 
    },
    { 
        name: 'Maria', 
        firstGrade: 6, 
        secondGrade: 9 
    },
    { 
        name: 'Pedro', 
        firstGrade: 9, 
        secondGrade: 8, 
    },
    { 
        name: 'Tiago', 
        firstGrade: 2, 
        secondGrade: 1
    },
    {
        name: 'Judas', 
        firstGrade: 3, 
        secondGrade: 2 
    },
    {
        name: 'Tadeu', 
        firstGrade: 10, 
        secondGrade: 2, 
    }
]


function calcAverageGrade(student) {
    return (student.firstGrade + student.secondGrade) / 2;
}

function checkApproval(student) {
    let averageGrade = calcAverageGrade(student);
    if (averageGrade >= 7) {
        return `A média do aluno(a) ${student.name} é ${averageGrade} \n Parabéns ${student.name}, você foi aprovado!`;
    } else {
        return `A média do aluno(a) ${student.name} é ${averageGrade} \n Lamentamos ${student.name}, você não foi aprovado!`;
    }
}

for (let student of students) {
    alert(checkApproval(student));
}