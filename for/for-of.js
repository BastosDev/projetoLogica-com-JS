const listaDeNumeros = [10, 20, 30, 40, 50, 66, 77, 88]
const usuarios = ["Gustavo", "Jose", "Ana", "Maria", "Carlos", "Luciana", "Pedro", "Rita", "Ricardo", "Beatriz"]
let contador = 0
let contador2 = 0

console.log("Tipo de For 1")
for(let i = 0 ; i < listaDeNumeros.length ; i++) {
    console.log(listaDeNumeros[i])
}

console.log("\n")

console.log("Tipo de For 2")
for(let elements of listaDeNumeros) {
    console.log(elements)
}

console.log("\n")

console.log("Lista de usuários com For")
for (const usuario of usuarios) {
    console.log(usuario)
}

// equivalente ao for com while

console.log("\n")

while (contador < usuarios.length) {
    console.log(usuarios[contador])
    contador += 1
}

while (contador2 < listaDeNumeros.length) {
    console.log(listaDeNumeros[contador2])
    contador2 += 1
}