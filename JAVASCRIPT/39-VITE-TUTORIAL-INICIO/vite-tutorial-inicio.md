# <span style="color:lime"><center>Tutorial inicial de Vite.</center></span>

Vite se define como una herramienta de frontend que te ayudará a crear tus proyectos de forma agnóstica (sin atarte a ningún framework concreto) y que su desarrollo y construcción final sea lo más sencilla y cómoda posible. Está desarrollada por Evan You, el creador de [Vue](https://lenguajejs.com/vuejs/).

Actualmente, Vite soporta la creación tanto de proyectos vanilla (sin utilizar frameworks), como proyectos utilizando Vue, React, Preact, Svelte o Lit (tanto usando Javascript como Typescript).

## <span style="color:orange">Crear un proyecto con Vite.</span>
Para comenzar, simplemente necesitamos tener instalado NodeJS. Utilizaremos npm para comenzar el proyecto. Escribimos desde una terminal:

![alt text](./imagenes-vite-tutorial-inicio/image.png)

El comando npm create vite hará toda la magia por nosotros. En nuestro ejemplo, demo-project sería el nombre de la carpeta del proyecto, por lo que este comando ya se encargará de crear la carpeta, ni siquiera tendremos que crearla nosotros.

Se nos advertirá que es necesario instalar el paquete create-vite de no tenerlo instalado, que es el asistente encargado de crear la aplicación web. Al responder afirmativamente, nos aparecerá un menú para seleccionar que plantilla queremos utilizar (al elegir una, luego nos preguntará si queremos la versión javascript o typescript).

## <span style="color:orange">Plantillas de Vite.</span>
Si no queremos que nos aparezca ese menú interactivo, es posible indicar un parámetro opcional --validacionCard para especificar directamente la plantilla a utilizar sin que nos salte el asistente:

![alt text](./imagenes-vite-tutorial-inicio/image-1.png)

Las plantillas que tenemos disponibles en Vite son las siguientes (son las que se establecen al elegir las opciones en el menú):

![alt text](./imagenes-vite-tutorial-inicio/image-2.png)

Una vez hecho el proceso, comprobaremos que la tarea de creación del proyecto es prácticamente instantánea. Esto ocurre así porque Vite no realiza el proceso de instalación de paquetes automáticamente, por lo que tendremos que hacerlos nosotros manualmente de forma posterior:

![alt text](./imagenes-vite-tutorial-inicio/image-3.png)

Con esto ya tendremos el proyecto listo para arrancarlo con el script npm run dev y comenzar a desarrollar. Ten en cuenta que en todos los proyectos que generes tendrás un script dev que lanza el modo de desarrollo de Vite y, por otro lado, tendrás un script build que lanza el modo de producción de Vite, que es el que genera la subida en la carpeta dist, que es la que irá a producción.

## <span style="color:orange">El fichero vite.config.js.</span>
En algunos proyectos de Vite encontrarás un fichero vite.config.js. Se trata de un fichero de configuración donde puedes establecer algunos detalles del funcionamiento del empaquetador en el proyecto actual. La estructura general de este fichero es la siguiente:

![alt text](./imagenes-vite-tutorial-inicio/image-4.png)

Dependiendo de la plantilla utilizada, este fichero de configuración puede ser diferente o incluso no existir (como es en el caso de los proyectos de Javascript vanilla).

Si te interesa utilizar un script que funcione con Vite y ya te proporcione la estructura de carpetas y los linters de Javascript y CSS preconfigurados, echa un vistazo a [mkweb](https://manz.dev/software/mkweb).



