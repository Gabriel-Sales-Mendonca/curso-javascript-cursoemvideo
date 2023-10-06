var pessoas = {nome: 'gabriel', 
nota: 0, 
prova(prova){
    this.nota += prova
}}

prova1 = 10

pessoas.prova(prova1)

console.log(`O aluno ${pessoas.nome}, até então tem ${pessoas.nota} pontos na disciplina.`)