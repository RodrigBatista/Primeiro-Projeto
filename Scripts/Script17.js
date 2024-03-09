/*
function parimpar(n) {
    if (n%2 == 0) { //n dividido por 2 igual resto 0
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
var res = parimpar(8)
console.log(res) 
*/

function soma(n1=0, n2=0) { //Se a soma solicitada no console.log for de apenas um número, o outro será considerado 0.
    return n1 + n2
}
console.log(soma(10, 9))