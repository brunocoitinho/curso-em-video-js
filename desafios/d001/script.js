function carregar(){
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem')
    var fotodiv = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 19 || hora < 6){
        imagem.src = 'imagens/foto-noite.png'
        document.body.style.background = '#023059'
        fotodiv.style.boxShadow = `0px 0px 10px rgb(255, 240, 135)`
    } else if(hora < 13){
        imagem.src = 'imagens/foto-manha.png'
        document.body.style.background = '#2E6EA6'
        fotodiv.style.boxShadow = `${-12+((hora-6)*2)}px ${hora}px 7px black`
    } else {
        imagem.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#F28749'
        fotodiv.style.boxShadow = `${-12+((hora-6)*2)}px ${12 - (hora-12) * 2}px 7px black`
    }
}