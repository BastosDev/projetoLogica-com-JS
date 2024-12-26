const listaDeNumeros = [20, 12, 11, 18, 29, 1029]
const numerosPar = []
const numeroImpar = []
let i = 0

while (i < listaDeNumeros.length){
    if (listaDeNumeros[i] % 2 === 0) {
        numerosPar.push(listaDeNumeros[i])
    }
    else {
        numeroImpar.push(listaDeNumeros[i])
    }
    i += 1
}

console.log(`Numeros pares : ${numerosPar} ; Numeros impares : ${numeroImpar}`)