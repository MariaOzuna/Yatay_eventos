import { salonesIniciales } from './data.js';

if (!localStorage.getItem('salones')) {
    localStorage.setItem('salones', JSON.stringify(salonesIniciales));
}

function obtenerSalones() {
    try {
        const guardados = localStorage.getItem('salones');
        return guardados ? JSON.parse(guardados) : [];
    } catch (e) {
        console.error("Error parseando salones en LocalStorage", e);
        return [];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (!sessionStorage.getItem("usuario")) {
        alert("Debe iniciar sesión para acceder a esta página.");
        window.location.href = "login.html";
        return;
    }
});

const salir = document.getElementById("logout");
if (salir) {
    salir.addEventListener("click", function() {
        localStorage.removeItem("token");
        window.location.href = "login.html";
    });
}

const form = document.getElementById("altaSalonForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const ubicacion = document.getElementById("ubicacion").value;
    const aforo = document.getElementById("capacidad").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;

    alert(`Nombre: ${nombre}, \nUbicación: ${ubicacion}, \nAforo: ${aforo}, \nPrecio: ${precio}, \nDescripción: ${descripcion}`);
    });
