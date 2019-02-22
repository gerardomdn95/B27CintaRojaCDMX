let primeraFuncion = async () => {
    return console.log(`Soy la primera función`);
}

let segundaFuncion = async () => {
    return console.log(`Soy la siguiente instrucción`);
}

let terceraFuncion = async () => {
    return console.log(`Tercera instrucción`)
}

primeraFuncion()
    .then(
        segundaFuncion()
            .then(
                terceraFuncion()
            )
        );