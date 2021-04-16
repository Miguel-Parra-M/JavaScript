// Ejercicio 8

// Operadores de comparación

// < Menor que
// > Mayor que
// <= Menor igual que
// >= Mayor igual que
// == Igual que
// === Estrictamente igual (compara hasta el tipo de dato)
// != Distinto que
// !== Estrictamente distinto (compara hasta el tipo de dato)

let a=6;
let b=3;
let Nom="Miguel";

if (b<a) {
    console.log(" B es menor que A");            
}
if (a>b) {
    console.log(" A es mayor que B");
}
if (a<=6) {
    console.log(" A es menor o igual que 6");
}
if (b>=3) {
    console.log(" B es mayor o igual que 3");
}
if (a == 6.0) {
    console.log(" A es igual a 3.0");          
}
if (b === 3) {
    console.log(" B es estrictamente igual a 3");
}
if (a != b){
    console.log(" A es diferente a B");
}
if (a !== b) {
    console.log(" A es estrictamete diferente que B");
}


// Operador ternario
const Mayor = (a, b) => (a > b) ? a : b

console.log(Mayor(10 ,20));

