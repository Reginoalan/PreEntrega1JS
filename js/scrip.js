let alumnoMax = null;
let promedioMax = 0;
let sumatoriaPromedios = 0;
let totalDeAlumnos = 0;

alert("Bienvenidos a la calculadora de promedios de la escuela. Aquí podras calcular el promedio general de tu curso y a su vez guardara el mejor promedio. Para comenzar la carga ingrese el nombre del alumno seguido del promedio, para terminar la carga solo debe ingresar zzz en el nombre del alumno ");

let alumnoAct = prompt("Ingrese el nombre del alumno: ");
while (alumnoAct != "zzz") {
    let promedioAct = parseFloat(prompt("Ingrese el promedio del alumno " + alumnoAct + ": "));
    totalDeAlumnos = totalDeAlumnos + 1;
    sumatoriaPromedios = sumatoriaPromedios + promedioAct;
    if (promedioMax < promedioAct) {
        alumnoMax = alumnoAct;
        promedioMax = promedioAct;
    }
    alumnoAct = prompt("Ingrese el nombre del alumno: ");
}
promedioTotal = parseFloat(sumatoriaPromedios / totalDeAlumnos);
if (alumnoMax != null) {
    console.log("Se a finalizado la carga de alumnos! A contiuacion estan los resultados.");
    console.log("Promedio total de la clase: " + promedioTotal);
    console.log("Alumno con mayor promedio de la cursada: " + alumnoMax);
    console.log();
} else console.log("No se ha cargado ningun alumno.");