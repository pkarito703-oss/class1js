
// develop - nomenclatura comelcase
//nombres de carpetas y archivos - backend - snake_case
//ojo solos las clases van masyuscula inicial

function primerFuncion() {
   alert("entro al js"); 
}

function mostrarSeccionRegistrarse() {
    //alert("entro a mostrar seccion registrarse");
    document.getElementById("seccionRegistrarse").style.display = "block";
    //funcion para mostrar scroll
    document.getElementById("seccionRegistrarse").scrollIntoView({ behavior: 'smooth' });
}
