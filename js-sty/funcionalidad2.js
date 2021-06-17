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
const formVeteri = document.forms['Veterinaria-form'];

formVeteri.onsubmit = (event) => {
    event.preventDefault();
    console.log(formDataJSONVt());
};
function formDataJSONVt() {
    const user = {};
    Array.from(formpropier.elements).forEach(element => {
        if (element.name) user[element.name] = element.value;
    });
    return user;
}