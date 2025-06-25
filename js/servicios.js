document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-servicio");
    const nombreInput = document.getElementById("nombre");
    const descripcionInput = document.getElementById("descripcion");
    const indiceEdicion = document.getElementById("indice-edicion");
    const tablaBody = document.querySelector("#tabla-servicios tbody");
  
    let servicios = JSON.parse(localStorage.getItem("servicios")) || [];
  
    function renderTabla() {
      tablaBody.innerHTML = "";
      servicios.forEach((servicio, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${servicio.nombre}</td>
          <td>${servicio.descripcion}</td>
          
          <td>
            <button class="btn btn-sm btn-warning me-2" onclick="editarServicio(${index})">Editar</button>
            <button class="btn btn-sm btn-danger" onclick="eliminarServicio(${index})">Eliminar</button>
          </td>
        `;
        tablaBody.appendChild(fila);
      });
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nuevoServicio = {
        nombre: nombreInput.value.trim(),
        descripcion: descripcionInput.value.trim(),
      };
  
      const index = parseInt(indiceEdicion.value);
  
      if (index >= 0) {
        servicios[index] = nuevoServicio;
        indiceEdicion.value = "-1";
      } else {
        servicios.push(nuevoServicio);
      }
  
      localStorage.setItem("servicios", JSON.stringify(servicios));
      form.reset();
      renderTabla();
    });
  
    window.editarServicio = function(index) {
      const servicio = servicios[index];
      nombreInput.value = servicio.nombre;
      descripcionInput.value = servicio.descripcion;
      indiceEdicion.value = index;
    };
  
    window.eliminarServicio = function(index) {
      if (confirm("¿Estás seguro de eliminar este servicio?")) {
        servicios.splice(index, 1);
        localStorage.setItem("servicios", JSON.stringify(servicios));
        renderTabla();
      }
    };
  
    renderTabla();
  });