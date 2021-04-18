// Ejercicio 13

// Ciclo For
let I,J,Tc;
        
for ( I = 0; I <= 10; I++) {
    
    for (J=0; J<=10; J++) {
        
        Tc = I * J;
        console.log( I + " x " + J + " = " + Tc);

    }

    console.log("  ")
}


//  Ciclo For...in
// Mostrara iterar sobre todas las propiedades del objeto

for (const a in navigator) {
    document.write ("navigator." + a + "="+ navigator[a] + "<br>");
}

document.write("<br> <br>");

for (const b in screen) {
    document.write ("screen." + b + "="+ screen[b] + "<br>");
}

document.write("<br> <br>");

for (const j in window) {
    document.write ("window." + j + "="+ window[j] + "<br>");
}

document.write("<br> <br>");

for (const i in document) {
    document.write ("document." + i + "="+ document[i] + "<br>");
}

document.write("<br> <br>");

for (const c in history) {
    document.write ("history." + c + "="+ history[c] + "<br>");
}

document.write("<br> <br>");

for (const d in location) {
    document.write ("location." + d + "="+ location[d] + "<br>");
}

// Ciclo For...of
var Numero1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const h of Numero1) {
    console.log (Numero1[h]);
}


// Ciclo forEach
var Numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Numero.forEach(Num => {
    
    console.log(Num);
    
});

