function contar() { 
    /*faz a contagem dos numeros baseada nos valores de inicio, fim e passo.
    inicio: eh o valor de inicio da contagem
    fim: eh o valor ate onde a contagem vai
    passo: eh o valor passo da contagem, de quanto em quanto se faz a contagem
    */
    var inicio = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    var msg = document.querySelector('div#msg')

    msg.innerHTML = 'Contando: <br>'

    if (inicio.length == '' || fim.length == '' || passo.length == '') { //verifica se existem campos nao preenchidos
        alert('[ERRO] Por favor preencha todos os campos!')
        msg.innerHTML = 'Impossível contar'
    } else {
        var inicio = Number(inicio)
        var fim = Number(fim)
        var passo = Number(passo)

        if (passo == 0) { //se o passo fosse igual = 0 entraria em um loop infinito quando chegasse no for abaixo.
            alert('Não é possível fazer a contagem com o passo = 0, portanto, considerando passo = 1.')

            var passo = 1
        }

        if (inicio < fim) {
            for (var contador = inicio; contador <= fim; contador += passo) {
                msg.innerHTML += `${contador} \u{1f449} `
            }
        } else {
            for (var contador = inicio; contador >= fim; contador -= passo) {
                msg.innerHTML += `${contador} \u{1f449} `
            }
        }
        msg.innerHTML += '\u{1f3c1}'
    }
}