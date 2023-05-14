var textarea1 = document.querySelector("#text-INP");
textarea1.addEventListener("keyup", e =>{
  textarea1.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea1.style.height = `${scHeight}px`;
});


var primajen = document.querySelector("#panel1s");
var segimajen = document.querySelector("#panel2s");
var textoENDES = document.getElementById("titulop2");
var msg = document.getElementById("msg-S");

function encriptar () {

    var inputS = document.getElementById("text-INP");
    var texto = inputS.value;
    if (texto !== "") {
    var text = document.querySelector("#text-INP").value;
    var textoCifrado = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.querySelector("#msg-S").value = textoCifrado;
    document.querySelector("#text-INP").value;
    primajen.style.display = "none";
    segimajen.style.display = "block";
    msg.style.display = "block";
    textoENDES.textContent = "Mensaje Encriptado"
    }
    
    else {
        var input = document.getElementById("text-INP");
            if (input.value === "") {
            input.placeholder = "Ingrese un texto para continuar";
        }
    }
};


function desencriptado () {

    var inputS = document.getElementById("text-INP");
    var texto = inputS.value;
    if (texto !== "") {
    var text = document.querySelector("#text-INP").value;
    var textoDes = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector("#msg-S").value = textoDes;
    document.querySelector("#text-INP").value;
    primajen.style.display = "none";
    segimajen.style.display = "block";
    msg.style.display = "block";
    textoENDES.textContent = "Mensaje Desencriptado" 
    }
    else {
        var input = document.getElementById("text-INP");
            if (input.value === "") {
            input.placeholder = "Ingrese un texto para continuar";
        }
    }
}

function copiar () {

    var copyText = document.querySelector("#msg-S");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function caracteresPerm() {
    var textareainp = document.getElementById("text-INP");
    var text = textareainp.value;
    var nuevotext = "";
    for (var i = 0; i < text.length; i++) {
      var char = text.charAt(i);
      if ((char >= "a" && char <= "z") || char === " ") {
        nuevotext += char;
      }
    }
    textareainp.value = nuevotext.toLowerCase();
  }

var textarea = document.getElementById("text-INP");

  textarea.addEventListener("input", () => {
      var lineaTam = parseInt(window.getComputedStyle(textarea).getPropertyValue("linea-height"));
      var maxTam = lineaTam * parseInt(textarea.getAttribute("rows"));
      while (textarea.scrollHeight > maxTam) {
        textarea.value = textarea.value.slice(0, -1);
      }
    });

var iconoB = document.getElementById('iconG');

    iconoB.addEventListener('click', function() {
    window.location.href = ("https://github.com/ByOscarPINE")
    });
  
    document.querySelector("#msg-S").addEventListener("click", copiar);


var boton1 = document.querySelector("#boton-ENC");
boton1.onclick = encriptar;

var boton2 = document.querySelector("#boton-DES");
boton2.onclick = desencriptado;

var boton3 = document.querySelector("#boton-COP");
boton3.onclick = copiar;


const checkbox = document.getElementById("checkbox");
const panel1 = document.getElementById("panel1s");
const botonENC = document.getElementById("boton-ENC");
const botonDES = document.getElementById("boton-DES");
const panel2 = document.getElementById("panel2s");
const botonCOP = document.getElementById("boton-COP")

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
  panel1.classList.toggle("dark")
  botonENC.classList.toggle("dark")
  botonDES.classList.toggle("dark")
  panel2.classList.toggle("dark")
  botonCOP.classList.toggle("dark")
});