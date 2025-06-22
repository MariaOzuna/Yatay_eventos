document.addEventListener("DOMContentLoaded", async () => {
    const tabla = document.querySelector("#UsuariosTabla tbody");
  
    try {
      const response = await fetch("https://dummyjson.com/users");
  
      if (response.ok) {
        const data = await response.json(); // analizamos los datos del JSON
        const usuarios = data.users;
  
        usuarios.forEach(usuario => {
          const fila = document.createElement("tr");
          fila.innerHTML = `
            <td>${usuario.firstName}</td>
            <td>${usuario.lastName}</td>
            <td>${usuario.phone}</td>
            <td>${usuario.email}</td>
          `;
          tabla.appendChild(fila);
        });
      } else {
        console.error("Error al cargar los usuarios:", response.status);
        throw Error("error al cargar los usuarios");
      }
  
    } catch (error) {
      console.error("Error al cargar los usuarios:", error);
    }
  });
  
  