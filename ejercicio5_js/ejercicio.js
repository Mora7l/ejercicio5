// Población inicial
let p0 = 50; // En millones

// Doble del tiempo
let d = 20;

// Vector de tiempos
let t = [5, 10, 15];

// Calcular la población para cada tiempo en el vector t
for (let i = 0; i < t.length; i++) {
  let poblacion = p0 * Math.pow(2, t[i] / d);
  console.log("Población en " + t[i] + " años: " + poblacion + " millones");
}