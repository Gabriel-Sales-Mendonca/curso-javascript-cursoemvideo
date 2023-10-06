var numeros_digitados = []

function adicionar() {
    //adiciona os valores digitados no select
    var num = Number(document.getElementById('num').value) // pega o valor digitado

    if (num == '') {
        alert('ERRO, digite um número.') // caso o usuario nao informe um numero
    } else if (numeros_digitados.includes(num)) {
        alert('Valor inválido, esse número já foi adicionado.')
    } else if (num < 1 || num > 100) {
        alert('Valor inválido, digite um número entre 1 e 100.')
    } else {
        numeros_digitados.push(num) // adiciona o valor digitado no array
        var numeros = document.getElementById('numeros') // pega o select onde serao adicionados os numeros
        var opcao = document.createElement('option')
        opcao.text = `Valor ${numeros_digitados[numeros_digitados.length - 1]} adicionado.` // adiciona no select o valor digitado pelo o usuario que esta no array (o ultimo do array)

        numeros.appendChild(opcao) // adiciona o valor no select

        var num = document.getElementById('num')
        num.value = ''
        num.focus()
    }
}

function finalizar() {
    var maior = numeros_digitados[0]
    var menor = numeros_digitados[0]

    for (c = 0; c < numeros_digitados.length; c++) { 
        if (numeros_digitados[c] > maior) { // pega o maior valor do array
            maior = numeros_digitados[c]
        } else if (numeros_digitados[c] < menor) { // pega o menor valor do array
            menor = numeros_digitados[c]
        }
    }

    var somatorio = 0
    for (var c = 0; c < numeros_digitados.length; c++) {
        somatorio += numeros_digitados[c]
    }

    var media = somatorio / numeros_digitados.length

    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `Ao todo, temos ${numeros_digitados.length} números cadastrados.<br>
    O maior valor informado foi ${maior}.<br>
    O menor valor informado foi ${menor}.<br>
    Somando todos os valores, temos ${somatorio}.<br>
    A média dos valores digitados é ${media}.`
}