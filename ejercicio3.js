console.log('Ejercicio 3')

/* --- Exercise 3.1 --- */
const generatePath = (steps) => {
    const extension = steps[steps.length - 1];
    const path = steps.slice(0, -1).join('/');
    return `${path}.${extension}`;
  };
  
  const pathInputs = [
    ['Downloads', 'Videos', 'capture', 'mp4'],
    ['CodinGame', 'python', 'py'],
    ['programming', 'languages', 'easy', 'beginner', 'useful', 'pythonstuff', 'py'],
  ];
  
  pathInputs.forEach(input => console.log(generatePath(input)));



/* --- Exercise 3.2 --- */

const digitSeparator = number => number.toString().split('').join('-');

const digitInputs = [10, 1, 11234];
digitInputs.forEach(input => console.log(digitSeparator(input)));


/* --- Exercise 3.3 --- */

const reverseWithCount = str => `${str.length} ${str.split('').reverse().join('')}`;

const wordInputs = ['string', 'variable', 'pointer'];
wordInputs.forEach(input => console.log(reverseWithCount(input)));


