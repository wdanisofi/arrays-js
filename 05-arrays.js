// // Estilo clásico
// const dobles = numeros.map(function (num) {
//   return num * 2;
// });

// // Estilo moderno (Arrow Function)
// const dobles1 = numeros.map(num => num * 2);

/*
  EJERCICIO 1: Conversor de Moneda (map)
  ---------------------------------------------------
  Contexto: Tienes una lista de precios en dólares (USD).
  Tu tienda va a abrir en Europa y necesitas una lista nueva con los precios
  convertidos a Euros (EUR). Asume que 1 USD = 0.85 EUR.

  Instrucciones:
  1. Crea un nuevo arreglo llamado `pricesInEur` usando `.map()`.
  2. Multiplica cada precio por 0.85.
  3. Muestra por consola ambos arreglos (el original y el nuevo) para confirmar que el original no cambió.
*/
const pricesInUsd = [100, 50, 200, 30];

// Tu código aquí:
let pricesInEur = pricesInUsd.map(price => price * 0.85);

console.log(pricesInEur);

/*
  EJERCICIO 2: Filtro de Admisión (filter)
  ---------------------------------------------------
  Contexto: Estás gestionando la entrada a una película clasificada "R" (para mayores de 18 años).
  Tienes una lista de las edades de las personas en la fila.

  Instrucciones:
  1. Crea un nuevo arreglo llamado `adults` usando `.filter()`.
  2. La condición debe ser: mantener solo las edades mayores o iguales a 18.
  3. Muestra por consola el arreglo `adults`.
*/
const ages = [15, 22, 12, 18, 30, 17];

// Tu código aquí:

let adults = ages.filter(age => age >= 18);

console.log(adults);

/*
  EJERCICIO 3: Etiquetas de Productos (map)
  ---------------------------------------------------
  Contexto: Tienes una lista de nombres de productos en minúsculas.
  Necesitas generar etiquetas para la estantería, y deben estar todas en MAYÚSCULAS.

  Instrucciones:
  1. Crea un nuevo arreglo `productLabels` usando `.map()`.
  2. Convierte cada producto a mayúsculas (puedes usar el método `.toUpperCase()` de los strings).
  3. Muestra las etiquetas finales.
*/
const products = ['mouse', 'keyboard', 'monitor', 'usb'];

// Tu código aquí:

let productLabels = products.map(product => product.toUpperCase());

console.log(productLabels);

/*
  EJERCICIO 4: Ofertas Especiales (filter + map)
  ---------------------------------------------------
  Contexto: Tienes una lista de precios. Quieres identificar los productos baratos
  (menos de 50) y formatearlos con un signo de dinero para un folleto.

  Instrucciones:
  1. Primero, filtra los precios para quedarte solo con los que valen menos de 50.
  2. Luego, a esos resultados, transformalos en strings agregando un "$" al principio (ej: "$20").
  3. Guarda el resultado final en `cheapOffers` y muéstralo.
  
  *Tip: Puedes hacerlo en dos pasos o encadenar los métodos (.filter().map()).*
*/
const catalogPrices = [10, 120, 35, 80, 5];

// Tu código aquí:

let cheapItems = catalogPrices
  .filter(price => price < 50)
  .map(price => `$${price}`);

console.log(cheapItems);
