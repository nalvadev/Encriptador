/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 
e --> enter 
o --> ober 
i --> imes 
a --> ai 
u --> ufat
*/



// función para copiar al clipboard
function copiar(){
    let contenido = document.getElementById('cartelfound');
    contenido.select();
    navigator.clipboard.writeText(contenido.value);
    document.getElementById('cartelfound').value = "";
    alert("Copiado");
}


//función para quitar acentos

const borraAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//funcion para mostrar y ocultar
function mostrar(elemento){
    document.getElementById(elemento).style.display = "block";
}
function ocultar(elemento){
    document.getElementById(elemento).style.display = "none";
}

//funcion para encriptar y desencriptar
function encriptar(){

    validar();
    let message = document.getElementById('text').value;
        

        let textofiltrado = borraAcentos(message).toLowerCase();
        console.log(textofiltrado);
        

        textofiltrado = textofiltrado.replace(/e/igm, "enter")
                                     .replace(/i/igm, "imes")
                                     .replace(/o/gim, "ober")
                                     .replace(/a/igm, "ai")
                                     .replace(/u/igm, "ufat");

        console.log(textofiltrado);
        document.getElementById('cartelfound').innerHTML = textofiltrado;
        ocultar("notfound");
        mostrar('found');
        document.getElementById('text').value= "";     
    }

function desencriptar(){

    validar();

    
    let message = document.getElementById('text').value;
    console.log(message);
    let textoriginal = message.replace(/enter/img, "e")
                            .replace(/imes/img, "i")
                            .replace(/ober/img, "o")
                            .replace(/ai/img, "a")
                            .replace(/ufat/img, "u");
    console.log(textoriginal);
    document.getElementById('cartelfound').value = textoriginal;
    document.getElementById('text'). value = "";
    ocultar("notfound");
    mostrar('found');
}


//método de validación de requisitos
function validar(){
    const texto = document.getElementById('text').value;
    let validador = texto.match(/^[a-z\s]*$/);

    if(!validador || validador== 0) {
        alert("solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}