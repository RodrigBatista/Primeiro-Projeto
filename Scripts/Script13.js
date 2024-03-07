var agora = new Date()
var hora = agora.getHours() //getHours pega a hora exata do sistema que está rodando o script
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 19) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}