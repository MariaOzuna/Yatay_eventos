--README - Yatay Eventos--

--Grupo 35:
--Integrantes:

- Deagustini, Alexis Maximiliano Rodrigo
- Morales, Maria Rosa
- Ozuna, Maria Ofelia
- Sandoval, Adriana Noemí

--Descripción del Proyecto--
Yatay Eventos es una plataforma web para la gestión y reserva de salones de fiestas infantiles. El sitio permite a los usuarios explorar salones disponibles, calcular presupuestos y contactar al equipo de Yatay Eventos. Además, cuenta con un panel de administración para gestionar salones, servicios y presupuestos.

--Características Principales--
-Páginas Informativas: Inicio, Acerca de, Servicios y Contacto.
-Gestión de Salones: Visualización y administración de salones disponibles.
-Presupuestos: Cálculo de presupuestos personalizados para eventos.
-Panel de Administración: Acceso exclusivo para administradores con funcionalidades CRUD.
-Autenticación: Sistema de login para administradores.

--Estructura del Proyecto--
text
yatay-eventos/
├── css/
│   └── styles.css            # Estilos globales
├── js/
│   ├── autorizacion.js       # Lógica de autenticación
│   ├── log.js                # Manejo del formulario de login
│   ├── presupuestos.js       # Gestión de presupuestos
│   ├── salones.js            # CRUD de salones
│   ├── servicios.js          # CRUD de servicios
│   └── usuarios.js           # Listado de usuarios (demo)
├── imagenes/                 # Assets visuales
├── index.html                # Página de inicio
├── institucional.html        # Información sobre Yatay Eventos
├── servicios.html            # Gestión de servicios
├── altaSalon.html            # Gestión de salones
├── contacto.html             # Formulario de contacto
├── login.html                # Página de inicio de sesión
├── presupuestos.html         # Cálculo de presupuestos
├── administradores.html      # Panel de administración
└── usuarios.html             # Listado de usuarios (demo)

--Tecnologías Utilizadas--
Frontend: HTML5, CSS3, JavaScript.
Frameworks: Bootstrap 5.
Almacenamiento: LocalStorage para datos persistentes.
API Externa: DummyJSON para autenticación y datos de prueba.

--Instalación y Uso--
Clona el repositorio o descarga los archivos.
Abre el archivo index.html en tu navegador preferido.

--Para acceder al panel de administración:--
Usuario: kminchelle
Contraseña: 0lelpR

--Funcionalidades Clave--
--Visitantes:
Explorar salones disponibles.
Calcular presupuestos.
Enviar consultas a través del formulario de contacto.

--Administradores:
Gestionar salones (agregar, editar, eliminar).
Administrar servicios adicionales.
Ver presupuestos generados por los usuarios.