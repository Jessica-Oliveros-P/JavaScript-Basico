// - Una cadena de texto con tu Nombre
let nombre = 'Jessica';

// - Otra cadena de texto con tu Apellido
let apellido = 'Oliveros';

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(' ', apellido);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase;

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase;

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudiantenum = estudiante.length;

// - Una variable que contenga la primera letra del Nombre
let estudiante_p_l_nom = nombre.charAt();

// - Otra variable que contenga la última letra del Apellido
let estudiante_u_l_apll = apellido.slice(7,8);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudiantesinespacio = estudiante.replace(' ','');

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let estudiantebool = estudiante.includes(nombre);