/*
  EJERCICIO 1: The Leaderboard Fix
  ---------------------------------------------------
  Contexto: Tienes una lista de puntajes altos (nombres).
  Alguien hizo trampa ("Hacker") y se coló en la lista. Además, dos nuevos
  jugadores ("Alice" y "Bob") acaban de entrar al ranking.

  Instrucciones:
  1. Elimina a "Hacker" de la lista (está en el índice 2).
  2. Agrega a "Alice" y "Bob" al final de la lista.
  3. Ordena la lista alfabéticamente para ver quién queda primero.
  4. Muestra la lista final.
*/
const leaderboard = ['Dave', 'Eve', 'Hacker', 'Charlie'];

// Tu código aquí:

leaderboard.splice(2, 1);

leaderboard.push('Alice', 'Bob');

console.log(leaderboard);

/*
  EJERCICIO 2: Task Priority Manager
  ---------------------------------------------------
  Contexto: Tienes una lista de tareas.
  Te das cuenta de que la tarea que está en medio ("Buy Coffee") es
  en realidad la más urgente de todas y debe ir al principio.

  Instrucciones:
  1. Localiza y extrae "Buy Coffee" de la lista (está en el índice 2) usando un método que la elimine y te devuelva el elemento.
  2. Agrega esa misma tarea al inicio de la lista.
  3. Muestra la lista actualizada.
*/
const tasks = ['Write Code', 'Test App', 'Buy Coffee', 'Deploy', 'Sleep'];

// Tu código aquí:

let coffee = tasks.splice(2, 1);
tasks.unshift(coffee[0]);

console.log(tasks);

/*
  EJERCICIO 3: The Broken Sentence
  ---------------------------------------------------
  Contexto: Tienes una frase desordenada en un arreglo.
  La frase debería leerse: "JavaScript is fun".
  Pero actualmente está al revés y tiene una palabra intrusa ("Java").

  Instrucciones:
  1. Elimina la palabra "Java" (está al principio).
  2. Invierte el orden del arreglo para que tenga sentido.
  3. Agrega la palabra "JavaScript" al principio del arreglo.
  4. Muestra la oración final.
*/
const brokenSentence = ['Java', 'fun', 'is'];

// Tu código aquí:

brokenSentence.shift();
brokenSentence.reverse();
brokenSentence.unshift('Javascript');

console.log(brokenSentence);

/*
  EJERCICIO 4: Stock Rotation (FIFO to LIFO)
  ---------------------------------------------------
  Contexto: Tienes productos viejos al frente del estante y nuevos al fondo.
  Quieres invertir completamente el orden del estante, pero antes,
  debes sacar el producto que quedó al frente (el que antes era el último)
  porque está defectuoso.

  Instrucciones:
  1. Invierte el orden del arreglo `shelf`.
  2. Elimina el primer elemento del arreglo invertido (que será "Newest Item").
  3. Agrega "Premium Item" al final del inventario.
  4. Muestra el inventario final.
*/
const shelf = ['Oldest Item', 'Middle Item', 'Newest Item'];

// Tu código aquí:

shelf.reverse();
shelf.shift();
shelf.push('Premium Item');
console.log(shelf);

/*
  EJERCICIO 5: The Card Deck Shuffle (Logic)
  ---------------------------------------------------
  Contexto: Tienes una mano de cartas.
  Quieres descartar la primera y la última carta, y luego
  agregar dos comodines ("Joker") en el centro de la mano.

  Instrucciones:
  1. Elimina la primera carta.
  2. Elimina la última carta.
  3. Agrega dos "Joker" en la posición 1 (donde estaba la segunda carta originalmente).
  4. Muestra tu mano final.
*/
const deck = ['Ace', 'King', 'Queen', 'Jack', '10'];

// Tu código aquí:

deck.shift();
deck.pop();
deck.splice(1, 0, 'Joker', 'Joker');

console.log(deck);
