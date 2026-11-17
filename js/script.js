
const btnComenzar = document.getElementById("btnComenzar");

const musica = document.getElementById("musica");


btnComenzar.addEventListener("click", () => {


    musica.play().catch(() => {

        console.log("La música necesita interacción del usuario.");

    });



    document
        .getElementById("capitulo1")
        .scrollIntoView({
            behavior: "smooth"
        });

});


const fechaInicio = new Date("2025-05-07T00:00:00");


function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;


    const segundosTotales =
        Math.floor(diferencia / 1000);


    const dias =
        Math.floor(segundosTotales / 86400);


    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );


    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );


    const segundos =
        segundosTotales % 60;


    

    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent = horas;

    document.getElementById("minutos").textContent = minutos;

    document.getElementById("segundos").textContent = segundos;

}


actualizarContador();


setInterval(actualizarContador, 1000);

const razones = [

    "Porque tu sonrisa ilumina mis días.",
    "Porque haces que los momentos simples sean especiales.",
    "Porque siempre encuentras la forma de hacerme reír.",
    "Porque me apoyas incluso cuando dudo de mí.",
    "Porque eres increíblemente fuerte.",
    "Porque me haces querer ser mejor persona.",
    "Porque tu voz me da tranquilidad.",
    "Porque contigo me siento en casa.",
    "Porque haces más bonitos mis días.",
    "Porque compartes mis sueños.",
    "Porque me inspiras.",
    "Porque eres auténtica.",
    "Porque eres inteligente.",
    "Porque tu ternura es única.",
    "Porque me haces sentir amado.",
    "Porque tu forma de ver la vida me encanta.",
    "Porque haces que los problemas pesen menos.",
    "Porque confías en mí.",
    "Porque eres parte de mis mejores recuerdos.",
    "Porque simplemente eres tú."

];

const btnReason =
document.getElementById("btnReason");

const reasonText =
document.getElementById("reasonText");

const numeroRazon =
document.getElementById("numeroRazon");

let indice = 0;


/* Mostrar la primera razón automáticamente */

reasonText.textContent = razones[0];


/* Cambiar razón */

btnReason.addEventListener("click", () => {

    indice++;

    if(indice >= razones.length){
        indice = 0;
    }

    reasonText.classList.remove("razon-entrada");

    void reasonText.offsetWidth;

    reasonText.textContent = razones[indice];

    numeroRazon.textContent =
        String(indice + 1).padStart(2, "0");

    reasonText.classList.add("razon-entrada");

});

const btnRegalo =
document.getElementById("btnRegalo");

const mensajeFinal =
document.getElementById("mensajeFinal");

btnRegalo.addEventListener("click", () => {

    mensajeFinal.classList.add("mostrar");

});