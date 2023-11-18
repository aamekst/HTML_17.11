let alunos = []
alunos.push("João");
alunos.push("Maria");
alunos.push("Bia");
alunos.push("pedro");
alunos.pop();
console.log(Alunos[0]);
console.log(Alunos[1]);
console.log(Alunos[2]);
alunos.length
console.log(alunos[alunos.length-1])


let aluno = {};
aluno["nome"] = "João"; /* pode ser utilizado assim : aluno.nome */ 
aluno["idade"] = "20";
aluno["casado"] = "False";
aluno["disciplinas"] = ["LP", "POO", "DevWeb"];

console.log(aluno["nome"]); /* pode ser utilizado assim : console.log(aluno.nome)  */ 
console.log(aluno["idade"]); 
console.log(aluno["casado"]);
console.log(aluno["disciplinas"]);
console.log(aluno["disciplinas"][0]);


let aluno1 = {};
let aluno2 = {};

aluno1.ra = 1234;
aluno1.nome = "João"

aluno2.ra = 5678;
aluno2.nome = "Maria"

let estudantes =[];
estudantes.push(aluno1);
estudantes.push(aluno2);

aluno1 = null;
aluno2 = null;

console.log(estudantes[0].ra);
console.log(estudantes[0].nome);

/*,
lista armazena objetos e endereço na memoria
const pode usar na lista e adicionar objetos na lista
pop remove no final da lista
lenght retorna o tamanho da lista/array, e usa para chama o ultimo objeto do array 
retorna o ultimo console.log(alunos[alunos.length-1])

json (JAVA SCRIPT OBJETCT NOTION) é dicionario
acessar uma posiçãõ na lista em json console.log(aluno["disciplinas"][0]);


*/