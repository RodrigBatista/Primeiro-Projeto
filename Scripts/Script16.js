/*var num = [5, 8, 2, 9, 3]
num.sort() // Coloca em ordem crescente
num.push(1) // Coloca o valor '1' no último número
console.log(`O vetor tem ${num.length} posições`) // Saber quantas posições tem na variável composta
console.log(`O primeiro valor do vet é ${num[0]}`)
num[5] =7 // num recebe '7' na posição 5
console.log(num)*/


/*let valores = [8, 1, 7, 4, 2, 9]
console.log(`Temos os seguintes valores: ${valores}`)
for(var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valo ${valores[pos]}`)
}*/


var valores = [8, 1, 7, 4, 2, 9]
valores.push(3, 8, 4, 12) // Coloca o valor '3, 8, 4, 12' nos últimos números
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
var pos = valores.indexOf(7) // procurar o valor '7' dentro da var 'valores'
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}