//1. Crear una Lista vacía
let listaGenerica = [];

//2. lista de lenguajes de programación llamada "lengugesDeProgramacion
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista
function mostrarLista() {
    console.log(lenguagesDeProgramacion);
}

//5. Crea una función que muestre en la consola todos los elementos de la lista
function listaInversa() {
    console.log(lenguagesDeProgramacion.reverse());
}

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
function CalcularPromedio(listaNumeros) {
    const suma = listaNumeros.reduce((acc, num) => acc + num, 0);
    return suma / listaNumeros.length;
}

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function MaxMin(listaNumeros) {
    const max = Math.max(listaNumeros);
    const min = Math.min(listaNumeros);
    console.log(`El numero Máximo es ${max}, el numero Mínimo es ${min}`);
}

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(listaNumeros) {
    return listaNumeros.reduce((acc, num) => acc + num, 0);
}

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadrarNumeros(listaNumeros) {
    return listaNumeros.map(num => num ** 2);
}

// Ejemplo de uso
mostrarLista(); // Muestra todos los lenguajes
listaInversa(); // Muestra los lenguajes en orden inverso
console.log(CalcularPromedio([1, 2, 3, 4, 5])); // Promedio: 3
MaxMin([1, 2, 3, 4, 5]); // Muestra máximo y mínimo
console.log(sumaLista([1, 2, 3])); // Suma: 6
console.log(encontrarElemento(lenguagesDeProgramacion, 'Python')); // Posición de 'Python'
console.log(sumarListas([1, 2, 3], [4, 5, 6])); // Suma de listas: [5, 7, 9]
console.log(cuadrarNumeros([1, 2, 3])); // Cuadrados: [1, 4, 9]