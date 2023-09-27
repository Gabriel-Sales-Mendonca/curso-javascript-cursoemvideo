function gerar_tabuada() { 
    /* gera uma tabuada
    numero: numero usado para gerar a tabuada
    tabuada: local onde será exibida a tabuada
    */
    var numero = document.getElementById('numero').value
    var tabuada = document.getElementById('tabuada')

    tabuada.innerHTML = '' //limpa a tabuada antiga para exibir a nova

    if (numero.length == 0) { //caso a pessoa nao preencha o numero
        alert('Por favor, digite um número!')

        //evita que o select fique sem uma option
        let mensagem = document.createElement('option')
        mensagem.text = 'Digite um número acima'

        tabuada.appendChild(mensagem)
    } else {
        var numero = Number(numero)

        for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {
            let item = document.createElement('option')

            item.text = `${numero} X ${multiplicador} = ${numero * multiplicador}`

            tabuada.appendChild(item)
        }
    }
}