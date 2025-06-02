//guardar datos
localStorage.setItem('usuario', 'Alexis');

// Recuperar datos
const usuario = localStorage.getItem('usuario');

//guardar reserva
const reservaTemoral = {
    salon: 'Salon Ava',
    fecha: '31-10-25',
};
localStorage.setItem('reserva', JSON.stringify(reservaTemoral));