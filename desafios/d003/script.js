function contar(){
    var tinicio = window.document.getElementById('txtini')
    var tfim = window.document.getElementById('txtfim')
    var tpasso = window.document.getElementById('txtpasso')

    var res = window.document.getElementById('res')

    var ok = 0

    if(tinicio.value == "" || tfim.value == "" || tpasso.value == ""){
        window.alert('[Erro] Não podem ficar campos vazios')
        return
    }

    
    
    res.innerHTML = "Contando...<br>"
    var inicio = Number.parseInt(tinicio.value)
    var fim = Number.parseInt(tfim.value)
    var passo = ((Number.parseInt(tpasso.value)) ** 2)**(1/2)

    if (passo == 0){
        window.alert('[Erro] O passo não pode ser igual a zero. Considerando passo igual a um.')
        passo = 1
    }
    
    c = inicio

    if (fim < inicio){

        for (c = inicio; c >= fim; c -= passo){
            res.innerHTML += `${c} &#128073;`
        }
    
        res.innerHTML += "&#127937;"
        return
    }

    for (c = inicio; c <= fim; c += passo){
        res.innerHTML += `${c} &#128073;`
    }

    res.innerHTML += "&#127937;"
    
}

/*
var dimg = document.createElement('div')
dimg.setAttribute('id','foto')
res.appendChild(dimg)
dimg.style.backgroundImage = 'url(imagens/fotofidoso.jpg)'
*/