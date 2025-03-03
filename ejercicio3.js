console.log('Ejercicio 3')

/* 
**Ejercicio 3**
En estos ejercicios no tienes acceso al enunciado. Debes deducir qué hacer observando los
datos de entrada y el resultado:

**EJERCICIO 3.1**

Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/

//Datos de entrada:
const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]
const input2 = [
    'CodinGame',
    'python',
    'py',
    ];
const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ];

// Función:
// create your function here
const generatePath = (steps) => {
    const extension = steps[steps.length - 1];
    const path = steps.slice(0, steps.length - 1).join('/');
    return `${path}.${extension}`;
}

// Probacmos la función:

const test1 = generatePath(input1); // 'Downloads/Videos/capture.mp4'
const test2 = generatePath(input2); // 'CodinGame/python.py'
const test3 = generatePath(input3); // 'programming/languages/easy/beginner/useful/pythonstuff.py'
    
console.log(test1);
console.log(test2);
console.log(test3);

// Refactorizamos el código del test para que sea más sencillo:

const testInputs = [
    ['Downloads', 'Videos', 'capture', 'mp4'],
    ['CodinGame', 'python', 'py'],
    ['programming', 'languages', 'easy', 'beginner', 'useful', 'pythonstuff', 'py']
];

testInputs.forEach(input => console.log(generatePath(input)));






/*
**EJERCICIO 3.2**

Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:

const input = 10;

// create your function here

yourFunction(input); // '1-0'

const secondInput = 1;
yourFunction(Input); // '1'

const thirdInput = 11234;
yourFunction(Input); // '1-1-2-3-4'

*/ 

// Vemos que separa dígitos con guiones. Lo que retorna es un string.

const firstinput = 10;
const secondInput = 1;
const thirdInput = 11234;

const separadorDigitosInicial = (numero) => {
    const digitos = numero.toString().split('');
    return digitos.join('-');
}

console.log(separadorDigitosInicial(firstinput)); // '1-0'
console.log(separadorDigitosInicial(secondInput)); // '1-0'
console.log(separadorDigitosInicial(thirdInput)); // '1-0'


//Refactorizado y con el test con el forEach:
const separadorDigitos = numero => numero.toString().split('').join('-');

const ejercicio3Parte2Inputs = [10, 1, 11234];

ejercicio3Parte2Inputs.forEach(input => console.log(separadorDigitos(input)));



/*
**EJERCICIO 3.3**

Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:

const input = 'string';

// create your function here

yourFunction(input); // '6 gnirts'

const input2 = 'variable';
yourFunction(input2); // '8 elbairav'

const input2 = 'pointer';
yourFunction(input2); // '7 retniop'

*/ 

// Vemos que invierte la palabra y añade el número de caracteres al principio. Lo que retorna es un string.

const conteoInversoInicial = (string) => {
    const conteo = string.length;
    const stringInvertido = string.split('').reverse().join('');
    return conteo + ' ' + stringInvertido;
}

const pruebaInverso1 = 'string';
const pruebaInverso2 = 'variable';
const pruebaInverso3 = 'pointer';

let result = conteoInversoInicial(pruebaInverso1); 
console.log(result);

// Refactorizamos:

const conteo_inverso = string => string.length + ' ' + string.split('').reverse().join('');
const ejercicio3Parte3Inputs = [pruebaInverso1, pruebaInverso2, pruebaInverso3];

ejercicio3Parte3Inputs.forEach(input => console.log(conteo_inverso(input)));


