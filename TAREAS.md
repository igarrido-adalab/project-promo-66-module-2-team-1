# Historias de Usuario - Generador de Tarjetas de Mascotas

Este documento detalla las historias de usuario para el desarrollo de la aplicación web, organizadas por hitos de desarrollo y con sus respectivos criterios de aceptación y tareas técnicas.

## Hito 1: Estructura y Maquetación (Mobile First)

### 1. Maquetación Base de la Versión Móvil
**COMO** usuaria de móvil,
**QUIERO** que la aplicación tenga un diseño adaptado a pantallas pequeñas,
**PARA QUE** pueda crear la tarjeta de mi mascota cómodamente desde mi teléfono.

**Criterios de Aceptación:**
- [ ] La interfaz se visualiza correctamente en dispositivos con un ancho de 320px en adelante.
- [ ] No existe scroll horizontal en la página.
- [ ] Los elementos (formulario y vista previa) aparecen apilados verticalmente.
- [ ] Los botones y campos de entrada tienen un tamaño adecuado para ser pulsados con el dedo.

**Tareas Técnicas:**
- [ ] Crear la estructura HTML5 semántica (header, main, section, form, footer).
- [ ] Configurar el archivo de variables SASS/CSS (colores, fuentes, espaciados).
- [ ] Implementar el reset de estilos y la tipografía base.
- [ ] Maquetar el formulario y la tarjeta de previsualización usando Flexbox para disposición vertical.

### 2. Adaptación para Tablet y Escritorio
**COMO** usuaria de ordenador,
**QUIERO** que la interfaz se reorganice para aprovechar el espacio de pantallas grandes,
**PARA QUE** la experiencia de uso sea óptima en cualquier dispositivo.

**Criterios de Aceptación:**
- [ ] En pantallas de escritorio, el formulario y la vista previa aparecen uno al lado del otro (diseño en columnas).
- [ ] El diseño se ajusta fluidamente mediante Media Queries sin romper la estructura.
- [ ] Las imágenes y tipografías escalan proporcionalmente al tamaño de la pantalla.

**Tareas Técnicas:**
- [ ] Definir los breakpoints para tablet (768px) y escritorio (1024px).
- [ ] Aplicar CSS Grid o Flexbox para cambiar el flujo a dos columnas en pantallas grandes.
- [ ] Ajustar el ancho máximo del contenedor principal y centrarlo en la página.
- [ ] Refactorizar el CSS para evitar duplicidad de estilos (principio DRY).

### 3. Página de Bienvenida (Landing)
**COMO** nueva usuaria,
**QUIERO** ver una página de inicio atractiva,
**PARA QUE** pueda entender rápidamente para qué sirve la aplicación y cómo empezar a usarla.

**Criterios de Aceptación:**
- [ ] Existe un botón o enlace claro de "Comenzar" que lleva a la página del generador.
- [ ] Se muestra un resumen visual o textual de las funcionalidades (Nombre, foto, redes sociales).
- [ ] El diseño de la landing es coherente con el resto de la aplicación.

**Tareas Técnicas:**
- [ ] Crear el archivo `index.html` para la landing.
- [ ] Maquetar la sección Hero con el título del proyecto y una imagen descriptiva.
- [ ] Implementar el sistema de navegación entre la landing y el generador.
- [ ] Crear un parcial de footer reutilizable para ambas páginas.

## Hito 2: Formulario e Interactividad

### 4. Introducción de Datos de la Mascota
**COMO** dueña de una mascota,
**QUIERO** rellenar un formulario con su nombre, edad, peso, raza e Instagram,
**PARA QUE** esos datos aparezcan en su tarjeta de presentación.

**Criterios de Aceptación:**
- [ ] El formulario contiene al menos 6 campos de entrada específicos para mascotas.
- [ ] El campo "Peso" o "Edad" es de tipo numérico y no permite valores negativos.
- [ ] El campo "Instagram" tiene el formato adecuado para un enlace o nombre de usuario.
- [ ] Se muestran mensajes de error si se intenta enviar el formulario con campos obligatorios vacíos.

**Tareas Técnicas:**
- [ ] Definir un objeto de JavaScript único para almacenar los datos de la mascota (Principio de Responsabilidad Única).
- [ ] Implementar los inputs en HTML con etiquetas `name` coincidentes con las claves del objeto de datos.
- [ ] Añadir validaciones de tipo y obligatoriedad en HTML5.
- [ ] Crear una función de validación personalizada para manejar errores antes del envío.

### 5. Vista Previa en Tiempo Real
**COMO** usuaria,
**QUIERO** ver cómo se actualiza la tarjeta automáticamente mientras escribo en el formulario,
**PARA QUE** pueda comprobar cómo queda el diseño sin tener que esperar al final.

**Criterios de Aceptación:**
- [ ] Al escribir en el input de "Nombre", el texto cambia instantáneamente en la tarjeta de previsualización.
- [ ] Si un campo se deja vacío, la tarjeta muestra un texto por defecto (ej: "Nombre de mi mascota").
- [ ] Todos los campos de texto (Raza, edad, etc.) se reflejan en la vista previa sin necesidad de pulsar un botón de "Guardar".

**Tareas Técnicas:**
- [ ] Crear un módulo `preview.js` encargado exclusivamente de renderizar la tarjeta.
- [ ] Implementar delegación de eventos (`input`) en el formulario para capturar cambios de forma eficiente.
- [ ] Programar la lógica de "texto por defecto" cuando los campos estén vacíos.
- [ ] Asegurar que la función de renderizado no tenga efectos secundarios (Función Pura siempre que sea posible).

### 6. Secciones Colapsables del Formulario
**COMO** usuaria,
**QUIERO** que el formulario esté dividido en secciones (Diseña, Rellena, Comparte) que pueda abrir y cerrar,
**PARA QUE** la interfaz sea más limpia y no me abrume ver todos los campos a la vez.

**Criterios de Aceptación:**
- [ ] Al hacer clic en el encabezado de una sección, esta se despliega y las demás se cierran automáticamente (efecto acordeón).
- [ ] Existe un indicador visual (como una flecha) que cambia de dirección al abrir/cerrar la sección.
- [ ] Por defecto, la primera sección ("Diseña") aparece abierta al cargar la página.

**Tareas Técnicas:**
- [ ] Crear clases CSS para los estados `.collapsed` y `.active`.
- [ ] Implementar un módulo `collapsibles.js` para gestionar el estado de los paneles.
- [ ] Añadir transiciones CSS para animar la apertura y el cierre.
- [ ] Utilizar constantes para identificar las secciones y evitar "magic numbers" o strings sueltos.

### 7. Función de Limpieza (Reset)
**COMO** usuaria,
**QUIERO** tener un botón para borrar todos los datos introducidos,
**PARA QUE** pueda empezar una tarjeta nueva desde cero rápidamente si me equivoco.

**Criterios de Aceptación:**
- [ ] Al pulsar el botón "Reset", todos los campos del formulario quedan vacíos o con sus valores iniciales.
- [ ] La tarjeta de previsualización vuelve a su estado original por defecto.
- [ ] Se borra también la imagen que se haya subido previamente.

**Tareas Técnicas:**
- [ ] Crear una función `resetData` que restablezca el objeto de datos a su estado inicial.
- [ ] Vincular el evento `click` del botón reset con la limpieza del DOM y la actualización del preview.
- [ ] Desacoplar la lógica de reset de la lógica de guardado.

## Hito 3: Conexión con Servidor y Redes Sociales

### 8. Subida de Fotografía
**COMO** usuaria,
**QUIERO** poder seleccionar y subir una foto de mi mascota desde mi dispositivo,
**PARA QUE** la tarjeta sea personalizada y muestre a mi animal.

**Criterios de Aceptación:**
- [ ] El botón de añadir imagen abre el explorador de archivos del sistema.
- [ ] Una vez seleccionada, la imagen aparece correctamente encuadrada en la tarjeta de previsualización.
- [ ] Se muestra una miniatura de la imagen seleccionada junto al botón de subida.

**Tareas Técnicas:**
- [ ] Implementar un input de tipo `file` oculto y activarlo mediante un botón personalizado.
- [ ] Crear una utilidad `fileReader.js` para procesar la imagen y convertirla a Base64.
- [ ] Actualizar la propiedad `photo` del objeto de datos de la mascota.
- [ ] Aplicar estilos CSS `object-fit: cover` para asegurar el correcto encuadre de la imagen.

### 9. Generación de Tarjeta Virtual (Servidor)
**COMO** usuaria,
**QUIERO** enviar los datos a un servidor para guardar la tarjeta,
**PARA QUE** se genere un enlace único y permanente que pueda compartir con otras personas.

**Criterios de Aceptación:**
- [ ] Al pulsar "Crear tarjeta", se realiza una petición POST a la API con los datos del formulario.
- [ ] Si la respuesta es exitosa, se muestra la URL generada por el servidor.
- [ ] Si hay un error, se muestra un mensaje informativo a la usuaria.

**Tareas Técnicas:**
- [ ] Crear un módulo `api.js` que gestione las llamadas a servicios externos (Inyección de Dependencias).
- [ ] Implementar la función `sendData` usando `fetch` y manejando errores con `try/catch`.
- [ ] Gestionar el estado de carga (bloquear botones, mostrar spinner) durante la petición.
- [ ] Mostrar el contenedor de "resultado" solo cuando la petición haya tenido éxito.

### 10. Compartir en Twitter
**COMO** usuaria orgullosa de mi mascota,
**QUIERO** publicar el enlace de la tarjeta directamente en Twitter con un mensaje predefinido,
**PARA QUE** mis seguidores puedan ver la ficha de mi mascota.

**Criterios de Aceptación:**
- [ ] El botón de Twitter solo se activa una vez se ha generado la URL de la tarjeta correctamente.
- [ ] Al pulsar el botón, se abre una nueva pestaña de Twitter con el texto: "¡Mira la tarjeta de mi mascota! [URL]".

**Tareas Técnicas:**
- [ ] Construir la URL de compartir usando `encodeURIComponent` para el texto y la URL.
- [ ] Implementar la lógica para abrir el enlace en una ventana nueva (`target="_blank"`).
- [ ] Cambiar visualmente el botón de Twitter para indicar si está listo para ser pulsado.

## Hito 4: Persistencia y Experiencia de Usuario

### 11. Autoguardado de Datos (LocalStorage)
**COMO** usuaria,
**QUIERO** que los datos del formulario se guarden en el navegador,
**PARA QUE** si cierro la pestaña o refresco la página por error, no pierda la información que ya había escrito.

**Criterios de Aceptación:**
- [ ] Al recargar la página (F5), el formulario mantiene los datos que se escribieron antes del refresco.
- [ ] La tarjeta de previsualización también se carga con los datos guardados en LocalStorage.
- [ ] Al pulsar el botón "Reset", los datos se eliminan tanto del formulario como del LocalStorage.

**Tareas Técnicas:**
- [ ] Crear un módulo `storage.js` para centralizar la interacción con `localStorage`.
- [ ] Implementar una función de "guardado automático" que se ejecute en cada cambio del formulario.
- [ ] Programar la lógica de recuperación de datos al inicio de la aplicación.
- [ ] Sincronizar el estado del objeto de datos con el contenido de LocalStorage de forma consistente.
