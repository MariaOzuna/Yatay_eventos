export async function login(username, password) {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      console.error("Datos erroneos");
      return false;
    }
    const user = await response.json();
    console.log("Usuario autenticado:", user);
    sessionStorage.setItem("token", user.token);
    sessionStorage.setItem("usuario", user.username);

    return true;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return false;
  }
}
