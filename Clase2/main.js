// // Repaso
// let numero = 0;
// let nombre = 'Gerardo';
// let bandera = false;

// let alumno = {
//     nombre: 'Gerardo',
//     edad: 23,
//     genero: 'Masculino',
//     materias: {
//         matematicas: {
//             calificacion: 10,
//         },
//         geografia: {
//             calificacion: 9,
//         },
//         civismo: {
//             calificacion: 7
//         }
//     }
// }

// console.log(alumno.materias.matematicas.calificacion);

// // Clase animal
// class Animal {
//     constructor(nombre, peso, edad, comidaFavorita) {
//         // Atributos
//         this.nombre = nombre;
//         this.peso = peso;
//         this.edad = edad;
//         this.comidaFavorita = comidaFavorita;
//     }

//     // Métodos
//     respira() {
//         return 'Estoy respirando'
//     }
//     comer() {
//         return 'Mi comida favorita es ' + this.comidaFavorita;
//     }
// }

// let perro = new Animal('Firulais', '30kg', 3, 'Croquetas');
// let gato = new Animal('Garfield', '5kg', 30, 'Lasagna');

// class Ave extends Animal {
//     constructor(nombre, peso, edad, comidaFavorita, tienePico, vuela) {
//         super(nombre, peso, edad, comidaFavorita);
//         this.tienePico = tienePico,
//             this.vuela = vuela
//     }
// }

// class Anfibio extends Animal {
//     constructor(nombre, peso, edad, comidaFavorita, esVenenoso, nivelDeToxico) {
//         super(nombre, peso, edad, comidaFavorita);
//         this.esVenenoso = esVenenoso;
//         this.nivelDeToxico = nivelDeToxico;
//     }

//     sonido() {
//         return 'Croa Croa';
//     }

//     calcularToxico() {
//         return this.nivelDeToxico / 3;
//     }
// }

// let pato = new Ave('Donald', '3kg', 100, 'Pescado', 'sí', 'no');


// // Ejercicio Persona
// class Persona {
//     constructor(nombre, apellidoP, apellidoM, fechaNacimiento, edad, sexo, peso, altura) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sexo = sexo;
//         this.peso = peso;
//         this.altura = altura;
//         this.apellidoP = apellidoP;
//         this.apellidoM = apellidoM;
//         this.fechaNacimiento = fechaNacimiento;
//     }

//     calcularIMC() {
//         return this.peso / (this.altura * this.altura)
//     }

//     esMayorDeEdad() {
//         if (this.edad > 17) {
//             return 'Es legal.'
//         } else {
//             return 'No eres legal.'
//         }
//     }

//     calculaRFC() {
//         let RFC;
//         // Medina M e d i n a
//         // MERG950719
//         // '19/07/1995'
//         // RFC = this.apellidoP.substring(0, 2);
//         // RFC = RFC + this.apellidoM.substring(0, 1);
//         // RFC = RFC + this.nombre.substring(0, 1);
//         //RFC = RFC + (this.fechaNacimiento.substring(8, 10) + this.fechaNacimiento.substring(3, 5) + //this.fechaNacimiento.substring(0, 2));

//         return (this.apellidoP.substring(0, 2) + this.apellidoM.substring(0, 1) + this.nombre.substring(0, 1) + this.fechaNacimiento.substring(8, 10) + this.fechaNacimiento.substring(3, 5) + this.fechaNacimiento.substring(0, 2)).toUpperCase();;


//     }
// }

// let Gerardo = new Persona('Gerardo', 'Medina', 'Romero', '19/07/1995', 23, 'M', 75, 1.75);
// console.log(Gerardo.calcularIMC());
// console.log(Gerardo.esMayorDeEdad());
// console.log(Gerardo.calculaRFC());


// // Maestro (Padre)
//     // Nombre, Calificaciones
//     // ObtenPromedio [arreglo]
// // MaestroMate -> Edad
// // MaestroMusica -> Antigûedad