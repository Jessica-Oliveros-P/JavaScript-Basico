// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let fechahoy = new Date()

const fechanacimiento = new Date(1991 , 08, 28)

let mastarde = fechahoy > fechanacimiento

let dia = fechanacimiento.getDay()

let mes = fechanacimiento.getMonth() + 1

let anyo = fechanacimiento.getFullYear()