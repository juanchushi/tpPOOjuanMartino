import { Autor} from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/LibroImpreso";

const juan = new Autor("juan", "martino")
const pedro = new Autor("pedro", "niello")

const libro1 = new LibroImpreso("el señor de los anillos", juan)
const libro2 = new LibroImpreso("harry potter", pedro)

const biblioteca = new Biblioteca()
biblioteca.agregarLibro(libro1)
biblioteca.agregarLibro(libro2)

biblioteca.mostrarCatalogo()
