// Ejercicio 10

// Operadores unitarios

// Delete -> Elimina una propiedad de un objeto

// Creando un objeto literal
var Persona = {
    
    Nombre: "Miguel",
    Apellido: "Parra",
    Edad: 20
};
// Mostrando el objeto
console.log(Persona);

// Elimando el objeto
delete Persona.Nombre;
// Mostrando si se elimino el objeto
console.log(Persona.Nombre);



//Tyoeof -> Determina el tipo de dato de un objeto
var Num = 9,
    Flo = 8.63,
    Cade = "Miguel";

console.log (typeof Num);
console.log (typeof Flo);
console.log (typeof Cade);
console.log (typeof Persona);


// Void -> Descarta el valor de retorno de una expresión

{/* <a href="javascript:void(0)">Haz click aquí para no hacer nada</a>
<a href="javascript:void(document.form.submit())"> Haz click para enviar</a> */}


