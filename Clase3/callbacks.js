// let primeraFuncion = (callback) => {
//     return callback();
// }

// let callback = () => {
//     return 'Yo soy el callback';
// }

// console.log(primeraFuncion(callback));

// v = d/t
// d = v*t
// t = d/v

// Función base
let calculo = (velocidad, distancia, tiempo, operacion) => {
    return operacion(velocidad, distancia, tiempo)
}

let velocidad = (velocidad, distancia, tiempo) => {
    return `La velocidad es ${distancia / tiempo} m/s2`;
}

let distancia = (velocidad, distancia, tiempo) => {
    return `La distancia es ${velocidad * tiempo} metros`;
}

let tiempo = (velocidad, distancia, tiempo) => {
    return `El tiempo es ${distancia / velocidad} segundos`;
}

console.log(calculo(25, 30, 10, velocidad));
console.log(calculo(25, 30, 10, distancia));
console.log(calculo(25, 30, 10, tiempo));


// Función base que reciba un número y una función
// Cuadrado de ese número
// El doble de ese número
// Si es un número par %
// La raíz cuadrada de ese número

// ${}