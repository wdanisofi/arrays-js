/*
  EJERCICIO 1: La fila del banco (shift)
  ---------------------------------------------------
  Contexto: Tienes una fila de clientes esperando.
  Debes atender al cliente que llegó primero.

  Instrucciones:
  1. Usa el método adecuado para extraer al primer cliente de la lista.
  2. Guarda el nombre del cliente atendido en una variable llamada 'clienteAtendido'.
  3. Muestra por consola tanto el cliente atendido como el estado actual de la fila.
*/
const filaBanco = ['Ana', 'Beto', 'Carla', 'Daniel'];

// Tu código aquí:

let clienteAtendido = filaBanco.shift();

console.log(
  `Cliente atendido: ${clienteAtendido}, Fila de clientes esperando: ${filaBanco} `
);

/*
  EJERCICIO 2: Inventario de almacén (push)
  ---------------------------------------------------
  Contexto: Llegas con mercadería nueva al almacén.
  Debes agregar un producto al final del inventario existente.

  Instrucciones:
  1. Agrega el producto "Monitor" al final del arreglo 'inventario'.
  2. Muestra por consola el arreglo actualizado.
  3. (Opcional) Muestra por consola lo que devuelve el método que usaste (debería ser la nueva longitud del arreglo).
*/
const inventario = ['Teclado', 'Mouse', 'Laptop'];

// Tu código aquí:

inventario.push('Monitor');
console.log(inventario);

console.log(inventario.length);

/*
  EJERCICIO 3: Noticias de última hora (unshift)
  ---------------------------------------------------
  Contexto: Gestionas un feed de noticias.
  Ha ocurrido un evento urgente y debe aparecer al principio de todo.

  Instrucciones:
  1. Agrega la noticia "¡URGENTE! Se descubre nuevo planeta" al inicio del arreglo.
  2. Muestra por consola el arreglo actualizado.
*/
const noticias = [
  'El clima estará soleado',
  'Resultados de fútbol',
  'Recetas de cocina',
];

// Tu código aquí:

noticias.unshift('¡URGENTE! Se descubre nuevo planeta');
console.log(noticias);

/*
  EJERCICIO 4: Deshacer acción (pop)
  ---------------------------------------------------
  Contexto: Estás creando una funcionalidad de "Deshacer" (Ctrl+Z).
  El usuario quiere eliminar la última acción que realizó.

  Instrucciones:
  1. Elimina la última acción registrada en el historial.
  2. Guarda esa acción eliminada en una variable llamada 'accionDeshacida'.
  3. Muestra por consola la acción que se eliminó y cómo quedó el historial.
*/
const historialAcciones = [
  'Abrir archivo',
  'Escribir texto',
  'Negrita',
  'Guardar',
];

// Tu código aquí:

let accionDeshacida = historialAcciones.pop();

console.log(accionDeshacida, historialAcciones);
