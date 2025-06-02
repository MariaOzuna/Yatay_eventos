function verSalon(id) {
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    const salon = salones.find(s => s.id === id);
    if (!salon) {
        alert("Salón no encontrado");
        return;
    }
    alert(`Nombre: ${salon.nombre}\nUbicación: ${salon.ubicacion}\nCapacidad: ${salon.capacidad}\nPrecio: ${salon.precio}\nDescripción: ${salon.descripcion}`);
}

function editarSalon(id) {
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    const salon = salones.find(s => s.id === id);
    if (!salon) {
        alert("Salón no encontrado");
        return;
    }
    // Pre-cargar los datos en el formulario
    document.getElementById('nombre').value = salon.nombre;
    document.getElementById('ubicacion').value = salon.ubicacion;
    document.getElementById('capacidad').value = salon.capacidad;
    document.getElementById('precio').value = salon.precio;
    document.getElementById('descripcion').value = salon.descripcion;
    // Guardar el id en un input hidden o variable global para saber que estamos editando
    window.editandoSalonId = id;

    // Opcional: Cambiar el texto del botón a "Actualizar"
    const btn = document.querySelector('button[type="submit"]');
    btn.textContent = "Actualizar Salón";
}

function eliminarSalon(id) {
    if (!confirm("¿Seguro que quieres eliminar este salón?")) return;
    let salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones = salones.filter(s => s.id !== id);
    localStorage.setItem("salones", JSON.stringify(salones));
    mostrarSalones();
}
