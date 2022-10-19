let nombre = "Gabriel";
let apellido = "Velozo";
let estudiante = `"estudiante" ${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase();

let numeroLetras = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length - 1);
let ultimaApellido = apellido.slice(5, 6);
let sinEspacio = estudiante.trim();
let validar = estudiante.includes(nombre);

