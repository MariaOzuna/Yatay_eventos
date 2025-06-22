import { login } from "./autorizacion.js";

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    

    try {
        const usuarioExitoso = await login(usuario, contraseña);
        if (usuarioExitoso) {
            sessionStorage.setItem("usuario", usuarioExitoso.username);
            sessionStorage.setItem("loggedIn", "true");
            alert("Inicio de sesión exitoso");
            window.location.href = "../altasalon.html"; // redirección
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } catch (error) {
        console.error("Error al intentar iniciar sesión:", error);
        alert("Ocurrió un error al iniciar sesión");
    }
});
