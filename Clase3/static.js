class Bebida {
    constructor(cantidad) {
        this.cantidad = cantidad;
    }
}

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    }
    get azucar() {
        return this.__azucar__;
    }
    set azucar(azucar) {
        this.__azucar__ = azucar + ' gramos'; 
    }
    static acerca() {
        return 'Los refrescos tienen mucha azucar.'
    }
}

class Cerveza extends Bebida {
    constructor(cantidad, porcentaje) {
        super(cantidad);
        this.porcentaje = porcentaje;
    }
    getPorcentaje(){
        return this.porcentaje;
    }
    setPorcentaje(porcentaje) {
        return this.porcentaje = porcentaje;
    }
}

let victoria = new Cerveza(400, 5.2);

// Porcentaje = 5.2
console.log(victoria.porcentaje);
console.log(victoria.getPorcentaje());
//

victoria.setPorcentaje(12);

console.log(victoria.getPorcentaje());

let coca = new Refresco(355, 25);

console.log(coca.azucar);

coca.azucar = 60;

console.log(coca.azucar)

console.log(Refresco.acerca());


// Padre Rectangulo (geters seters)
// Hijo Cuadrado (estatico);b  b