console.log('Ejercicio 1')

/*
Ejercicio 1
Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en búsqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del objeto que hemos creado anteriormente
*/

const usuario = {
    nombre: 'Ana Belén',
    apellidos: 'Fernández Martínez',
    temas: {
        'Node.js': '2025-03-10',//pongo entre comillas por la extensión
        'Git': '2025-01-20', //como no hay módulo en sí, pongo el día del kick off
        'react': '2025-05-12'
    },
    busquedaActiva: true

};

//console.log(usuario);

console.log(usuario.temas.react);
