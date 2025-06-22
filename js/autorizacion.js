export async function login (username, password) {
    try {
        const response = await fetch("https://dummyjson.com/autorizacion/log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
            console.error ("Datos erroneos");
            return false;
        }
        console.log (response);
        const usuarios = await response.json();
        
        const userOk= usuarios.find(user => user.username === username && user.password === password);
        console.log("userOk : "+ JSON.stringify(userOk));
        if (userOk) {
            localStorage.setItem("usuario", JSON.stringify(userOk));
            return true;
        } else {
            return false;
        }
    }
    catch (error) {
        console.error("Error al cargar los usuarios:");
        return false;
    } }