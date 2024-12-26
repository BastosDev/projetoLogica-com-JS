const numero1 = 10

if (numero1 > 1){
    console.log("Este numero é maior que 1")
}

console.log(!![], !!{}, !!1, !!"string")

if ([] && {} && 1 && "string" && true){
    console.log("Truuuuuuthyy")
}

console.log(!!null, !!NaN, !!undefined, !!0, !!"")

if ((null || NaN || undefined || 0 || "") == false){
    console.log("Falsyyyyyy")
}

const temCNH = true 
const idade = 18
const podeDirigir = idade > 18 && temCNH
const numeroDePassageiros = podeDirigir ? 4 : 0

if (podeDirigir){
    console.log("Pode Dirigir")
}else{
    console.log("Você é barbeiro rapaz")
}

console.log({ numeroDePassageiros })

const nomesLista = ["João", "Noé", "Pedro"];

const numeroDeUsuarios = nomesLista.length
let i = 0

while (i < numeroDeUsuarios){
    console.log(`Ola ${nomesLista[i]}`)
    i += 1
}