function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg = document.getElementById('msg')
    img = document.getElementById('imagem')

    if (hora > 0 && hora < 12) {
        msg.innerHTML = `São ${hora}:${minuto} horas. Bom Dia!`
        titulo = document.getElementById('titulo')
        titulo.style.color = 'black'
        rodape = document.getElementById('rodape')
        rodape.style.color = 'black'
        document.body.style.background = 'BlanchedAlmond'
        img.src = 'foto_manha.jpg'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `São ${hora}:${minuto} horas. Boa Tarde!`
        document.body.style.background = 'Orange'
        img.src = 'foto_tarde.jpg'
    } else {
        msg.innerHTML = `São ${hora}:${minuto} horas. Boa Noite!`
        document.body.style.background = 'darkblue'
        img.src = 'foto_noite.jpg'
    }
}