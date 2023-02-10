function cambiarOutPut() {
    var outputLLeno = document.getElementsByClassName("area_output_llena")[0];
    var outputVacio = document.getElementsByClassName("area_output_vacia")[0];
    if (outputLLeno.style.display == "none") {
        outputLLeno.style.display = "flex";
        outputVacio.style.display = "none";
    } else {
        outputLLeno.style.display = "none";
        outputVacio.style.display = "flex";
    }
}

function obtenerTexto() {
    var areaTexto = document.getElementsByClassName("area_de_texto")[0];
    return areaTexto.value
}

function encriptar(e) {
    var texto = obtenerTexto();
    // Aqui ira la logica de la encriptacion
    mostrarResultado(texto)
}

function mostrarResultado(resultado) {
    var outputSalida = document.getElementById("outputSalida");
    outputSalida.innerHTML = resultado;

    // escondemos el output cuando no hay texto para encriptar/desencriptar
    document.getElementsByClassName("area_output_llena")[0].style.display = "flex";
    document.getElementsByClassName("area_output_vacia")[0].style.display = "none";
}

var logo = document.getElementById("logo");
var botonEncriptar = document.getElementById("boton_encriptar");

botonEncriptar.onclick = encriptar;
logo.onclick = cambiarOutPut;

