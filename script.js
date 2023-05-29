/*
Criar uma lista de estudantes contendo:
- nome
- nota da primeira prova
- nota da segunda prova

Depois de criada a lista:
- crie uma função que calcule a média das notas de cada aluno
- suponto que a média seja 7, verifique se cada aluno obteve sucesso ou não em entrar no curso e mostre uma mensagem na tela
"a média da aluna letícia é: x
parabéns, leticia! você foi aprovada no concurso!
    ou
não foi dessa vez, letícia! tente novamente!"
*/
function avarageGrade(grade1, grade2){
    let avarage = (grade1 + grade2)/2
    return avarage
}
function result(name, avarage){
    if(avarage >= 7){
        alert(`A média do(a) aluno(a) ${name} é: ${avarage} \nParabéns, ${name}! Você foi aprovado(a) no concurso!`)
    } else{
        alert(`A média do(a) aluno(a) ${name} é: ${avarage} \nNão foi dessa vez, ${name}! Tente novamente!`)
    }
}

let numberOfStudents = Number(prompt('Digite o número de alunos que prestaram o concurso'))

let studentsData = []
let student

for(let i = 1; i <= numberOfStudents; i++){
    student = new Object()
    student.name = prompt(`Digite o nome do(a) aluno(a) número ${i}`)
    student.gradeOne = Number(prompt(`Digite a primeira nota do(a) aluno(a) número ${i}`))
    student.gradeTwo = Number(prompt(`Digite a segunda nota do(a) aluno(a) número ${i}`))
    student.avarage = avarageGrade(student.gradeOne, student.gradeTwo)
    studentsData.push(student)
}
console.log(studentsData)
for(let i = 0; i < numberOfStudents; i++){
    result(studentsData[i].name, studentsData[i].avarage)
}