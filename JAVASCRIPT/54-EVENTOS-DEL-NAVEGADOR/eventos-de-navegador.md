# <span style="color:lime"><center>Eventos de navegador.</center></span>

Generalmente, cuando ocurre un evento debido a una acción del usuario, se dispara un evento de navegador. Son eventos nativos específicos que realizan una cierta tarea y donde su objeto de evento tiene propiedades o métodos especiales para dicha tarea.

## <span style="color:orange">Tipos de eventos.</span>
Normalmente, el evento que se dispara es de tipo Event, sin embargo, existe una amplia lista de eventos más específicos. Existen muchos y muy variados.

Veamos una lista de algunos de los eventos de navegador disponibles (no están todos):

![alt text](./imagenes-eventos-de-navegador/image.png)
![alt text](./imagenes-eventos-de-navegador/image-1.png)
![alt text](./imagenes-eventos-de-navegador/image-2.png)
![alt text](./imagenes-eventos-de-navegador/image-3.png)

Recuerda que esto es sólo una pequeña lista de todos los eventos de navegador que existen.

## <span style="color:orange">Ejemplo: PointerEvent.</span>
Vamos a realizar un ejemplo con el evento click. Nuestro código nos permitirá hacer click con el ratón en cualquier parte de la pantalla. Nos mostrará los siguientes datos:

   - El número de veces consecutivas que hemos hecho click: event.detail
   - Las coordenadas de X donde has hecho click en la pantalla: event.x
   - Las coordenadas de Y donde has hecho click en la pantalla: event.y

![alt text](./imagenes-eventos-de-navegador/image-4.png)

En la función action realizamos una [desestructuración](https://lenguajejs.com/javascript/objetos/desestructuracion-objetos/) para simplificar el código y modificamos el contenido de texto del elemento <span> cada vez que hacemos click.
