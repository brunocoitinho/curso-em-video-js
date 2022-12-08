function parimpar(n = 0){
    if (n % 2 == 0){
        return "par"
    } else{
        return "impar"
    }
}

n = 16

console.log(`${n} é um número ${parimpar(n)}.`)