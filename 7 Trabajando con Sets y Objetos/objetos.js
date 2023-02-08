// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const datos = {
    nombre: "Jessica",
    apellido: "Oliveros",
    edad: 31,
    altura: 1.63,
    eresDesarrollador: true,
}

let edad = datos.edad 

let lista = [
    {
        ...datos
    },
    {
        nombre: "Gisell",
        apellido: "Munoz",
        edad: 37,
        altura: 1.56,
        eresDesarrollador: false,
    },
    {
        nombre: "Gilberto",
        apellido: "Tirado",
        edad: 33,
        altura: 1.73,
        eresDesarrollador: false,
    }
]

let listaordenada = lista.sort((a, b)=> b.edad - a.edad )

console.log(listaordenada)