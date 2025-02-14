"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.libros = [];
    }
    agregarLibro(libro) {
        this.libros.push(libro);
        console.log(`libro agregado a la biblioteca: ${libro.obtenerResumen}`);
        return libro;
    }
    mostrarCatalogo() {
        console.log("Catalogo de la Biblioteca");
        this.libros.forEach((libro) => {
            console.log(libro.obtenerResumen);
        });
        return this.libros;
    }
}
exports.Biblioteca = Biblioteca;
