function soma(a,b){
    let c = a + b;
    return c;
}

console.log(soma(4,4));

let x = 5;
let y = 6;
let resultado = soma(x, y);
console.log(resultado);

//função anonima
const menos = function soma(a,b){
    let c = a - b;
    return c;
}

let nota = 7

if (nota => 6){
    console.log('aprovado')
}else{
    console.log("reprovado")
}


let i = 1;
for (let i = 0; i < 5; i++){ //incremento i+=2
    console.log(i);


}

let alunos = ["João", "Maria", "Pedro", "Bia"];
let k = 0;
while ( k < alunos.length){
    console.log(alunos[k])
    k++
}

let a = 1; 
do {
    alert(a);
    a = a + 1;
} while (a <= 5);

