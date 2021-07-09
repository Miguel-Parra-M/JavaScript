let numeroAleatorio = document.querySelector("#numeroAleatorio")
let numero = 0 


// numero = Math.floor(Math.random() * 100)
numero = Math.ceil(Math.random() * 100)
 
// Math.random -> Permite objetener un numero randomico en decimales.
// Math.floor -> Permite trucanr los decimales que se le pasan por parametros.
// Math.ceil -> Permite redondear hacia arriba del decimal
// Math.round -> Permite redondear hacia su numero entero mas proximo  

numeroAleatorio.innerHTML = numero





