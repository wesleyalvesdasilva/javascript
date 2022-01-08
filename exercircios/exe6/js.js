//realiza uma tarefa e não devolve nada
function dizerNome(){
    console.log('Jhonatan')
};

dizerNome();

//Faz um calculo ou operação e retorna algo 
function multiplicarPorDois(){
    return valor * 2; //no return estamos devolvendo para que seja usado em algum lugar o resultado dessa funçao
};

//console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log(resultado)