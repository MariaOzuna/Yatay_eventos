const salonesIniciales = [
  {
    id: 1,
    nombre: "Salón Ava",
    capacidad: 70,
    ubicacion: "Zona Norte, Las Palmeras y Tala",
    precio: 200000,
    descripcion: "Amplio salón techado para fiestas infantiles",
    imagen: "imagenes/ava1.jpg",
  },
  {
    id: 2,
    nombre: "Salón Rosa",
    capacidad: 100,
    ubicacion: "Centro, Urquiza y Corrientes",
    precio: 220000,
    descripcion: "Salón elegante para bodas y eventos corporativos",
    imagen: "imagenes/salon_rosa1.jpg",
  },
];

if (!localStorage.getItem("salones")) {
  localStorage.setItem("salones", JSON.stringify(salonesIniciales));
}

function obtenerSalones() {
  return JSON.parse(localStorage.getItem("salones")) || [];
}

function guardarSalones(salones) {
  localStorage.setItem("salones", JSON.stringify(salones));
}

function mostrarSalones() {
  const tbody = document.getElementById("salonesList");
  const thAcciones = document.getElementById("thAcciones");
  const esAdmin = !!sessionStorage.getItem("token");

  if (!tbody) return;

  tbody.innerHTML = "";
  thAcciones.style.display = esAdmin ? "table-cell" : "none";

  obtenerSalones().forEach((salon) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${salon.nombre}</td>
      <td>${salon.capacidad}</td>
      <td>${salon.ubicacion}</td>
      <td>$${salon.precio.toLocaleString()}</td>
      <td><img src="${salon.imagen}" width="60" class="img-thumbnail"></td>
      <td>${salon.descripcion}</td>
      <td style="display: ${esAdmin ? "table-cell" : "none"}">
        <button onclick="verSalon(${salon.id})" class="btn btn-info btn-sm">Ver</button>
        <button onclick="editarSalon(${salon.id})" class="btn btn-warning btn-sm">Editar</button>
        <button onclick="eliminarSalon(${salon.id})" class="btn btn-danger btn-sm">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function verSalon(id) {
  const salon = obtenerSalones().find((s) => s.id === id);
  if (!salon) return alert("Salón no encontrado");
  alert(
    `Nombre: ${salon.nombre}\nUbicación: ${salon.ubicacion}\nCapacidad: ${salon.capacidad}\nPrecio: $${salon.precio}\nDescripción: ${salon.descripcion}`
  );
}

function editarSalon(id) {
  const salon = obtenerSalones().find((s) => s.id === id);
  if (!salon) return alert("Salón no encontrado");

  document.getElementById("nombre").value = salon.nombre;
  document.getElementById("capacidad").value = salon.capacidad;
  document.getElementById("ubicacion").value = salon.ubicacion;
  document.getElementById("precio").value = salon.precio;
  document.getElementById("descripcion").value = salon.descripcion;

  window.editandoSalonId = id;
  document.querySelector("#altaSalonForm button[type='submit']").textContent =
    "Actualizar Salón";
}

function eliminarSalon(id) {
  if (!confirm("¿Eliminar este salón?")) return;
  const salones = obtenerSalones().filter((s) => s.id !== id);
  guardarSalones(salones);
  mostrarSalones();
}

document.addEventListener("DOMContentLoaded", function () {
  const esAdmin = !!sessionStorage.getItem("token");

  if (esAdmin) {
    document.getElementById("formularioSalon").style.display = "block";
  }

  mostrarSalones();

  document
    .getElementById("altaSalonForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      const form = e.target;

      const nuevoSalon = {
        id: window.editandoSalonId || Date.now(),
        nombre: form.nombre.value,
        capacidad: +form.capacidad.value,
        ubicacion: form.ubicacion.value,
        precio: +form.precio.value,
        descripcion: form.descripcion.value,
        imagen: form.imagen.files[0]
          ? URL.createObjectURL(form.imagen.files[0])
          : "imagenes/default.jpg",
      };

      let salones = obtenerSalones();
      salones = window.editandoSalonId
        ? salones.map((s) => (s.id === window.editandoSalonId ? nuevoSalon : s))
        : [...salones, nuevoSalon];

      guardarSalones(salones);
      form.reset();
      mostrarSalones();

      if (window.editandoSalonId) {
        delete window.editandoSalonId;
        document.querySelector(
          "#altaSalonForm button[type='submit']"
        ).textContent = "Registrar Salón";
      }
    });
});
