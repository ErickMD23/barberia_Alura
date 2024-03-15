let numeroSecreto = 0;
let intentos = 1;
let lista = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  // Si ya sorteamos todos los numeros
  if (lista.length == numeroMaximo) {
    console.log("Ya se sortearon todos los numeros posibles ");
  } else {
    // Si el numero generado esta incluido en la lista
    if (lista.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      lista.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function holaMundo(num1) {
  return parseInt(num1 * num1);
}

function reiniciarJuego() {
  // Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalos de numeros
  condicionesIniciales();
  //Inicializar el numero de intentos
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
