function primeirafuncao() {
    console.log('ola mundo');
};

primeirafuncao();

//tem uma fuçao em cima e uma funçao em baixo

function dizerNome(nome) {
    console.log('o nome é: '+ nome);
};

dizerNome('Matheus');
dizerNome('Pedro');
dizerNome('Xavier');


var nomeDoBancoDeDados = 'Joao';

dizerNome (nomeDoBancoDeDados);

//tem uma fuçao em cima e uma funçao em baixo

function soma(a, b){
    var soma = a + b;
    return soma;
};

var somaUm = soma(2, 5);

console.log (somaUm);

//tem uma fuçao em cima e uma funçao em baixo

let corSite = 'azul';
console.log(corSite);

function resetcor(){
    corSite = '';
};
resetcor();
console.log(corSite);

//tem uma fuçao em cima e uma funçao em baixo

function reset (cor ,tonalidade){
    corSite = cor + tonalidade;
};
reset('verde ','claro')
console.log (corSite)