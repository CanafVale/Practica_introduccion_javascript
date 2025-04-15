console.log('Ejercicio 1')

const user = {
    name: 'Ana Belén',
    lastName: 'Fernández Martínez',
    topics: 
    [
        {
          name: 'NodeJS',
          date: '2025-03-10',
        },
        {
          name: 'Git',
          date: '2025-01-20', 
        },
        {
          name: 'React',
          date: '2025-05-12',
        },
      ],
      activeSearch: false,
    };

console.log("Inicio React:", user.topics[2].date);
