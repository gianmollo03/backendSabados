class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    const nombreCompleto = this.nombre + " " + this.apellido;
    console.log(nombreCompleto);
  }
  addMascota() {
    let nuevaMascota = prompt("Ingrese el nombre de la nueva mascota");
    this.mascotas.push(nuevaMascota);
    console.log("Las mascotas actuales son:");
    for (const mascota of this.mascotas) {
      console.log(mascota);
    }
  }
  addBook() {
    const nuevoLibroNombre = prompt("Ingrese el nombre del libro nuevo");
    const nuevoLibroAutor = prompt("Ingrese el autor de este libro");
    const nuevoLibro = { nombre: nuevoLibroNombre, autor: nuevoLibroAutor };
    console.log("El libro que ingreso es: ", nuevoLibro);
    this.libros.push(nuevoLibro);
  }
  countMascotas() {
    let C = 0;
    for (const mascota in this.mascotas) {
      C++;
    }
    console.log("Tiene ", C, " mascotas");
  }
  getBookNames() {
    for (const libro of this.libros) {
      console.log(libro.nombre);
    }
  }
}

const Usuario1 = new Usuario(
  "Gianluca",
  "Mollo Rivas",
  [{ nombre: "Mariano y el perro", Autor: "Mariano Costa" }],
  ["Bolt", "Sasha"]
);
Usuario1.getFullName();
Usuario1.getBookNames();
Usuario1.addBook();
Usuario1.addMascota();
Usuario1.countMascotas();
