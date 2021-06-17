var isPageLoaded = 0;
document.addEventListener("DOMContentLoaded", function (event) {
    isPageLoaded = 1;
});

function atras() {
    location.href = "index.html";
}

function pagina() {
    location.href = "registro.html";
}

function propietario() {
    location.href = "Panel-Propietario.html";
}

function veterinaria() {
    location.href = "Ventana-veterinaria.html";
}

function atras1() {
    location.href = "index.html"
}

function Alcaldia() {
    location.href = "Alcaldia.html";
}

function Guardar() {
    document.getElementById("ventana-pop").style.display = "block";
}

function cerrar() {
    document.getElementById("ventana-pop").style.display = "none";
}
const formVetter = document.forms['veterinarian-form'];
formVetter.onsubmit = (event) => {
    event.preventDefault();
    console.log(formDataJSONVt());
};
function formDataJSONVt() {
    const user = {};
    Array.from(formVetter.elements).forEach(element => {
        if (element.name) user[element.name] = element.value;
    });
    return user;
}
function Editar(){
}