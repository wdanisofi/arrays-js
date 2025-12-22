/*
  EJERCICIO 1: Organización Alfabética (sort)
  ---------------------------------------------------
  Contexto: Tienes una lista desordenada de estudiantes.
  Necesitas organizarlos alfabéticamente para la lista de asistencia.

  Instrucciones:
  1. Ordena el arreglo `students` alfabéticamente (A-Z).
  2. Muestra la lista ordenada por consola.
*/
const students = ['Mario', 'Luigi', 'Peach', 'Toad', 'Bowser'];

students.sort();

console.log(students);

// Tu código aquí:

/*
  EJERCICIO 2: Cuenta Regresiva (reverse)
  ---------------------------------------------------
  Contexto: Un sistema generó los números para el despegue de un cohete,
  pero los puso en orden ascendente (1, 2, 3...) y los necesitas en cuenta regresiva.

  Instrucciones:
  1. Invierte el orden del arreglo `countdown`.
  2. Muestra el resultado por consola.
*/
const countdown = [1, 2, 3, 4, 5];

// Tu código aquí:

countdown.reverse();

console.log(countdown);
/*
  EJERCICIO 3: Corrección de Ingredientes (splice - reemplazar)
  ---------------------------------------------------
  Contexto: Estás haciendo una receta de pastel, pero te diste cuenta
  de que agregaste "Sal" en lugar de "Azúcar". La sal está en medio de la lista.

  Instrucciones:
  1. Usa `splice` para eliminar "Salt" y agregar "Sugar" en su lugar.
     (Nota: "Salt" está en el índice 2).
  2. Muestra el arreglo corregido.
*/
const ingredients = ['Flour', 'Eggs', 'Salt', 'Milk', 'Butter'];

// Tu código aquí:

ingredients.splice(2, 1, 'Sugar');

console.log(ingredients);

/*
  EJERCICIO 4: Limpieza de Virus (splice - eliminar)
  ---------------------------------------------------
  Contexto: Tu antivirus detectó archivos maliciosos en una lista de descargas.
  Los archivos malos están agrupados en el medio.

  Instrucciones:
  1. Tienes que eliminar 'Virus.exe' y 'Malware.dll' del arreglo.
  2. Usa `splice` para borrar esos 2 elementos de una sola vez.
  3. Muestra el arreglo limpio.
*/
const downloads = [
  'Report.pdf',
  'Image.png',
  'Virus.exe',
  'Malware.dll',
  'Music.mp3',
];

// Tu código aquí:

downloads.splice(2, 2);

console.log(downloads);
