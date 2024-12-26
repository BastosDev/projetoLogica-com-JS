const listaDeNomes = ["Gustavo", "Jose", "Ana", "Maria", "Carlos", "Luciana", "Pedro", "Rita", "Ricardo", "Beatriz"]

let encontrarUsuario = false
let i = 0

while ( !encontrarUsuario ) {
    const usuario = listaDeNomes[i]
    
    if (usuario.startsWith("L")) {
        encontrarUsuario = true
        console.log(`Usuário encontrado : ${usuario}`)
    } else {
        encontrarUsuario = true
        console.log("Usuário não encontrado")
    }
}