function gerar(){
    var tnum = window.document.getElementById('txtnum')
    var stab = window.document.getElementById('seltab')

    stab.innerHTML = ""
    
    if (tnum.value == ""){
        window.alert('[ERRO] O campo número não pode ficar vazio.')
        return
    }

    num = Number.parseInt(tnum.value)

    for (i = 1; i <= 10; i++){
        var op = document.createElement('option')
        stab.appendChild(op)
        op.innerText = `${num} x ${i} = ${num * i}`
    }
}
