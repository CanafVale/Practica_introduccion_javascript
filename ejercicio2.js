

/*
Ejercicio 2 Arreglar bug

Nuestro cliente está intentando calcular el promedio de una lista de números pero nos dice que no funciona. No nos da el error, solo este código que es el que tiene en producción.
Para este ejercicio tenemos que crear un archivo llamado bug.js con la solución.

const calcularPromedio = (numconsole.log('Ejercicio 2')eros) => {
    let sumaTotal = 0;

    for (let i = 0; i <= numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

*/

/* Al ejecutar el código del enunciado, el resultado es NaN. 
Esto se debe a que en el bucle for, la condición es i <= numeros.length, y debería ser i < numeros.length.

Si ponemos i <= numeros.length, en la última iteración, i será igual a la longitud del array, y al intentar acceder a la posición i del array, nos dará undefined.
Y al sumar undefined a sumaTotal, el resultado será NaN.

Corregimos el bug.
*/

const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log(promedioNumeros);
