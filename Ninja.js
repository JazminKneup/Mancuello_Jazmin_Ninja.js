class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 75;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Nombre del Ninja: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} tomó sake y ahora tiene una salud de ${this.salud}`);
    }
}

// Acá creamos una instancia de la clase Ninja 
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
