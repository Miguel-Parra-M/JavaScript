// Ejercicio 9

    /*
    && And - Y
    || Or - O
    ! Not - No

    */


    // Condicionales booleanas
    let Sueldo = 500;
    let Sistemas = true;
    let Industrial = false;
    let Buenprofesional= false;

    // and "y" &&
    console.log(Sistemas && Industrial);

    //or "o" ||
    console.log (Sistemas || Industrial); 

    //Not "no" !

    console.log (!Buenprofesional);

    if (Sistemas && Sueldo > 1000) {
        console.log ( " Smart house !!");
    } if (Industrial && Sueldo < 1000 ) {
        console.log ( " Smart house !!!!!!");
    } else {
        console.log ( "Keep studying !!");
    }
