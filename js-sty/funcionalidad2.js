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

const formvetter = document.forms['veterinarian-form'];
formvetter.onsubmit = (event) => {
    event.preventDefault();
    console.log(formDataJSON());
};

function formDataJSON() {
    const user = {};
    Array.from(formvetter.elements).forEach(element => {
        if (element.name) user[element.name] = element.value;
    });
    return user;
}
