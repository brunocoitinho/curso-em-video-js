var tnum = window.document.getElementById('txtnum')
var slista = window.document.getElementById('sellista')
var dres = window.document.getElementById('res')
var valores = []


function adicionar(){

    if (tnum.value == ""){
        window.alert('[ERRO] O campo número está vazio.')
        return
    }
    dres.innerHTML = ""
    aux = Number(tnum.value)

    if(aux > 100 || aux < 1){
        window.alert('[ERRO] Valor inválido! Escolha um número de 1 a 100')
    }else if (valores.indexOf(aux) != -1){
        window.alert('[ERRO] Este número já foi inserido.')
    } else{
        valores.push(aux)
        var op = document.createElement('option')
        slista.appendChild(op)
        op.innerText = `Valor ${aux} adicionado`
    }

    tnum.value = ""
    tnum.focus()
}


function analisar(){

    if (slista.childElementCount == 0){
        window.alert('[ERRO] Adcione ao menos um valor antes de finalizar.')
        return
    }

    soma = 0
    max = valores[0]
    min = valores[0]

    for (i = 0; i < valores.length; i++){
        if (valores[i] > max){
            max = valores[i]
        }
        if (valores[i] < min){
            min = valores[i]
        }
        soma += valores[i]
    }
    
    media = soma / valores.length 
    

    
    

    dres.innerHTML = `<p>Ao todo temos ${valores.length} números cadastrados.</p>
    <p>O maior valor informado foi ${max}.</p>
    <p>O menor valor informado foi ${min}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${media}.</p>` 
}





/*
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
*/