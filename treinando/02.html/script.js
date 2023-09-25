function calcular () {
    var diametro = Number(document.querySelector('input#diametro').value)
    var comp = Number(document.getElementById('comp').value)
    var resultado = document.querySelector('div#peso')

    peso_metro = ((diametro**2) * 3.1416 * 7.854) / 4000
    var peso = peso_metro * comp

    resultado.innerHTML = `Peso = ${peso}`
}

function entrar () {
    var botao = document.getElementById('botao')
    botao.style.background = 'green'
    botao.style.color = 'white'
    botao.style.paddingBottom = '1px'
}

function sair () {
    var botao = document.querySelector('input#botao')
    botao.style.background = '#f0f0f0'
    botao.style.color = 'black'
}