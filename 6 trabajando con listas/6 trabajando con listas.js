//Crea un archivo JS que contenga las siguientes líneas
// Una variable que contenga la lista de la compra (mínimo 5 elementos)

let listadecompra = ["sal", "azucar", "cafe", "arroz", "mantequilla"]

//Modifica la lista de la compra y añádele "Aceite de Girasol"

listadecompra.push("Aceite de Girasol")

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listadecompra.pop()

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const movies = [
    { titulo: "About Time", Director: "Richard Curtis", fecha: new Date(2013, 8 ,8)},
    { titulo: 'El juego de Ender', Director: 'Orson Scott Card', fecha: new Date(2013, 11 ,1)},
    { titulo: "One Day", Director: "Lone Scherfig", fecha: new Date(2011, 8 ,8)}
            ]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const listapostene = movies.filter( obj => obj.fecha > new Date(2010, 1, 1) )

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

let listadirectores = movies.map(obj => obj.Director)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

let listatitulos = movies.map(obj => obj.titulo)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat) 

const listaconcat = listadirectores.concat(listatitulos) 
console.log (listaconcat)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listapropagacion = [...listadirectores, ...listatitulos]
console.log (listapropagacion)