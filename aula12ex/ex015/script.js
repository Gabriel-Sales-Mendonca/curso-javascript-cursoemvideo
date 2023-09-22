var data = new Date()
var ano = data.getUTCFullYear()

function clicar() {
    var nascimento = Number(document.querySelector('input#nascimento').value)

    var opcao = document.querySelector('input[name="sexo"]:checked').value

    var msg = document.getElementById('msg')
    msg.style.textAlign = 'center'

    var foto = document.getElementById('foto')

    if (nascimento < ano) {
        var idade = ano - nascimento

        if (opcao == 'masculino') {
            msg.innerHTML = `Detectamos Homem com ${idade} anos.`

            if (idade < 60) {
                foto.src = 'foto_homem_jovem.jpg'
            } else {
                foto.src = 'foto_homem_velho.jpg'
            }
        } else {
            msg.innerHTML = `Detectamos Mulher com ${idade} anos.`
            
            if (idade < 60) {
                foto.src = 'foto_mulher_jovem.jpg'
            } else {
                foto.src = 'foto_mulher_velha.jpg'
            }
        }
            msg.innerHTML = 'Ano de Nascimento incorreto, tente novamente!'
        } 
    else {
        msg.innerHTML = 'Ano de Nascimento Inválido, tente novamente!'
        foto.src = ''
    }
}