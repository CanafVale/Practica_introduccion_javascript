console.log('Ejercicio 5')

/*El código original es: 

function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
    }, 2000);
    return usuario;
}

const usuario = obtenerUsuario(1);
console.log(usuario); 

*/

// RESOLUCIÓN:
/* Para este ejercicio, he pedido ayuda a chatgpt. He visto la horita de clase del jueves sobre asincronía 3 veces, pero aún así me ha costado. 
He ido "hablando" con chatgpt para entender el error del código y entender mejor cómo funciona la definición de la promesa inicialmente, 
y las dos opciones posteriores de .then()/.catch() y async/await.

Aprovechando que ya he entendido cómo funciona, he decidido hacer el ejercicio con las dos opciones e incluir el control de errores
que proponía chatgpt y que también he entendido ahora.
*/

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe' });
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000);
    });
}

// Usando promesas con .then() y .catch()
obtenerUsuario(1)
    .then(usuario => console.log(usuario))
    .catch(error => console.log(error));

// Usando async/await
async function ejecutar() {
    try {
        const usuario = await obtenerUsuario(1);
        console.log(usuario);
    } catch (error) {
        console.log(error);
    }
}


ejecutar();