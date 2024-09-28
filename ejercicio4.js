// se declara la variable continuar en true para que pueda entrar al ciclo while
let continuar = true;

// se crea un ciclo while que permita le permita al usuario hacer las operaciones que desee
while (continuar) {
    // Pedir al usuario dos números
    let n1 = parseFloat(prompt("Digita el 1er numero"));
    let n2 = parseFloat(prompt("Digita el 2do numero"));

    // Preguntaque operacion quiere realizar
    let op = prompt("Que operacion quieres realizar: \n1. suma \n2. resta \n3. multiplicacion \n4. division");

    //se declara la variable para almacenar el resultado
    let resul;

    // condicionales if que realizan la operacion elegida
    if (op === "1") {
        resul = n1 + n2;
    } else if (op === "2") {
        resul = n1 - n2;
    } else if (op === "3") {
        resul = n1 * n2;
    } else if (op === "4") {
        //se valida si el segundo numero es diferente de cero, para realizar la division
        if (n2 !== 0) {
            resul = n1 / n2;
        } else {
            resul = "No se puede dividir entre cero";
        }
    } else {
        //se realiza la validacion en caso de que no escoja una opcion valida
        resul = "Opcion no valida";
    }

    // Muestra el resultado en la consola
    console.log(`El resultado es: ${resul}`);

    // Pregunta si desea realizar otra operacion
    let respuesta = prompt("Quieres hacer otra operacion? si o no");
    if (respuesta.toLowerCase() !== "si") {
        continuar = false;
    }
}