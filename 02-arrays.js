/*
  EJERCICIO 1: The Music Playlist (Playlist rotation)
  ---------------------------------------------------
  Contexto: Estás construyendo un reproductor de música.
  La canción actual acaba de terminar y debe pasar al historial de "ya escuchadas",
  pero si al usuario le gusta mucho, la vuelve a poner al final de la fila para escucharla más tarde.

  Instrucciones:
  1. Tienes una playlist (`playlist`) y una canción actual (`currentSong`).
  2. Simula que `currentSong` terminó: agrégala al final de la `playlist`.
  3. Luego, extrae la primera canción de la `playlist` para que sea la nueva `currentSong`.
  4. Muestra por consola: "Now playing: [canción]" y la playlist restante.
*/
let playlist = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California'];
let currentSong = 'Imagine';

// Tu código aquí:

playlist.push(currentSong);
currentSong = playlist.shift();

console.log(`Now playing: ${currentSong} |   Next songs: ${playlist}`);

/*
  EJERCICIO 2: Browser History Navigation
  ---------------------------------------------------
  Contexto: Simulación simple de los botones "Atrás" y "Adelante" del navegador.
  El usuario visita una nueva página, luego decide volver atrás.

  Instrucciones:
  1. El usuario visita "youtube.com": agrégalo al final del `history`.
  2. El usuario se arrepiente y presiona "Atrás": elimina el último sitio visitado.
  3. Muestra por consola el sitio del que salió (el eliminado) y dónde se quedó (el último del arreglo actual).
     *Tip: Para ver dónde se quedó sin borrarlo, puedes acceder al índice [length - 1] o simplemente mostrar el arreglo.*
*/
const history = ['google.com', 'facebook.com', 'twitter.com'];

// Tu código aquí:

history.push('youtube.com');
let deletedWeb = history.pop();

console.log(`Last website: ${deletedWeb}, Current website: ${history.at(-1)}`);

/*
  EJERCICIO 3: Hospital Triage (Priority management)
  ---------------------------------------------------
  Contexto: En una sala de emergencias, los pacientes llegan constantemente.
  Algunos son emergencias críticas (prioridad alta) y otros son consultas generales (prioridad normal).

  Instrucciones:
  1. Llega un paciente con "Flu" (Gripe): agrégalo al final de la fila `patients`.
  2. Llega un paciente con "Heart Attack" (Ataque al corazón): agrégalo al PRINCIPIO de la fila `patients` para que sea atendido de inmediato.
  3. Muestra la lista final de pacientes para verificar el orden.
*/
const patients = ['Broken Leg', 'Headache'];

// Tu código aquí:

patients.push('Flu');
patients.unshift('Heart Attack');

console.log(patients);

/*
  EJERCICIO 4: The Rotating Banner
  ---------------------------------------------------
  Contexto: Tienes un carrusel de imágenes en una web.
  Quieres crear un efecto de "loop" infinito moviendo el primer elemento al final.

  Instrucciones:
  1. Toma la primera imagen del arreglo `bannerImages`.
  2. Inmediatamente, coloca esa misma imagen al final del mismo arreglo.
  3. Muestra el arreglo para ver cómo rotaron las posiciones.
*/
const bannerImages = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

// Tu código aquí:

let firstImage = bannerImages.shift();
bannerImages.push(firstImage);

console.log(bannerImages);

/*
  EJERCICIO 5: Warehouse Transfer (Stack logic)
  ---------------------------------------------------
  Contexto: Tienes una pila de cajas en un camión (`truck`) y debes descargarlas
  en el almacén (`warehouse`). El camión se descarga caja por caja desde la última que entró (LIFO - Last In, First Out).

  Instrucciones:
  1. Saca la última caja del `truck`.
  2. Agrégala al final del arreglo `warehouse`.
  3. Repite el paso 1 y 2 una vez más (mueve una segunda caja).
  4. Muestra cómo quedaron ambos arreglos.
*/
const truck = ['Box A', 'Box B', 'Box C', 'Box D'];
const warehouse = [];

// Tu código aquí:

let lastBox = truck.pop();
warehouse.push(lastBox);

lastBox = truck.pop();
warehouse.push(lastBox);

console.log(truck, warehouse);
