function validarTexto(texto) {
  let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
  let mayusculas = /[A-Z]/g;

  if (texto.match(mayusculas) || texto.match(caracteres)) {
    alert("No se permiten caracteres especiales ni mayusculas");
    return true;
  } else if (texto == " ") {
    alert("Ingrese un mensaje para encriptar");
    return true;
  } else {
    return false;
  }
}

let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click", function () {
  let textInput = document.querySelector("#input-texto").value;
  let textoIngresado = textInput;

  if (validarTexto(textoIngresado) == false) {
    let encriptado = encriptarTexto(textoIngresado);
    let resultado = document.querySelector("#msg");
    resultado.value = encriptado;
  } else {
    textInput = "";
  }
});

const condiciones = {
  a: "ai",
  e: "enter",
  o: "ober",
  u: "ufat",
};

function encriptarTexto(textoIngresado) {
  let textoEncriptado = "";
  for (const obj in condiciones) {
    textoEncriptado = textoIngresado.replaceAll(obj, condiciones[obj]);
    textoIngresado = textoEncriptado;
  }
  return textoEncriptado;
}

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click", function () {
  let Copiado = document.querySelector("#msg").value;
  navigator.clipboard.writeText(Copiado);
  document.querySelector("#input-texto").value = "";
});

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function () {
  let textoIngresado = document.querySelector("#input-texto").value;
  let Desencriptado = textoDesencriptado(textoIngresado);

  let resultado = document.querySelector("#msg");
  resultado.value = Desencriptado;
});

function textoDesencriptado(textoIngresado) {
  let textoEncriptado = "";
  for (const obj in condiciones) {
    textoEncriptado = textoIngresado.replaceAll(condiciones[obj], obj);
    textoIngresado = textoEncriptado;
  }
  return textoEncriptado;
}
