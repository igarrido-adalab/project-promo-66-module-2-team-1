# Historias de Usuario - Proyecto Profile Cards

### Bloque 1: Landing y Estructura Base (Sprint 1)

1. **Página de bienvenida**
   - **Descripción:**
     COMO usuaria,
     QUIERO acceder a una página de landing,
     PARA conocer el propósito de la aplicación y poder navegar hacia el generador de tarjetas.
   - **Criterios de aceptación:**
     - [ ] La página carga correctamente en la raíz del proyecto.
     - [ ] Presenta claramente el nombre del proyecto y su funcionalidad principal.
     - [ ] Incluye un botón o enlace de "Comenzar" que redirige a la página del generador.
   - **Tareas técnicas:**
     - [ ] Maquetar la estructura HTML semántica de la landing (`index.html`).
     - [ ] Crear el archivo de estilos base y variables CSS (colores, tipografías) para asegurar consistencia.
     - [ ] Implementar el diseño visual con CSS (Layout y componentes).
     - [ ] Configurar el enlace de navegación hacia la página del generador.
   - **Oportunidad DRY:** Definir variables CSS globales para que sean reutilizadas en todas las páginas del proyecto.

2. **Maquetación del generador (Versión móvil)**
   - **Descripción:**
     COMO usuaria móvil,
     QUIERO ver el formulario y la tarjeta de previsualización adaptados a pantallas pequeñas,
     PARA poder introducir mis datos cómodamente desde mi teléfono siguiendo la estrategia _Mobile First_.
   - **Criterios de aceptación:**
     - [ ] La estructura se adapta a anchos de pantalla de dispositivos móviles (típicamente < 768px).
     - [ ] El formulario y la tarjeta de previsualización se muestran en una sola columna (uno debajo de otro).
     - [ ] No existe desbordamiento horizontal (_scroll_ lateral).
     - [ ] Los campos de entrada y botones tienen un tamaño adecuado para interacción táctil.
   - **Tareas técnicas:**
     - [ ] Crear la estructura HTML del generador (`create.html` o similar) con secciones diferenciadas para Header, Preview, Form (Diseña, Rellena y Comparte) y Footer.
     - [ ] Maquetar el Header (versión móvil).
     - [ ] Maquetar la Preview (versión móvil).
     - [ ] Maquetar la sección Diseña del formulario (versión móvil).
     - [ ] Maquetar la sección Rellena del formulario (versión móvil).
     - [ ] Maquetar la sección Comparte del formulario (versión móvil).
     - [ ] Maquetar el Footer (versión móvil).
     - [ ] Implementar el layout CSS Mobile First usando Flexbox para una disposición vertical.
     - [ ] Maquetar los inputs del formulario siguiendo los estándares de accesibilidad (labels, placeholders).
     - [ ] Diseñar el componente "Tarjeta" como un elemento independiente de HTML y CSS.

3. **Maquetación del generador (Versión tablet/escritorio)**
   - **Descripción:**
     COMO usuaria de ordenador o tablet,
     QUIERO ver una disposición optimizada del formulario y la previsualización en paralelo,
     PARA aprovechar el espacio de mi pantalla grande al crear mi tarjeta.
   - **Criterios de aceptación:**
     - [ ] Se aplican Media Queries para anchos de pantalla mayores a 768px y 1280px.
     - [ ] El formulario y la tarjeta de previsualización se muestran en paralelo (disposición de columnas).
     - [ ] El diseño visual es equilibrado y aprovecha el espacio horizontal sin estirar excesivamente los elementos (un tope al ancho del formulario y la tarjeta de previsualización centrada).
   - **Tareas técnicas:**
     - [ ] Añadir Media Queries específicas para el Header (para tablets y escritorio).
     - [ ] Añadir Media Queries específicas para la Preview (para tablets y escritorio).
     - [ ] Añadir Media Queries específicas para la sección Diseña del formulario (para tablets y escritorio).
     - [ ] Añadir Media Queries específicas para la sección Rellena del formulario (para tablets y escritorio).
     - [ ] Añadir Media Queries específicas para la sección Comparte del formulario (para tablets y escritorio).
     - [ ] Añadir Media Queries específicas para el Footer (para tablets y escritorio).
     - [ ] Ajustar el contenedor principal a un layout de dos columnas (ej. CSS Grid o Flex-row).
     - [ ] Optimizar márgenes y espaciados para pantallas grandes.

4. **Secciones colapsables**
   - **Descripción:** COMO usuaria, QUIERO poder abrir y cerrar las secciones del formulario, PARA mantener la interfaz organizada y centrarme en el bloque de datos que estoy rellenando.
   - **Criterios de aceptación:**
     - [ ] Al hacer clic en la cabecera de una sección (ej. "Rellena"), esta se despliega y las demás se cierran automáticamente.
     - [ ] Existe un indicador visual (icono de flecha) que cambia de dirección según la sección esté abierta o cerrada.
     - [ ] El contenido oculto no interfiere con el flujo de la página ni es accesible mediante el tabulador mientras está cerrado.
   - **Tareas técnicas:**
     - [ ] Añadir clases de estado en CSS para ocultar/mostrar contenido (ej. `.collapsed`).
     - [ ] Crear una función en JS que gestione el evento 'click' en las cabeceras.
     - [ ] Implementar la lógica para que solo una sección esté abierta a la vez (Acordeón).
   - **Oportunidad SOLID:** Crear una función genérica `toggleSection` que reciba el elemento a colapsar, separando la gestión del evento de la manipulación del DOM.

### Bloque 2: Interactividad y Validación (Sprint 1)

5. **Previsualización en tiempo real**
   - **Descripción:** COMO usuaria, QUIERO que los textos que escribo en el formulario se actualicen instantáneamente en la tarjeta de previsualización, PARA comprobar el resultado visual de mis datos sin cambiar de página.
   - **Criterios de aceptación:**
     - [ ] El texto de la tarjeta cambia inmediatamente al escribir en campos como "Nombre", "Puesto", etc.
     - [ ] Si un campo está vacío, la tarjeta muestra un texto de relleno por defecto (ej. "Nombre Apellido").
     - [ ] Los enlaces de redes sociales en la tarjeta se actualizan con la información introducida.
   - **Tareas técnicas:**
     - [ ] Definir un objeto de datos centralizado en JS que represente el estado de la tarjeta.
     - [ ] Crear listeners para el evento `input` en todos los campos del formulario.
     - [ ] Crear una función `updatePreview` que sincronice el objeto de datos con los nodos del DOM de la tarjeta.
   - **Oportunidad DRY:** Usar un único listener para el formulario completo (delegación de eventos) y mapear los IDs de los inputs con las claves del objeto de datos.

6. **Validación de campos**
   - **Descripción:** COMO usuaria, QUIERO que el formulario me indique si he introducido datos erróneos o si faltan campos obligatorios, PARA garantizar que mi tarjeta final sea correcta.
   - **Criterios de aceptación:**
     - [ ] El campo de email valida que el formato sea correcto (presencia de @ y dominio).
     - [ ] El campo numérico `field1` valida que sea diferente de 0.
     - [ ] Los campos marcados como obligatorios muestran un mensaje de error o resalte visual si se dejan vacíos.
     - [ ] Los tipos de input HTML son semánticamente correctos (`tel`, `email`, `url`).
   - **Tareas técnicas:**
     - [ ] Configurar los atributos HTML de validación nativa (`required`, `pattern`).
     - [ ] Implementar estilos CSS para los estados `:invalid` y `:valid`.
     - [ ] Crear una función de validación personalizada en JS para requisitos complejos (ej. `field1 != 0`).

### Bloque 3: Funcionalidades Avanzadas y Compartir (Sprint 2)

7. **Subida de foto de perfil**
   - **Descripción:** COMO usuaria, QUIERO poder seleccionar una imagen de mi dispositivo, PARA personalizar mi tarjeta de visita con mi fotografía.
   - **Criterios de aceptación:**
     - [ ] El botón de "Añadir imagen" abre el selector de archivos del sistema operativo.
     - [ ] La imagen seleccionada se muestra en la miniatura del formulario.
     - [ ] La imagen seleccionada se visualiza correctamente dentro de la tarjeta de previsualización.
   - **Tareas técnicas:**
     - [ ] Implementar el input de tipo `file` oculto y vincularlo al botón personalizado.
     - [ ] Usar la API `FileReader` de JS para convertir la imagen en una URL de datos (base64).
     - [ ] Actualizar la propiedad `photo` en el objeto de estado y refrescar la previsualización.

8. **Generación de tarjeta en el servidor**
   - **Descripción:** COMO usuaria, QUIERO enviar los datos de mi formulario al servidor mediante un botón, PARA obtener una URL única y permanente de mi tarjeta virtual.
   - **Criterios de aceptación:**
     - [ ] Al pulsar "Crear tarjeta", se envía una petición POST a la API con la estructura de datos definida.
     - [ ] Se muestra un estado visual de "Cargando" mientras se espera la respuesta.
     - [ ] Tras el éxito, se muestra la URL devuelta por el servidor y se habilita la sección de compartir.
   - **Tareas técnicas:**
     - [ ] Crear un servicio o función `sendDataToServer` que utilice `fetch` para realizar el POST.
     - [ ] Gestionar la respuesta del servidor (éxito/error) y actualizar la UI con el enlace resultante.
     - [ ] Implementar un componente de feedback visual (spinner o mensaje de carga).
   - **Oportunidad SOLID:** Aislar la lógica de comunicación con la API en un módulo independiente (Patrón Servicio).

9. **Compartir en Twitter**
   - **Descripción:** COMO usuaria, QUIERO tener un botón para compartir mi nueva tarjeta en Twitter, PARA difundir mi perfil profesional en redes sociales de forma sencilla.
   - **Criterios de aceptación:**
     - [ ] El botón de Twitter solo es funcional después de haber generado la tarjeta con éxito.
     - [ ] Al hacer clic, se abre una nueva ventana/pestaña hacia Twitter.
     - [ ] El tweet incluye un texto predefinido atractivo y la URL de la tarjeta generada.
   - **Tareas técnicas:**
     - [ ] Crear una función que genere la URL de intención de Twitter (`twitter.com/intent/tweet`).
     - [ ] Controlar la visibilidad y estado de habilitación del botón de compartir en función de la respuesta de la API.

10. **Visualización de tarjeta final**
    - **Descripción:** COMO usuaria, QUIERO acceder a una página dedicada que muestre los datos recuperados del servidor, PARA verificar que mi tarjeta se visualiza correctamente para otros usuarios.
    - **Criterios de aceptación:**
    * [ ] La página carga los datos mediante una petición GET usando el ID/URL de la tarjeta.
    * [ ] La maquetación de esta página es idéntica a la previsualización final del generador.
    * [ ] La página es accesible de forma pública para cualquier persona con el enlace.

- **Tareas técnicas:**
  - [ ] Crear una nueva página HTML o lógica de ruta para la vista individual.
  - [ ] Implementar la petición GET al servidor para recuperar los datos por ID.
  - [ ] Reutilizar la función `updatePreview` o el componente "Tarjeta" para renderizar los datos recibidos.
- **Oportunidad DRY:** El componente visual de la tarjeta y su lógica de renderizado deben ser compartidos entre el generador y la página final.

### Bloque 4: Persistencia y Experiencia de Usuario (Sprint 2)

11. **Persistencia local (LocalStorage)**
    - **Descripción:** COMO usuaria, QUIERO que mis datos se guarden automáticamente en el navegador mientras relleno el formulario, PARA no perder el progreso si recargo la página accidentalmente.
    - **Criterios de aceptación:**
    * [ ] Los datos se guardan en LocalStorage tras cada cambio en el formulario.
    * [ ] Al cerrar y volver a abrir el navegador o recargar la página, el formulario recupera todos los datos guardados.
    * [ ] La tarjeta de previsualización se actualiza automáticamente con los datos recuperados al cargar la página.

- **Tareas técnicas:**
  - [ ] Crear funciones `saveToLocalStorage` y `getFromLocalStorage`.
  - [ ] Invocar el guardado dentro del ciclo de actualización de datos del formulario.
  - [ ] Implementar la carga inicial de datos al arrancar la aplicación.

12. **Reinicio de formulario (Reset)**
    - **Descripción:** COMO usuaria, QUIERO disponer de un botón de reset, PARA borrar todos los datos introducidos y comenzar una tarjeta nueva desde cero rápidamente.
    - **Criterios de aceptación:**
    * [ ] Al pulsar el botón "Reset", todos los campos del formulario vuelven a estar vacíos o a su estado inicial.
    * [ ] Se eliminan los datos correspondientes de LocalStorage.
    * [ ] La tarjeta de previsualización vuelve a mostrar los textos e imagen por defecto.

- **Tareas técnicas:**
  - [ ] Crear una función `resetData` que restaure el objeto de estado a sus valores iniciales.
  - [ ] Limpiar el LocalStorage.
  - [ ] Forzar una actualización de la UI (formulario y previsualización).
