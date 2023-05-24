var ingresarTexto = document.querySelector(".ingresar-texto")
var resultado = document.querySelector(".resultado")

// var vocales = ["e", "i", "a","o","u"];
// var cambio = ["enter", "imes", "ai","ober","ufat"];



//ENCRIPTAR

var botonEncriptar = document.getElementById("encriptar");

function btnEncriptar() {
    const textoEncriptado = encriptar(ingresarTexto.value)
    resultado.value = textoEncriptado
    ingresarTexto.value = ""

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","entrer"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    } 

    return stringEncriptada

}

//DESENCRIPTAR

var botonDesencriptar = document.getElementById("desencriptar");

function btnDesncriptar() {
    const textoEncriptado = desencriptar(ingresarTexto.value)
    resultado.value = textoEncriptado
    ingresarTexto.value = ""

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","entrer"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
        
    } 

    return stringDesencriptada
}
// //COPIAR

var botonCopiar = document.getElementById("copiar");


function copiar() {
    
    const copyText = resultado.value
    navigator.clipboard.writeText(copyText)
}

botonEncriptar.onclick = btnEncriptar;
botonDesencriptar.onclick = btnDesncriptar;
botonCopiar.onclick = copiar;
