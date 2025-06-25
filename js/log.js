import { login } from "./autorizacion.js";

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    try {
      const loginExitoso = await login(usuario, contraseña);

      if (loginExitoso) {
        alert("Inicio de sesión exitoso");
        window.location.href = "administradores.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
      alert("Ocurrió un error al iniciar sesión");
    }
  });
