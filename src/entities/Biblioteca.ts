import {LibroImpreso} from "./LibroImpreso";
export class Biblioteca {
    private libros: LibroImpreso[] = []
    agregarLibro(libro: LibroImpreso): LibroImpreso {
        this.libros.push(libro)
        console.log(`libro agregado: ${libro.obtenerResumen()}`)
        return libro
    }
    mostrarCatalogo(): LibroImpreso[] {
        console.log("Catalogo")
        this.libros.forEach((libro)=>{
            console.log(libro.obtenerResumen())
        })
        return this.libros
    }
}