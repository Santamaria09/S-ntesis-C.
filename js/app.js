//RESERVA
const hotelInput        = document.getElementById("hotel");
const habitacionSelect  = document.getElementById("habitacion");
const precioNocheInput  = document.getElementById("precioNoche");
const totalInput        = document.getElementById("total");
const entradaInput      = document.getElementById("entrada");
const salidaInput       = document.getElementById("salida");

//PAGO
const metodoSelect      = document.getElementById("metodo");
const tarjetaInput      = document.getElementById("tarjeta");
const cvvInput          = document.getElementById("cvv");
const nombreInput       = document.getElementById("nombre");

let totalCalculado = false;

//INICIALIZACIÓN
hotelInput.addEventListener("input", actualizarPrecio);
habitacionSelect.addEventListener("change", actualizarPrecio);
metodoSelect.addEventListener("change", configurarMetodoPago);
tarjetaInput.addEventListener("input", formatearTarjeta);

actualizarPrecio();

//PRECIO AUTOMÁTICO
function actualizarPrecio() {

    let precioBase = parseFloat(habitacionSelect.value);

    if (hotelInput.value.trim() !== "") {
        precioBase += 10; 
    }

    precioNocheInput.value = precioBase.toFixed(2);

    totalCalculado = false;
    totalInput.value = "";
}

//TOTAL
function calcularTotal() {

    const hotel = hotelInput.value.trim();
    const precio = parseFloat(precioNocheInput.value);
    const fechaEntrada = entradaInput.value;
    const fechaSalida  = salidaInput.value;

    if (hotel === "") {
        alert("Debe ingresar el nombre del hotel");
        return;
    }

    if (fechaEntrada === "" || fechaSalida === "") {
        alert("Debe seleccionar ambas fechas");
        return;
    }

    const entrada = new Date(fechaEntrada);
    const salida  = new Date(fechaSalida);

    if (salida <= entrada) {
        alert("La fecha de salida debe ser mayor que la entrada");
        return;
    }

    const dias  = (salida - entrada) / (1000 * 60 * 60 * 24);
    const total = dias * precio;

    totalInput.value = total.toFixed(2);
    totalCalculado   = true;
}


//PANTALLA DE PAGO
function irAPago() {

    if (!totalCalculado) {
        alert("Debe calcular el total primero");
        return;
    }

    document.getElementById("reserva").style.display = "none";
    document.getElementById("pago").style.display    = "block";
}

//MÉTODO DE PAGO
function configurarMetodoPago() {

    if (metodoSelect.value === "credito") {
        cvvInput.disabled = false;
        cvvInput.placeholder = "Obligatorio";
    } else {
        cvvInput.disabled = true;
        cvvInput.value = "";
        cvvInput.placeholder = "No requerido";
    }
}

//TARJETA
function formatearTarjeta() {

    let numeros = tarjetaInput.value.replace(/\D/g, "");
    numeros = numeros.substring(0, 16);

    const bloques = numeros.match(/.{1,4}/g);

    tarjetaInput.value = bloques ? bloques.join("-") : numeros;
}

//PAGO

function confirmarPago() {

    const nombre  = nombreInput.value.trim();
    const tarjeta = tarjetaInput.value.replace(/\D/g, "");
    const cvv     = cvvInput.value.trim();

    if (nombre.length < 3) {
        alert("Nombre inválido");
        return;
    }

    if (tarjeta.length !== 16) {
        alert("La tarjeta debe tener 16 dígitos");
        return;
    }

    if (!cvvInput.disabled && cvv.length !== 3) {
        alert("CVV inválido");
        return;
    }
    document.getElementById("pago").style.display = "none";
    document.getElementById("confirmacion").style.display = "block";
    document.getElementById("mensajeFinal").innerText = `Gracias ${nombre}, tu pago fue procesado correctamente.`;
}