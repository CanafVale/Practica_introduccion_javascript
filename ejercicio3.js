// EJERCICIO 3.1

/*
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]

    // create your function here
    //yourFunction(input1); // 'Downloads/Videos/capture.mp4'
const transform = (listado) => {
    return listado.join('/');
}

transform(input1);
console.log(transform(input1)); //falta la parte del punto, y no es con replace, pero ya está

// directamente podríamos probar ya la función con input2, porque debería ser la misma función
const input2 = [
    'CodinGame',
    'python',
    'py',
    ];

    yourFunction(input2); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]

    yourFunction(input3);
    // 'programming/languages/easy/beginner/useful/pythonstuff.py'
    





