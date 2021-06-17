function atras1() {
    location.href = "index.html"
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
    const user1 = {};
    Array.from(formvetter.elements).forEach(element => {
        if (element.name) user1[element.name] = element.value;
    });
    return user1;
    formvetter.reset();
}
