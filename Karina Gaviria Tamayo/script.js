/* 
1. 
Mutabilidad: Es cuando se tiene la capacidad de cambiar o transformar 
el contenido de una estructura (como un arreglo o un objeto) sin tener
que crear uno nuevo.En palabras simples, es como editar sobre el archivo original: 
el contenedor sigue siendo el mismo, 
pero lo que hay dentro cambia y el estado anterior se pierde.

Métodos de arreglos:
push(): agrega uno o varios elementos al final.

pop(): Elimina el último elemento del arreglo.

unshift(): Agrega uno o mas elementos al inicio del arreglo.

inmutabilidad: Es la propiedad de los datos que prohíbe cualquier modificación o edición
una vez que han sido creados.esto significa que nunca tocas el arreglo original. Si quieres 
agregar algo, creas una copia nueva que incluya ese cambio.

Métodos de arreglos:

map(): Crea un arreglo nuevo con el mismo número de elementos que el original, 
pero con cada valor modificado por una función que tú elijas.

filter(): Crea un arreglo nuevo que contiene únicamente 
los elementos que cumplen una condición.

slice():Crea una copia de una parte del arreglo.

2.
Programación imperativa: Es el paradigma donde el programador redacta una serie de instrucciones
detalladas y secuenciales que la computadora debe seguir paso a paso para llegar a un objetivo. 
Su enfoque principal es el "cómo" resolver el problema: tú controlas manualmente el flujo del programa, 
el cambio de las variables y el estado de los datos.

Programación Declarativa: Es el paradigma que se centra en describir el resultado final deseado, delegando 
los detalles de la ejecución al lenguaje o al sistema. Su enfoque principal es el "qué" se quiere lograr: 
tú defines las condiciones o reglas del resultado, pero no escribes los pasos internos para obtenerlo.

3.
Funciones Declarativas: Las funciones de flecha son preferidas en los métodos de arreglos porque reducen el 
código a su mínima expresión, facilitando la lectura declarativa y evitando problemas de contexto con la
palabra clave this.

4.
Efectos Secundarios(Side Effects): Cuando un método modifica una variable fuera de su alcance, se rompe la
transparencia referencial. Esto genera errores invisibles, hace que el código sea difícil de testear y provoca
que el estado del programa sea inestable.

5. Concepto de busqueda:

Find(): Recorre el arreglo y devuelve el primer elemento que cumpla con una condición que tú le des
(a través de una función). En cuanto encuentra uno que coincide, se detiene y te entrega ese valor.

FindIndex(): Es casi igual al find(), pero en lugar de entregarte el objeto o valor, te dice en qué posición 
(índice) está ubicado dentro del arreglo.

includes: determina si un arreglo contiene un valor específico entre sus elementos. No usa funciones complicadas,
solo le pasas el valor que buscas.

6.
Iteracion -> forEach(): Es un método diseñado para recorrer un arreglo y ejecutar una acción por cada elemento. 
Se utiliza cuando quieres causar un efecto (como imprimir en consola, guardar en una base de datos o modificar una variable externa).

Transformación -> map(): Es un método diseñado para transformar los datos de un arreglo y obtener uno nuevo como resultado. Por cada 
elemento del arreglo original, map() genera un nuevo elemento basado en lo que tú le pidas.

*/

/* Ejercicio 1: Gestión de pilas (Mutable)
/*let herramientas = ["Martillo", "Destornillador"];
//Agregue "Taladro" al final
herramientas.push("Taladro");
///agregue "Sierra" al inicio
herramientas.unshift("Sierra");
//luego elimine el ultimo elemento
herramientas.pop("Taladro");
console.log(herramientas);
/*

/*Ejercicio 2: Modificación de índice (Mutable) 
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
//insertar "Naranja" en la posición 1
colores.splice(1, 0, "Naranja");
//reemplazar "Azul" por "Morado"
colores.splice(3, 1, "Morado");
console.log(colores);*/

/* Ejercicio 3: Transformación Declarativa (inmutable)
const temperaturas = [15, 20, 25, 30];
//Cree un arreglo fahrenheit usando map con la fórmula (C* 9/5) + 32.
const fahrenheit = temperaturas.map((c) => (c * 9) / 5 + 32);
console.log(fahrenheit);/*

/* Ejercicio 4: Filtrado Selectivo (inmutable)
const inventario = [5, 12, 8, 130, 44];
//cree un arreglo grandesValores con los numeros mayores a 10 usando filter
const grandesValores = inventario.filter((num) => num > 10);
console.log(grandesValores);*/

/* Ejercicio 5: Acumulacion de Datos (inmutable) 
const ventas = [100, 250, 150, 400];
//obtenga el total de ventas usando el metodo reduce
const totalVentas = ventas.reduce((acumulador, valorActual) => acumulador + valorActual,0);
// el 0 al final indica el valor inicial del acumulador
console.log(totalVentas);*/

/* Ejercicio 6: Ordenamiento Alfabético (mutable) 
let nombres = ["Zulma", "Andres", "Bernardo", "Carlos"];
//Ordene el arreglo alfabéticamente usando sort
nombres.sort();
console.log(nombres);/*

/* Ejercicio 7: inversión de datos (mutable) 
let orden = [1, 2, 3, 4, 5];
//invierta la posición de los elementos usando reverse
orden.reverse();
console.log(orden);/*


/* Ejercicio 8: Búsqueda de valor (Declarativo)
const invitados = ["Juan", "Maria", "Pedro", "Luisa"];
//use find para retornar el nombre "Pedro" si existe en la lista
const invitadoEncontrado = invitados.find((nombre) => nombre === "Pedro");
console.log(invitadoEncontrado);/*


/* Ejecicio 9: Localización de índice (Declarativo)
const precios = [45, 12, 89, 34];
//use findIndex para encontrar la posición del valor 89
const indice = precios.findIndex((precio) => precio === 89);
console.log(indice);/*

/* Ejercicio 10: Comprobación de Existencia (inmutable)
const cursos = ["git", "React", "Node"];
//Use includes para verificar si "JavaScript" se encuentra en el listado
const tieneJS = cursos.includes("JavaScript");
console.log(tieneJS);/*

/* Ejercicio 11: Validación total (Declarativo) */
const edades = [20, 25, 19, 30];
//Verifique si todos los elementos son mayores o iguales a 18 usando every
const todosAdultos = edades.every((edad) => edad >= 18);
console.log(todosAdultos);
