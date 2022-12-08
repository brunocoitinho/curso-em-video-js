let num = [5, 8, 2, 9, 3]
num[5] = 7
num.sort()
num.push(1)



console.log(`Nosso vetor é o ${num} e seu tamanho é ${num.length}`)
console.log(`Nosso vetor em ordem é ${num.sort()}`)
console.log(`O valor 8 está na posição ${num.indexOf(8)}`)