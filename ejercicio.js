// Instrucciones:

//UNO PUEDE COMPARTIR PANTALLA Y LO HACEN ENTRE TODOS 

// Declara una variable strNumber con el valor "1234".
// Declara una variable num con el valor 2024.
// Declara una variable dateStr con el valor "2024-12-31".
// Declara una variable isTrue con el valor true.
// Declara una variable isFalse con el valor false.
// Tareas:
// 1 Convierte strNumber en un número entero y muestra el resultado en la consola.
// 2 Convierte num en una cadena de texto y muestra el resultado en la consola.
// 3 Convierte dateStr en un objeto de tipo Date y muestra el resultado en la consola.
// 4 Convierte el objeto Date anterior en milisegundos desde el 1 de enero de 1970 y muestra el resultado en la consola.
// 5 Convierte isTrue y isFalse en números y muestra ambos resultados en la consola.
// 6 Convierte un número en un booleano y muestra el resultado en la consola.

// https://www.w3schools.com/js/js_type_conversion.asp


// Solucion
let strNumber = "1234";
let num = 2024;
let dateStr = "2024-12-31";
let isTrue = true;
let isFalse = false;

// 1 Convierte strNumber en un número entero y muestra el resultado en la consola.
// let ejercicioUno = parseInt(strNumber)
let ejercicioUno = Number(strNumber)
console.log("ejercicio 1: ", ejercicioUno)

// 2 Convierte num en una cadena de texto y muestra el resultado en la consola.
let ejercicioDos = String(num)
console.log("ejercicio 2: ", ejercicioDos)

// 3 Convierte dateStr en un objeto de tipo Date y muestra el resultado en la consola.

let ejercicioTres = new Date(dateStr)
console.log("ejercicio 3: ", ejercicioTres)

//4 Convierte el objeto Date anterior en milisegundos desde el 1 de enero de 1970 y muestra el resultado en la consola.
let ejercicioCuatro = ejercicioTres.getTime()
console.log("ejercicio 4: ", ejercicioCuatro)

// 5 Convierte isTrue y isFalse en números y muestra ambos resultados en la consola.

console.log("ejercicio 5: ", Number(isTrue), Number(isFalse))

//6 Convierte un número en un booleano y muestra el resultado en la consola.
console.log("ejercicio 6: ", Boolean(5254), Boolean(0))
