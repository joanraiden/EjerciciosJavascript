// Definimos dos variables numéricas
let n1 = parseFloat(prompt("Digita el 1er numero"));
let n2 = parseFloat(prompt("Digita el 2do numero"));

// Usamos una estructura if para comparar las variables
if (n1 > n2) {
    //en base al primer requisito del ejercicio, se crea un primer if que compara si el primer numero es mayor al segundo
    console.log(`${n1} es mayor que ${n2}`);
} else if (n1 == n2) {
    //para cumplir con el segundo requisito, se crea un segundo if para comparar si son iguales
    console.log(`${n1} y ${n2} son iguales`);
} else {
    //en caso de no cumplir ninguna de las condiciones, se entiende que el primer numero es menor al segundo
    console.log(`${n2} es mayor que ${n1}`);
}