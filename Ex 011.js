var idade = 15

if (idade < 18){
    if(idade == 16 || idade ==17){
    console.log(`Menor de idade!`)
    console.log(`Voto opcional`)
    } else {
        console.log(`Menor de idade!`)
        console.log(`Menor de de 16 anos, não vota`)
    }
} else {
    console.log(`Maior de idade`)
    console.log(`Voto obrigatorio`)
}