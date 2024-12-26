const listaDeNomes = ["Gustavo", "Jose", "Ana", "Maria", "Carlos", "Luciana", "Pedro", "Rita", "Ricardo", "Beatriz"]

let encontrarUsuario = false
let i = 0

while (!encontrarUsuario) {
    const usuarioAtual = listaDeNomes[i]

    if (usuarioAtual.startsWith("X")) {
        console.log (`Usuario encontrado : ${usuarioAtual}`)
        encontrarUsuario = true
    } else {
        encontrarUsuario = true
        console.log("Usuario não encontrado")
    }

    i += 1
}