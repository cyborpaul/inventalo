const formulario = document.getElementById('formular');
const formu = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
var array = [];
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. ^(?:Avenida|av\.|Av\.)\N+[a-zA-Z\d{0,2}\S]\S+$
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. /^(?:Avenida|av\.|Av\.)\N+$/,
	organizacion: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
	industria: /^[1-8]{1,4}$/,
	titulo: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
	trabajo: /^[1-8]{1,4}$/,
	ubicacion: /^[1-8]{1,4}$/,
	ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	reason: /^[a-zA-ZÀ-ÿ\s]{1,90}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	apellido: false,
	organizacion: false,
	industria: false,
	titulo: false,
	trabajo: false,
	ubicacion: false,
	ciudad: false,
	reason: false,
	correo: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			array.push(e.target.name);
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			array.push(e.target.name);
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "correo":
			array.push(e.target.name);
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "organizacion":
			array.push(e.target.name);
			validarCampo(expresiones.organizacion, e.target, 'organizacion');
		break;
		case "titulo":
			array.push(e.target.name);
			validarCampo(expresiones.titulo, e.target, 'titulo');
		break;
		case "ciudad":
			array.push(e.target.name);
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;
		case "reason":
			array.push(e.target.name);
			validarCampo(expresiones.reason, e.target, 'reason');
		break;
	}
}

const validarFormulario2 = (f) => {
	switch (f.target.name) {
		case "industria":
			array[] = f.target.name;
			validarCampo2(expresiones.industria, f.target, 'industria');
		break;
		case "trabajo":
			validarCampo2(expresiones.trabajo, f.target, 'trabajo');
		break;

		case "ubicacion":
			validarCampo2(expresiones.ubicacion, f.target, 'ubicacion');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
const validarCampo2 = (expresion, select, campo) => {
	if(expresion.test(select.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

selects.forEach((select) => {
	select.addEventListener('keyup', validarFormulario2);
	select.addEventListener('blur', validarFormulario2);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellido && campos.correo && campos.organizacion && campos.industria && campos.titulo && campos.trabajo && campos.ubicacion && campos.ciudad && campos.reason && terminos.checked ){
		nombre1 = document.getElementsByName('nombre');
		apellido1 = document.getElementsByName('apellido');
		correo1 = document.getElementsByName('correo');
		organizacion1 = document.getElementsByName('organizacion');
		titulo1 = document.getElementByName('titulo');
		ciudad1 = document.getElementsByName('ciudad');
		reason1 = document.getElementsByName('reason');
		console.log(array);
		formu.reset();
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});