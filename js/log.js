import { login } from "./autorizacion.js";

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    

    try {
        const user = await login(usuario, contraseña);
        if (user) {
            sessionStorage.setItem("usuario", user.username);
            sessionStorage.setItem("loggedIn", "true");
            alert("Inicio de sesión exitoso");
            window.location.href = "../altaSalon.html"; 
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } catch (error) {
        console.error("Error al intentar iniciar sesión:", error);
        alert("Ocurrió un error al iniciar sesión");
    }
});
