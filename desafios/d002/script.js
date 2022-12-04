function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var dimg = document.createElement('div')
        dimg.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade < 10){
                dimg.style.backgroundImage = 'url(imagens/fotombebe.jpg)'
            } else if (idade < 18){
                dimg.style.backgroundImage = 'url(imagens/fotomjovem.jpg)'
            } else if (idade < 65){
                dimg.style.backgroundImage = 'url(imagens/fotomadulto.jpg)'
            } else{
                dimg.style.backgroundImage = 'url(imagens/fotomidoso.jpg)'
            }
        } else{
            genero = 'Mulher'
            if (idade < 10){
                dimg.style.backgroundImage = 'url(imagens/fotofbebe.jpg)'
            } else if (idade < 18){
                dimg.style.backgroundImage = 'url(imagens/fotofjovem.jpg)'
            } else if (idade < 65){
                dimg.style.backgroundImage = 'url(imagens/fotofadulto.jpg)'
            } else{
                dimg.style.backgroundImage = 'url(imagens/fotofidoso.jpg)'
            }
        }
        res.innerHTML = `Resultado:<br> ${genero} de ${idade} anos`
        res.appendChild(dimg)
    }
}