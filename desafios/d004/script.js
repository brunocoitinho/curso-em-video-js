function gerar(){
    var tnum = window.document.getElementById('txtnum')
    var stab = window.document.getElementById('seltab')

    num = Number.parseInt(tnum.value)

    stab.innerHTML = ""

    for (i = 1; i <= 10; i++){
        var op = document.createElement('option')
        stab.appendChild(op)
        op.innerText = `${num} x ${i} = ${num * i}`
    }
}
