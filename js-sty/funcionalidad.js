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
var isPageLoaded = 0;
document.addEventListener("DOMContentLoaded", function (event) {
    isPageLoaded = 1;
});
Function

function atras() {
    location.href = "index.html";
}

Function

function pagina() {
    location.href = "registro.html";
}

Function

function propietario() {
    location.href = "Panel-Propietario.html";
}

Function

function veterinaria() {
    location.href = "Ventana-veterinaria.html";
}

Function

function atras1() {
    location.href = "index.html"
}

Function

function Alcaldia() {
    location.href = "Alcaldia.html";
}

Function

function Guardar() {
    document.getElementById("ventana-pop").style.display = "block";
}

Function

function cerrar() {
    document.getElementById("ventana-pop").style.display = "none";
}

const formpropier = document.forms['propietario-form'];

formpropier.onsubmit = (event) => {
    event.preventDefault();
    console.log(formDataJSON());
};

function formDataJSON() {
    const user = {};
    Array.from(formpropier.elements).forEach(element => {
        if (element.name) user[element.name] = element.value;
    });
    return user;
}