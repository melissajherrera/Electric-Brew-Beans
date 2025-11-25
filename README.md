Electric Brew-Beans – README 
 Introducción
 Electric Brew-Beans es una aplicación web temática intergaláctica desarrollada en React + Vite.
Permite explorar cafés especiales, ver detalles individuales, agregarlos al carrito, navegar por distintas
secciones y utilizar un formulario de contacto. El enfoque está puesto en la estética cósmica, la
modularidad y la fluidez de la experiencia.

 Objetivos del Proyecto:
- Implementar componentes reutilizables en React.
- Integrar datos externos mediante una API real.
- Construir un carrito de compras funcional.
- Desarrollar una interfaz coherente, moderna y responsiva.
- Organizar el código de manera clara y escalable.

 Tecnologías Utilizadas
- React + Vite
- React Router DOM
- JavaScript ES6+
- CSS modular
- API SampleAPIs Coffee
- Imágenes optimizadas en /assets

 Instalación
1. Clonar el repositorio
2. Instalar dependencias:
`npm install`
3. Ejecutar en desarrollo:
`npm run dev`
4. Abrir en el navegador:
`http://localhost:5173`

 Funcionalidades Principales
 Catálogo de Cafés
- Obtiene datos desde una API externa.
- Combina cafés reales con cafés personalizados del proyecto.
- Muestra cards con imagen, descripción y botón de acción.
- Incluye estado de carga y manejo de errores.
 Vista Detallada de Café (CafeDetail)
- Presenta información ampliada del café seleccionado.
- Permite agregar el producto al carrito.
- Interfaz diseñada para destacar la imagen y el texto.
 Carrito de Compras
- Agregar productos desde cualquier sección.
- Aumentar, disminuir y eliminar cantidades.
- Cálculo de subtotal dinámico.
- Ícono flotante con contador visible.
- Página dedicada para visualizar el detalle del carrito.
- pago simulado 
 Navegación Completa
- Navbar fija con enlaces a Home, Cafés, Carrito y Nosotros.
- Manejo de rutas con React Router DOM.
- Página 404 personalizada para rutas inexistentes.
 Componentes Flotantes
- Carrito flotante que muestra la cantidad actual.
- Botón de WhatsApp flotante para contacto directo.
 Formulario
- Sección con inputs organizados y estilizados.
- Permite enviar datos de consulta desde la web.

 API Utilizada
**SampleAPIs Coffee – Hot Coffee Data**
URL: `https://api.sampleapis.com/coffee/hot`
Uso:
- Obtener lista de cafés calientes.
- Seleccionar los primeros 6.
- Fusionarlos con cafés temáticos propios del proyecto.

■ Estructura del Proyecto
src/
- App.jsx → rutas principales
- main.jsx → render de la app
- index.css → estilos globales
components/
- Navbar.jsx
- Footer.jsx
- FloatingCart.jsx
- FloatingWhatsapp.jsx
- Services.jsx
pages/
- Home.jsx
- Cafes.jsx
- CafeDetail.jsx
- Cart.jsx
- NotFound.jsx
assets/
- Imágenes, íconos y gráficos usados en el proyecto
styles/
- home.css
- cafes.css
- cafedetail.css
- navbar.css
- cart.css
- footer.css
- floatingcart.css
- floatingwpp.css
- buttons.css
- global.css
---
 Arquitectura del Código
 Separación por responsabilidad
Cada vista (Home, Cafes, Cart…) está aislada en su propia carpeta para mejorar la lectura y el
mantenimiento.
 Hooks utilizados
- **useState:** manejo de estados locales (carrito, carga, errores, etc.).
- **useEffect:** utilizado para la obtención de datos en Cafes.jsx.
 Rutas con React Router DOM
- Navegación sin recargar la página.
- Parámetros dinámicos para acceder por ID a los detalles del café.
- Redirección a NotFound para rutas erróneas.

 Diseño y UI
- Estética intergaláctica con tonos violetas y oscuros.
- Cards adaptables a dispositivos móviles.
- Hero con imágenes espaciales.
- Botones con estilización personalizada en `/styles/buttons.css`.
- Layout basado en flexbox y grillas responsivas.

 Posibles Mejoras Futuras
- Agregar sistema de autenticación de usuarios.
- Añadir favoritos para marcar cafés preferidos.
- Implementar un backend real para procesar compras.
- Añadir animaciones avanzadas (Framer Motion).
- Modo oscuro total.
- Sistema de reviews para cada café.
---
 Autoras
Bugnoni, Magali
Herrera, Melisa
Lening, Dalma
Encargadas del desarrollo, diseño, estructura del código, componentes y experiencia de usuario.

 Lema del Proyecto
“Electric Brew-Beans: donde el café y el cosmos se encuentran.”