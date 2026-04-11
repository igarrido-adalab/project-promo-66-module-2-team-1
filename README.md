# Proyecto 2. Web interactiva

## Resumen

En este proyecto, desarrollaremos una aplicación web cuyo tema será decidido por ustedes. El objetivo principal es permitir la creación de nuevos elementos, así como la consulta y renderización de los elementos ya creados en la web.

La página debe incluir un formulario para recopilar ciertos datos del usuario y diseñar una vista previa de la información proporcionada, adaptándose al tema seleccionado. Lo positivo de este proyecto es que se convertirá en una herramienta útil para ustedes. Será una aplicación web interactiva creada por ustedes mismas y que podrán utilizar para cualquier propósito.

## Objetivos

1. Aprender los conceptos básicos de programación (variables, estructuras de datos, condicionales, funciones, etc.)
2. Comprender cómo manipular el DOM de una página y responder a eventos del usuario
3. Manejar estructuras de datos complejas, con arrays y objetos
4. Realizar peticiones al servidor y almacenar datos en local
5. Implementar Scrum como marco de referencia para el desarrollo del producto, basándonos siempre en los valores de Agile como puntos clave del trabajo en equipo y la mejora continua
6. Mejorar la comunicación entre los miembros del equipo
7. Mejorar vuestras habilidades de comunicación en público al exponer el proyecto en la sesión final

## Caso de uso

Con esta web podréis mostrar que, a parte de maquetar, podéis crear una página web con la que interactuar y lograr algo más que una simple página informativa. Esto os permitirá mostrar vuestras habilidades a la hora de trabajar con JavaScript en GitHub, algo que en las empresas se valora bastante a la hora de escoger candidatas para puestos de programadoras web.

## Especificaciones

En el desarrollo de esta aplicación web usaremos las siguientes tecnologías:

- Uso avanzado de formularios HTML
- Maquetación usando CSS avanzado, como flex y grid
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo usando la estrategia mobile first
- Gestión de eventos en el navegador (al hacer click, pasa x, etc.)
- Acceso y envío de datos a un servidor
- Almacenamiento en local usando LocalStorage
- Uso de git para el control de versiones del proyecto
- Publicación del resultado en Internet usando GitHub Pages

El proyecto consta de _3 páginas_:

- Una página landing de bienvenida.
- Una página que incluye un formulario para la recopilación de datos y con su vista previa.
- Una página que muestra la tarjeta creada por la usuaria. Cuando la usuaria envíe el formulario, mostraremos una url que será esta página, donde la usuaria puede visualizar la tarjeta con los datos introducidos en el formulario.

La aplicación funciona siguiendo estos pasos:

2. Permitir que la usuaria complete un formulario. Cuando la usuaria va escribiendo en el formulario, previsualizamos lo que escribe en tiempo real, mostrando el texto maquetado tal como aparecerá en el resultado final.
3. Permitir que la usuaria consulte una página con los datos nuevos y comparta el resultado en Twitter (o en cualquier otra red social).

A continuación mostramos un caso de uso. Es solo un ejemplo, cada equipo debe decidir la temática y el uso de su página web.

![Generador de memes landing](https://1157775306-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGyc5HGnV7KnsVdydzxxT%2Fuploads%2Fgit-blob-6a4c1821a660aae8830e826c60e0e1c55f560df9%2Fmemes.png?alt=media) ![Generador de memes contacto](https://1157775306-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGyc5HGnV7KnsVdydzxxT%2Fuploads%2Fgit-blob-f34d05b6a28f0a0f4c0b1e5bfb5b76476aa97714%2Fmemes2.png?alt=media)

### Especificaciones del formulario

- El formulario debe contener **al menos seis campos de entrada**, adaptados al tema elegido.
- De estos campos de entrada, es obligatorio incluir un campo para seleccionar una **foto** y un **campo de tipo numérico** correspondiente a la propiedad `field1` (el número debe ser diferente de 0). Los otros campos pueden ser definidos por las programadoras según su criterio.
- Como **máximo**, el formulario puede contener **10 campos de entrada** (incluidos la foto y el campo de tipo numérico).

### Interacción

- Los campos del formulario deberán tener restricciones para su formato específico. Por ejemplo, un campo de tipo `tel` para el número móvil, un campo de tipo `email` para el correo electrónico y cualquier otro campo necesario con su formato correspondiente.
- Las modificaciones realizadas en el formulario (diseño y contenido) aparecerán automáticamente en una vista previa.
- Debe haber una sección colapsable, lo que significa que, mediante el uso de eventos, la sección puede ocultarse o mostrarse según lo desee la usuaria.
- Toda la información del formulario debe almacenarse en LocalStorage (almacenamiento local del navegador) de manera que, al recargar la página, los datos sigan disponibles. Además, debe haber un botón de _reset_ para borrar esta información. Para esto, definiremos una estructura de datos compleja (con arrays y objetos) que se guardará en el navega
- Para compartir en Twitter seguiremos 2 pasos:
  1. Al hacer clic en el botón de "Enviar", el formulario se enviará (_submit_) a una API que devolverá los datos del elemento creado correctamente.
  2. Se debe maquetar una página que muestre los datos del elemento creado previamente. Esta página debe contener un botón de "Compartir" que enlazará a Twitter, donde habrá un tweet con texto predefinido que incluirá la URL del nuevo elemento.

## Diseño

El diseño es totalmente libre, sin embargo te dejamos abajo esta imagen con un ejemplo de como podrías hacerlo:

![Awesome profile-cards landing](https://1157775306-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGyc5HGnV7KnsVdydzxxT%2Fuploads%2Fgit-blob-ef3532ce588b7c5209026c6308fce6008f629196%2Flanding.png?alt=media) ![Awesome profile-cards fill](https://1157775306-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGyc5HGnV7KnsVdydzxxT%2Fuploads%2Fgit-blob-b9edf79531d75f00c5d8ecf5a7f20adde14eab62%2Fform-design.png?alt=media) ![Awesome profile-cards fill](https://1157775306-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGyc5HGnV7KnsVdydzxxT%2Fuploads%2Fgit-blob-74faa296887b41c2e61abf9ff678b72f45dfa6d5%2Fs2-tablet.png?alt=media) ![Awesome profile-cards share 1](https://1157775306-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGyc5HGnV7KnsVdydzxxT%2Fuploads%2Fgit-blob-ffec4f0ecc3bd8cc5ccd348b9383da390d994b1f%2Fform-share-1.png?alt=media) ![Awesome profile-cards share 2](https://1157775306-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FGyc5HGnV7KnsVdydzxxT%2Fuploads%2Fgit-blob-06293b08f328bd5982075d9f49d1b641df53fce0%2Fform-share-2.png?alt=media)

## Recursos

Si en este punto algo no ha quedado del todo claro aquí tenéis un ejemplo similar con un generador de firmas de email para nuestra empresa. Este es un ejemplo real en el que, a través de un formulario, se actualiza la firma de email para los empleados de la empresa.

- [Generador de firmas de email](https://chucheria.github.io/EmailSignatureGenerator/index.html)
- [Hay un amigo en mi](https://nuria8890.github.io/ADALAB-project-module-2-team-3-HastaElInfinito/) Creado por Adalabers\*

### Creatividad

Además del diseño, que es totalmente personalizado, de manera opcional podéis usar un logo personalizado del equipo (o nombre del equipo) en el pie de página, tras la información de copyright, además de utilizar un fondo personalizado en la previsualización de los datos.

## Planificación del proyecto

### Sprints

Para la realización de este proyecto trabajaremos en _sprints_. Siguiendo los principios ágiles estableceremos pequeños ciclos iterativos de forma que al final de cada uno generemos valor perceptible por nuestros usuarios (los visitantes de la web). Dedicaremos el primer día a la planificación del sprint (_sprint planning_) y el resto a trabajar en el desarrollo del proyecto. El primer día, es necesario crear el tablero del proyecto y definir las tareas principales y los _working agreements_. [Puedes inspirarte en este ejemplo](https://github.com/orgs/Adalab/projects/436).

Al final haremos una _demo_ del proyecto para presentar los resultados conseguidos, y una _retrospectiva_ (_retro_) para evaluar nuestro trabajo en equipo y mejorar en el siguiente sprint.

### Historias de usuario

Para la gestión del proyecto, usaremos _historias de usuario_, que es una herramienta para definir las características de un producto.

### Primera. Landing y UI de la herramienta

- Desarrollar la página de landing
- Desarrollar una primera versión básica de la página del formulario y la tarjeta de previsualización, con la maquetación de la estructura básica (para desktop y móvil). Incluye el formulario con los colapsables y la vista previa
- Desarrollar la página de la vista de la tarjeta

> **NOTA**:\
> Para considerar terminada esta historia y todas las siguientes debéis tener publicada la web en GitHub Pages.

### Segunda. Versión interactiva

- Formulario interactivo: al modificar un campo del formulario, se actualiza la vista previa (excepto la foto),
- Realizar validaciones de datos del formulario: campos obligatorios, email, etc.

### Tercera. Compartir

- Actualización de la foto en la vista previa de la tarjeta, usando [el componente proporcionado](https://github.com/Adalab/Componente-de-foto-de-perfil-js)
- Añadir la funcionalidad de crear la tarjeta, enviando primero los datos al servidor (POST)
- Añadir la funcionalidad de compartir en Twitter
- Mostrar la tarjeta creada con la información previamente guardada en el servidor (GET)

### Cuarta. Versión offline

- Hacer que el contenido se almacene en LocalStorage del navegador

## Entrega

El formato de entrega de este proyecto será mediante la subida de este a la plataforma de GitHub. Para subirlo, se creará un repositorio **en tu perfil**. El nombre del repositorio deberá estar compuesto de las siguientes partes, todo ello separado por guiones:

- La palabra **project**.
- Letra de la promoción **promo-x**.
- Número del módulo **module-2**.
- Número del equipo **team-n**.

Por ejemplo:

- username/project-promo-u-module-2-team-1
- username/project-promo-u-module-2-team-3

De manera adicional, se deberá activar "GitHub Pages" en el proyecto para que este pueda ser visualizado como una web, es decir, que en el caso anterior, si alguien introdujese la dirección "<https://beta.adalab.es/project-promo-u-module-2-team-1/>" en un navegador web, este mostraría la web que se genera con el código del repositorio.

Por favor, asegúrate de mirar las fechas de entrega en el **calendario** del curso.

## Presentación

El último día del módulo presentaréis la versión final de este proyecto a vuestras compañeras y al equipo de Adalab. Cada equipo realizará una presentación de 5 minutos y posteriormente habrá 5 minutos de feedback por parte del público.

El objetivo es que practiquéis la realización de las demos del trabajo que estáis realizando que posteriormente tendréis que realizar en las empresas, y también que mejoréis vuestras habilidades de exposición en público, objetivo de desarrollo profesional del curso.

Para que la presentación salga bien es imprescindible una buena preparación. Por ello, durante el segundo sprint del módulo tendréis que asignar responsabilidades dentro del equipo relacionadas con la preparación de esta.

A continuación algunos elementos que os pueden ayudar a enfocar la presentación:

- En el público habrá personas con conocimientos técnicos y no técnicos.
- La parte central de la presentación será mostrar el software desarrollado funcionando, a ser posible en directo de forma dinámica o a través de un vídeo si no fuera posible.
- En este módulo, de los diferentes elementos adicionales que os proponemos, incluid qué necesidades cubre o qué problemas soluciona el producto, cuál es el beneficio principal que aporta y qué lo hace único comparado con otros productos parecidos del mercado.
- Todas las participantes del equipo deben hablar en la presentación (sin práctica no hay mejora).

Además de esto, para mejorar vuestras habilidades de exposición en público y hacer la presentación más rica, podréis incorporar otros elementos adicionales (son solo ideas, sentíos libres de innovar y ser creativas):

- Dejar muy claro quién ha sido vuestro cliente y qué fue lo que os pidió.
- Presentación de los diferentes integrantes del equipo desde un punto de vista profesional. Se trata de practicar vuestro "relato" profesional en versión muy corta. Que las personas asistentes conozcan quienes sois como profesionales.
- Aportaciones "únicas" de cada equipo al proyecto.
- Cómo ha sido la organización del equipo, el reparto de tareas y la coordinación a la hora de trabajar todas en el mismo código.
- Cuál de las tareas o los puntos ha sido el que más esfuerzo ha requerido.
- Cuál de las tareas o partes de la web es la que hace que el equipo esté más orgulloso.
- Las tecnologías qué habéis utilizado y para qué sirven, y algunas partes del código que habéis desarrollado que merezca la pena resaltar.
- La presentación debe tener un "buen inicio y un buen cierre" que nos haga a todos estar atentos y aplaudir... ahí os dejamos que echéis a volar vuestra imaginación.
- No habléis en primera persona de lo que habéis hecho, hablad del equipo.
- No mencionéis problemas, sino "retos" que os han hecho aprender y crecer.
- Os aconsejamos utilizar un lenguaje ni demasiado formal y técnico, ni demasiado informal. Nuestra audiencia puede ser muy variada.
