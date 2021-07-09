let Tiempo = document.querySelector("#Primero")
let Segundos = 0 

// Uso de Arrow funcion
// setInterval(() => {
//     Segundos++
//     console.log("Segundos",Segundos);
// }, 1000);

// Uso de funciones anonimas
let Intervalo = setInterval(function() {   
    Segundos++
    Tiempo.innerHTML += Segundos
    console.log("Segundos", Segundos);
}, 1000)


// setTimeout(() => {
//     alert("Tiempo cumplido");
// }, 5000);


setTimeout(() => {
    clearInterval(Intervalo)
}, 5000);


