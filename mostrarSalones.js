//mostrar salones
mostraSalones();
function mostraSalones() {
    const tablaBody = document.getElementById("#tablaSalones tbody");
    tablaBody.innerHTML = ""; // Limpiar la tabla antes de mostrar los salones

    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    
    salones.forEach((salon, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${salon.nombre}</td>
            <td>${salon.ubicacion}</td>
            <td>${salon.capacidad}</td>
            <td>${salon.precio}</td>
            <td>${salon.descripcion}</td>
        `;
    
        
        
        
        tablaBody.appendChild(fila);
    });
}
