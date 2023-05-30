//Ejercicio 1

function calcularSalario() {
  let horas = document.getElementById("horas").value;
  let tarifa = document.getElementById("tarifa").value;

  if (horas > 40) {
    let horasExtras = horas - 40;
    let tarifaExtra = tarifa * 1.5;
    let salario = 40 * tarifa + horasExtras * tarifaExtra;
    document.getElementById("resultado").innerHTML =
      "El salario del trabajador es $ " + salario.toFixed(2);
  } else {
    let salario = horas * tarifa;
    document.getElementById("resultado").innerHTML =
      "El salario del trabajador es $ " + salario.toFixed(2);
  }
}

//Ejercicio 2

function calcularSueldoNeto() {
  let sueldo = parseFloat(document.getElementById("sueldo").value);

  let descuento = 0;
  let sueldoNeto = 0;

  if (sueldo <= 1000) {
    descuento = sueldo * 0.1;
  } else if (sueldo <= 2000) {
    let adicional = sueldo - 1000;
    descuento = 1000 * 0.1 + adicional * 0.05;
  } else {
    let adicional = sueldo - 2000;
    descuento = 1000 * 0.1 + 1000 * 0.05 + adicional * 0.03;
  }

  sueldoNeto = sueldo - descuento;

  let elementoDescuento = document.getElementById("descuento");
  elementoDescuento.textContent = "Descuento: $" + descuento.toFixed(2);

  let elementoSueldoNeto = document.getElementById("sueldoNeto");
  elementoSueldoNeto.textContent = "Sueldo neto: $" + sueldoNeto.toFixed(2);
}

// Ejercicio 3

function cantidadDescuento() {
  let cantidad1 = document.getElementById("cantidad").value;
  let descuento1;
  if (cantidad1 > 100) {
    descuento1 = cantidad1 * 0.1;
  } else {
    descuento1 = cantidad1 * 0.02;
  }
  document.getElementById("resultado1").textContent =
    "La cantidad es : " + cantidad1 + " y el descuento es : " + descuento1;
}

// Ejercicio 4

function calcularSegundos() {
  let S = document.getElementById("segundos").value;
  let M = Math.floor(S / 60); //Metodo para redondear un numero al entero mas sercano
  let sR = S / 60;
  document.getElementById("resultado3").innerHTML =
    "Minutos: " + M + " , segundos restantes: " + sR;
}

// Ejercicio 5

function calcular() {
  let dias, horas, minutos, tiempoEnMinutos;
  tiempoEnMinutos = parseInt(document.formulario1.tiempoEnMinutos.value);
  minutos = tiempoEnMinutos % 60;
  horas = (tiempoEnMinutos - minutos) / 60;
  dias = (horas - (horas % 24)) / 24;
  horas = horas % 24;

  document.getElementById("r1").innerHTML =
    dias + " días " + horas + " horas " + minutos + " minutos";
}

// Ejercicio 6
function calcularSalario1() {
  let horasTrabajadas = document.getElementById("horasTrabajadas").value;
  let tarifaDePago = document.getElementById("tarifaDePago").value;
  let salario = horasTrabajadas * tarifaDePago;
  document.getElementById("salario").innerHTML = "El salario es: " + salario;
}
//Ejercicio 7

function calcularFactura() {
  let precioVenta = parseFloat(document.getElementById("precioVenta").value);
  let canti = parseInt(document.getElementById("canti").value);
  let descuento3 = parseFloat(document.getElementById("descuento3").value);

  let precioNeto = precioVenta * canti;
  let iva = precioNeto * 0.15;

  if (precioNeto + iva > 50.00) {
      descuento3 = precioNeto * 0.05;
  }

  let precioVentaMasIva = precioNeto + iva - descuento3;

  document.getElementById("precioNeto").innerHTML = "Precio neto: " + precioNeto.toFixed(2);
  document.getElementById("iva").innerHTML = "IVA: " + iva.toFixed(2);
  document.getElementById("descuentoAplicado").innerHTML = "Descuento aplicado: " + descuento3.toFixed(2);
  document.getElementById("precioVentaMasIva").innerHTML = "Precio venta más IVA: " + precioVentaMasIva.toFixed(2);
}

//Ejercicio 8
function mostrarMensaje() {
  let edad = document.getElementById("edad").value;

  if (edad >= 0 && edad <= 10) {
    document.getElementById("mensaje").innerHTML = "Niño";
  } else if (edad >= 11 && edad <= 14) {
    document.getElementById("mensaje").innerHTML = "Púber";
  } else if (edad >= 15 && edad <= 18) {
    document.getElementById("mensaje").innerHTML = "Adolescente";
  } else if (edad >= 19 && edad <= 25) {
    document.getElementById("mensaje").innerHTML = "Joven";
  } else if (edad >= 26 && edad <= 65) {
    document.getElementById("mensaje").innerHTML = "Adulto";
  } else if (edad > 65) {
    document.getElementById("mensaje").innerHTML = "Anciano";
  }
}
//Ejercicio 9
function mostrarPrograma() {
  // Obtener el elemento HTML donde se mostrará la programación
  let hora = document.getElementById("hora").value;
  let programacion = document.getElementById("programacion");

  // Determinar qué programa se está transmitiendo en este momento
  if (hora >= 10 && hora < 12) {
    programacion.innerHTML = "Dibujos animados";
  } else if (hora >= 13 && hora < 16) {
    programacion.innerHTML = "Tele Serie";
  } else if (hora >= 16 && hora < 18) {
    programacion.innerHTML = "Novelas Repetidas";
  } else if (hora >= 18 && hora < 22) {
    programacion.innerHTML = "Dibujos animados";
  } else if (hora >= 22 && hora <= 23) {
    programacion.innerHTML = "Noticiero";
  } else {
    programacion.innerHTML = "No hay programación disponible en este momento.";
  }
}

//Ejercicio 10
function determinarTriangulo() {
  let lado1 = parseFloat(document.getElementById("lado1").value);
  let lado2 = parseFloat(document.getElementById("lado2").value);
  let lado3 = parseFloat(document.getElementById("lado3").value);

  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
      if (lado1 == lado2 && lado2 == lado3) {
          document.getElementById("resultado").innerHTML = "Los lados forman un triángulo equilátero.";
      } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
          document.getElementById("resultado4").innerHTML = "Los lados forman un triángulo isósceles.";
      } else {
          document.getElementById("resultado4").innerHTML = "Los lados forman un triángulo escaleno.";
      }
  } else {
      document.getElementById("resultado4").innerHTML = "Los lados no forman un triángulo.";
  }
}


//ejercicio 11

let comisionVenta = 0,
            sueldoMensual = parseInt(prompt("Ingrese el sueldo mensual del vendedor")),
            montoVenta = parseInt(prompt("Ingrese el monto de venta del vendedor"));

        if(montoVenta > 10000){
            comisionVenta = montoVenta * (15/100);
            console.log("Sueldo total: ", sueldoMensual + comisionVenta);

        }else if(montoVenta>=5000 && montoVenta<10000){
            comisionVenta = montoVenta * (5/100);
            console.log("Sueldo total: ", sueldoMensual + comisionVenta);

        }else if(montoVenta<5000){
            console.log("Sueldo total: ", sueldoMensual);
        }


//ejercicio 12

const clavesCorrectas = [
  "TIENES",
  "QUE SER",
  "INVITADO",
  "PARA",
  "INGRESAR"
];


function verificarClaves(clavesIngresadas) {
  
  if (clavesIngresadas.length !== clavesCorrectas.length) {
    return "TE EQUIVOCASTE DE FIESTA";
  }

 
  for (let i = 0; i < clavesCorrectas.length; i++) {
    if (clavesIngresadas[i] !== clavesCorrectas[i]) {
      return "TE EQUIVOCASTE DE FIESTA";
    }
  }

  
  return "BIENVENIDO A LA FIESTA";
}

// Ejemplo de uso:
const clavesIngresadas = ["tienes", "que ser", "invitado", "para", "ingresar"];
const resultado = verificarClaves(clavesIngresadas);
console.log(resultado);

//ejercicio 13

//ejercicio 14
console.log("TIENDAS PATITO");
        console.log("Ofertas");

        let monto = parseInt(prompt("Ingrese el monto total de la compra")),
            descuento1=0;

        if(monto>=500){
            descuento = monto * (30/100);
            console.log("Monto: ", monto);
            console.log("Su monto total con 30% de descuento es de: ", monto-descuento1);

        }else if(monto<500 && monto>=200){
            console.log("Monto: ", monto);
            descuento1 = monto * (20/100);
            console.log("Su monto total con 20% de descuento es de: ", monto-descuento1);

        }else if(monto<200 && monto>=100){
            console.log("Monto: ", monto);
            descuento1 = monto * (20/100);
            console.log("Su monto total con 10% de descuento es de: ", monto-descuento);

        }else{
            console.log("Su monto total no acredita a un descuento por lo tanto")
            console.log("Su moto total es de: ", monto);
        }
//ejercicio 15

let numerosNaturales = [];

function seleccionarNumero(n){
    if(n <0){
        return false;
    }
    if(n  <15){
        numerosNaturales.push(n +" Es menor a 15");

    }else if(n >50){
        numerosNaturales.push(n+ " Es mayor a 50");

    }else if(n >=25 && n<=50){
        numerosNaturales.push(n +" Esta comprendido entre 25 y 50")
    }
return true;

}
while (true) {
  let input = parseInt(prompt("Ingrese un número natural (ingrese un número negativo para terminar):"));

  if (!seleccionarNumero(input)) {
    break;
  }
}

// Mostramos los números seleccionados
console.log("Números seleccionados:");
for (var i = 0; i < numerosNaturales.length; i++) {
  console.log(numerosNaturales[i]);
}


var numeros = []; // Array para almacenar los números naturales

 //Función para verificar los criterios y agregar los números al array
function seleccionarNumeros(n) {
  if (n < 0) {
    return false; // Terminar el algoritmo si se ingresa un número negativo
  }

  if (n < 15) {
    numeros.push(n + " es menor que 15");
  } else if (n > 50) {
    numeros.push(n + " es mayor que 50");
  } else if (n >= 25 && n <= 50) {
    numeros.push(n + " está comprendido entre 25 y 50");
  }

  return true;
}

// Ejecutar el algoritmo hasta que se ingrese un número negativo
while (true) {
  var input = parseInt(prompt("Ingrese un número natural (ingrese un número negativo para terminar):"));

  if (!seleccionarNumeros(input)) {
    break;
  }
}

// Mostrar los números seleccionados
console.log("Números seleccionados:");
for (var i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//ejercicio 16
let suma
let numero
numero = parseInt(prompt("Ingrese el un numero del 1 al 9"));
suma=numero*(numero+1)/2;
console.log("la suma es " + suma)
//ejercicio 17

//ejercicio 18*/
/*let notas = [5, 6, 7, 8, 9, 10,7,7,9,10,5,5];
let aprobadas = 0;
let desaprobadas = 0;
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >=8 && [i]<=10) {
        aprobadas++;
    } else {
        desaprobadas++;
    }
    suma += notas[i];
}

let promedio = suma / notas.length;
let promedioAprobadas = (suma - (desaprobadas * 10)) / aprobadas;
let promedioDesaprobadas = (suma - (aprobadas * 10)) / desaprobadas;

console.log("Notas aprobadas:" + aprobadas);
console.log("Notas desaprobadas:" + desaprobadas);
console.log("Promedio de notas:"+ promedio);
console.log("Promedio de notas aprobadas:" + promedioAprobadas);
console.log("Promedio de notas desaprobadas:" + promedioDesaprobadas);
*/

//ejercicio 19

/*let numero = parseInt(prompt("Introduce un numero"));

let sumar = sumarNumero(numero);

    function sumarNumero(numero) {
        let suma = 0;
        for (let digito of numero.toString()) {
            suma += parseInt(digito);
        }
    return suma;
}

console.log(`La suma de los dígitos de ${numero} es: ${sumar}`);*/

//ejercicio 20

/*let numeros =[2,3,4,1,4,412,124,142,415,667,767,23,432,423,-3,-8,-1,23,12,24 //20 numeros
                -2,-10,23,45,32,23,52,123,.122,-12,124,-32,-35,-23,90,88,-99,20,43,// 20 numeros
                22,34,35,-32,123,234,43,5,-120,400,32,8]
                
console.log(numeros)
let positivos = numeros.filter((numeros) => numeros>0 )
let negativos = numeros.filter((numeros)=> numeros <0);
let pares = numeros.filter(function(numeros){
    return numeros %2 ==0;
})
let impares = numeros.filter(function(numeros){
    return numeros %2 ==1;
})

console.log(negativos)
console.log(positivos)
console.log(impares)
console.log(pares)*/

//ejercicio 21
/*let numero= parseInt(prompt("Inserte el número"));
function factorial(numeroX){
    
    if(numeroX === 0 || numeroX === 1 ){
        return 1;
    }
    else{
        return numeroX * factorial(numeroX - 1);
    }
}

//let numero= parseInt(prompt("Inserte el número"));

if(numero < 0){
    console.log("El numero debe ser positivo");

}else{
    console.log("El factorial de : " + numero + " es " + factorial(numero));
}
*/

//ejercicio 22

//ejercicio 23
/*let suma =0;
                let pares =1;
                for(let i=20; i <=400;i++){
                    if(i % 2 ===0){
                        suma+=i
                        pares+=i
                    }
                }
                console.log("La suma de los números pares es:", suma);
                console.log("El producto de los números pares es:", pares);

*/
//ejercicio 24

/*let palabra =prompt("Ingrese una palabra : ");
let vocales =["a","e","i","o","u"];
let vocalesEncontradas=[];

for(let i=0; i<palabra.length;i++){
    if(vocales.includes(palabra[i])){
        vocalesEncontradas.push(palabra[i]);
    }
}
if(vocalesEncontradas.length>0){
    alert("Las vocales encontradas son : "+ vocalesEncontradas.join(","));

}else{
    alert("No se encontraron vocales en la palabra");
}
*/

/*function leervocales() {
    let vocal = "";
    while (vocal !== "a" && vocal !== "e" && vocal !== "i" && vocal !== "o" && vocal !== "u") {
      vocal = prompt("Ingresa un vocal");
    }
    alert(`El vocal ingresado es ${vocal}`);
  }*/

//ejercicio 25

/*let tarifa = prompt("Cual es su tarifa por hora")
let horasTrabajadas = prompt("Cuales don sus horas trabajadas")
let salario= tarifa * horasTrabajadas;
if(salario >=500){
    console.log("El salario es mayor a $ 500");
}else if(!salario <= 500){
    console.log("El salario es menor a $ 500")
}
*/

//ejercicio 26

//ejercicio 27
/*let numerosAleatorios = [];
for (let i = 0; i < 2500; i++) {
 numerosAleatorios[i] = Math.floor(Math.random() * 1100)+1 ;
 //Math.floor: es una función en JavaScript que redondea un número hacia abajo al número entero más cercano.
}

let numeroMenor = numerosAleatorios[0];
let indiceNumeroMenor = 0;
let numeroMayor = numerosAleatorios[0];
let indiceNumeroMayor = 0;

for (let i = 1; i < numerosAleatorios.length; i++) {
 if (numerosAleatorios[i] > numeroMayor) {
   numeroMayor = numerosAleatorios[i];
   indiceNumeroMayor = i;
 }else if(numerosAleatorios[i]<numeroMenor){
  numeroMenor = numerosAleatorios[i];
   indiceNumeroMenor = i;
 }
}
document.getElementById(numerosAleatorios);
document.getElementById("La cuenta " + indiceNumeroMenor+ " posee la cantidad de : $ " + numeroMenor+".00");
console.log("La cuenta " + indiceNumeroMayor+ " posee la cantidad de : $ " + numeroMayor +".00");
*/

//ejercicio 28

//ejercicio 29
