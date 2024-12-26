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