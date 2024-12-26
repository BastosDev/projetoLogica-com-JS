const users = {
    name: "JoSe MarIa",
    email: "JOSE.MARIA@gmail.com",
    age: 27,
    adress: "X Street"
}

for (const key in users) {
    if (key === "name") {
        const names = users[key].split(" ") 
        console.log(names)
        users[key] = ""
            for (const name of names) {
                const normalizedName = name.toLowerCase()
                const [primeiraLetra, ... restoDoNome] = normalizedName
                
                console.log(primeiraLetra)
                console.log(restoDoNome)

                users[key] = users[key] + " " + primeiraLetra.toUpperCase() + restoDoNome.join("")
                users[key] = users[key].trim()
            }
    }

    if (key === "email") {
        users["email"] = users[key].toLowerCase()
    }
}

console.log(users)