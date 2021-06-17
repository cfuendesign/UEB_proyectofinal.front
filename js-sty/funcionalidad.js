
//Variable que indica el estado de la página (Cargada/No Cargada)
var isPageLoaded = 0;

//Event listener que se engatilla cuando se carga la página e indica, mediante la variable isPageLoaded
//que la página está cargada
document.addEventListener("DOMContentLoaded", function (event) {
    isPageLoaded = 1;
});

//Condición que impide que se ejecute el evento onchange hasta que no se 
if (isPageLoaded = 1) {
    document.getElementById('file').onchange = function (e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            let preview = document.getElementById('preview');
            canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 400;
            preview.innerHTML = '';
            preview.append(canvas);
            let canvctrl = canvas.getContext("2d");
            image = new Image();
            image.src = reader.result;
            image.onload = () => canvctrl.drawImage(image, 0, 0, 400, 400);
        }
    }
}

//Para cuando te encuentres en una página que no es el index, te manda al index
function atras() {
    location.href = "index.html";
}

//???
function pagina() {
    location.href = "registro.html";
}

//Ventana del Propietario
function propietario() {
    location.href = "Ventana-Propietario.html";
}

//Abre el pop-up de creación de mascota?
function Guardar() {
    document.getElementById("ventana-pop").style.display = "block";
}

//Cierra el pop-up de creación de mascota?
function cerrar() {
    document.getElementById("ventana-pop").style.display = "none";
}

//Ventana de la Veterinaria
function veterinaria() {
    location.href = "Ventana-Veterinaria.html";
}

//Ventana de la Alcaldía
function Alcaldia() {
    location.href = "Ventana-Alcaldia.html";
}

//??? Un clon de atras, aparentemente
function atras1() {
    location.href = "index.html"
}

//El formulario del propietario en forma de *constante*. Debería ser una variable (var/let)
const formpropier = document.forms['propietario-form'];

//Función que se engatilla cuando el usuario envía el formulario
formpropier.onsubmit = (event) => {
    event.preventDefault();
    console.log(formDataJSON());
    formpropier.reset();
};

//TODO / Fix - This is dumb
//Función que toma lo que se ha ingresado en el formulario del propietario y lo convierte en JSON
function formDataJSON() {
    const user = {};
    Array.from(formpropier.elements).forEach(element => {
        if (element.name) user[element.name] = element.value;
    });
    return user;
}