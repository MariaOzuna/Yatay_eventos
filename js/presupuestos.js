document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("token")) {
    alert("Acceso denegado. Debes iniciar sesión.");
    window.location.href = "login.html";
    return;
  }

  const form = document.getElementById("presupuestoForm");
  const resultadoDiv = document.getElementById("resultadoPresupuesto");

  function sumatoria(servicios) {
    let total = 0;
    for (let i = 0; i < servicios.length; i++) {
      total += servicios[i];
    }
    return total;
  }

  function calcularPresupuesto(salon, servicios) {
    return salon + sumatoria(servicios);
  }

  function guardarPresupuesto(presupuesto) {
    let historial = JSON.parse(localStorage.getItem("historialPresupuestos")) || [];
    historial.push(presupuesto);
    localStorage.setItem("historialPresupuestos", JSON.stringify(historial));
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const salonSelect = document.getElementById("salon");
    const salonPrecio = parseInt(salonSelect.value);
    const salonNombre = salonSelect.options[salonSelect.selectedIndex].text;

    const serviciosCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    const servicios = [];
    const serviciosNombres = [];

    serviciosCheckbox.forEach((chk) => {
      servicios.push(parseInt(chk.value));
      serviciosNombres.push(chk.parentElement.textContent.trim());
    });

    const totalPresupuesto = calcularPresupuesto(salonPrecio, servicios);

    const presupuesto = {
      id: Date.now(),
      nombreCompleto: nombre,
      fecha: new Date().toLocaleString(),
      tematica: salonNombre,
      serviciosSeleccionados: serviciosNombres,
      valorTotal: totalPresupuesto,
    };

    guardarPresupuesto(presupuesto);

    resultadoDiv.innerHTML = `
      <h3>Presupuesto para ${nombre}</h3>
      <p><strong>Salón seleccionado:</strong> ${salonNombre}</p>
      <p><strong>Servicios adicionales:</strong></p>
      <ul>${
        serviciosNombres.length > 0
          ? serviciosNombres.map((s) => `<li>${s}</li>`).join("")
          : "<li>Sin servicios adicionales</li>"
      }</ul>
      <p><strong>Total final:</strong> $${totalPresupuesto.toLocaleString()}</p>
      <p><em>¡Presupuesto guardado correctamente!</em></p>
      <p><em>Gracias por elegir a Yatay Eventos, será un momento único</em></p>
    `;

    
    form.reset();
  });
});
