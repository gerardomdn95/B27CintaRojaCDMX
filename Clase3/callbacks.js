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
// let calculo = (velocidad, distancia, tiempo, operacion) => {
//     return operacion(velocidad, distancia, tiempo)
// }

// let velocidad = (velocidad, distancia, tiempo) => {
//     return `La velocidad es ${distancia / tiempo} m/s2`;
// }

// let distancia = (velocidad, distancia, tiempo) => {
//     return `La distancia es ${velocidad * tiempo} metros`;
// }

// let tiempo = (velocidad, distancia, tiempo) => {
//     return `El tiempo es ${distancia / velocidad} segundos`;
// }

// console.log(calculo(25, 30, 10, velocidad));
// console.log(calculo(25, 30, 10, distancia));
// console.log(calculo(25, 30, 10, tiempo));


// Función base que reciba un número y una función
// Cuadrado de ese número
// El doble de ese número
// Si es un número par %
// La raíz cuadrada de ese número

// ${}


// Funcion base que reciba un numero y una funcion
// Cuadrado de ese numero
// el doble de ese numero
// si es un numero par
// la raiz cuadrada de ese numero

let operacion = (numero, operacion) => {
    return operacion(numero);
}
let cuadradoDeX = (numero) => {
    return `El cuadrado de ${numero} es ${numero * numero}`;
}

let dobleDeX = (numero) => {
    return `El doble de ${numero} es ${2 * numero}`;
}

let numeroPar = (numero) => {
    if (numero % 2 === 0) {
        return `El numero ${numero} es par`
    } else {
        return `El numero ${numero} es impar`
    }
}

let raiz = (numero) => {
    return `La raiz cuadrada de ${numero} es ${Math.sqrt(numero)}`;
}

console.log(operacion(4, cuadradoDeX));
console.log(operacion(4, dobleDeX));
console.log(operacion(4, numeroPar));
console.log(operacion(4, raiz));