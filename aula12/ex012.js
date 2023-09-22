var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

console.log(`Agora são ${hora}:${minuto}`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora < 24) {
    console.log('Boa noite!')
} else {
    console.log('Hora inválida!')
}