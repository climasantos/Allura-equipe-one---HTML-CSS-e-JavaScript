/* Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1;
while (contador <= 10) {
    alert(`Número atual da contagem é ${contador} !` );
    contador++;
    console.log(contador);
}

*/

/* Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.


let contador = 10 ;
while (contador >= 0) {
    alert(`Número atual da contagem é ${contador} !`);
    contador--;
    console.log(contador);
}

*/


/*

let contar = prompt('Digite um número para contagem regressiva: ');
while (contar >= 0) {
    alert(`Contagem regressiva ${contar} !`);
    contar--;
    console.log(contar);
}

*/

let numeroInicial = 0;
let numeroContagem = prompt('Insira aqui o seu número: ');
while (numeroInicial <= numeroContagem) {
    numeroInicial++;
    console.log(numeroInicial);
}