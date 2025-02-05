console.log('Ejercicio 4')

/*
Ejercicio 4 Transformaciones con map y filter

Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente información. El listado de los desarrolladores que tengan como habilidad “JavaScript” y el
listado de los proyectos en el que sus desarrolladores trabajan.

Estos son los datos:

const datos = [
{
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
        { id:1, nombre:'Proyecto 1' },
        { id:2, nombre:'Proyecto 2' } 
    ]
},
{
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
        { id:3, nombre:'Proyecto 3' },
        { id:4, nombre:'Proyecto 4' } 
    ]
},
{
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
        { id:5, nombre:'Proyecto 5' },
        { id:6, nombre:'Proyecto 6' } 
    ]
}
];

Tenemos que hacer las operaciones necesarias para obtener estos 2 listados

desarrolladoresJavascript

[
{
    "id": 1,
    "nombre": "Juan",
    "habilidades": ["JavaScript", "HTML", "CSS",
    "proyectos": [
        { "id": 1, "nombre": "Proyecto 1" },
        { "id": 2, "nombre": "Proyecto 2" }
    ],
}
]

nombresProyectos
['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6']

*/

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id:1, nombre:'Proyecto 1' },
            { id:2, nombre:'Proyecto 2' } 
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id:3, nombre:'Proyecto 3' },
            { id:4, nombre:'Proyecto 4' } 
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id:5, nombre:'Proyecto 5' },
            { id:6, nombre:'Proyecto 6' } 
        ]
    }
    ];
    
console.log(datos);
//Para obtener el primer listado debemos hacer un FILTER:

const desarrolladoresJavascript = (datos) => {
    return datos.filter(desarrollador => desarrollador.habilidades.includes('JavaScript'));
}

// Pero esa función solo serviría para obtener el listado de desarrolladores que tengan como habilidad JavaScript. La generalizamos para que tome la habilidad como parámetro:

const desarrolladoresPorHabilidad = (datos, habilidad) => datos.filter(dev => dev.habilidades.includes(habilidad));

console.log(desarrolladoresPorHabilidad(datos, 'JavaScript'));

// Ahora queremos el listado de proyectos:

const nombresProyectos = (datos) => datos.flatMap(desarrollador => desarrollador.proyectos.map(proyecto => proyecto.nombre));
console.log(nombresProyectos(datos));

