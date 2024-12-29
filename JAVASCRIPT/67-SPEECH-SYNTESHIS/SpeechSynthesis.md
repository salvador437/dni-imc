# <span style="color:lime"><center>SpeechSynthesis (TTS)</center></span>

Los navegadores tienen un sistema de síntesis de voz integrado en el navegador, denominado TTS (text-to-speech), el cuál permite leer textos en múltiples idiomas y con diferentes configuraciones.

Esto es algo muy interesante desde el punto de vista de la accesibilidad, ya que hay usuarios que no pueden acceder a una página sin la utilización de ayudas como estos sintetizadores de voz. No obstante, también son útiles a la hora de leer textos o utilizarlos para experimentos o juegos.

Para explicar como utilizar estas capacidades del navegador, debemos conocer los tres elementos fundamentales de esta API de navegador:

   - El motor de síntesis de voz: speechSynthesis
   - Los mensajes de voz: SpeechSynthesisUtterance
   - La voz: speechSynthesisVoice

Veamos cada uno de ellos.

## <span style="color:orange">Pasar texto a voz (TTS).</span>
Para comenzar a trabajar con estos mensajes de voz, utilizaremos el objeto speechSynthesis del navegador. Para ello, nos adelantaremos un poco a algo que veremos más adelante, que es el objeto SpeechSynthesisUtterance, que es el mensaje de voz y el cuál necesitamos para reproducir un mensaje de texto en voz.

El código inicial es el siguiente, donde tenemos una función addMessage() que se encarga de añadir a la cola de mensajes del sintetizador de voz un mensaje nuevo cada vez que pulsamos. Prueba a pulsarlo varias veces y lo comprobarás:

![alt text](image.png)

El sintetizador de voz (TTS) del navegador funciona como una cola, es decir, cada vez que utilizamos la función speak(), añadimos a la cola de mensajes un nuevo mensaje de voz. Por su parte, el sintetizador irá reproduciendo por orden los mensajes de la lista.

Al igual que tenemos dicho método speak() (al cuál le pasamos el mensaje por parámetro), tenemos otros métodos como pause(), resume() o cancel(), que nos permiten gestionar esa lista de mensajes en cola.

![alt text](image-1.png)

Por si fuera poco, también tenemos una serie de propiedades que podemos consultar para saber si el motor de síntesis de voz del navegador está pausado, tiene mensajes en cola o está actualmente reproduciendo un mensaje de voz:

![alt text](image-2.png)

Veamos un ejemplo, donde podamos ver en juego estas propiedades y métodos. Pulsa en el botón de añadir mensajes para acumularlos y ponerlos en cola, y también podrás pausar/reanudar un mensaje, así como cancelar todos los mensajes en cola:

![alt text](image-3.png)

## <span style="color:orange">Personalizar mensajes de voz.</span>
Antes vimos un pequeño ejemplo donde creabamos un objeto de tipo SpeechSynthesisUtterance, que no es más que un mensaje de voz que se leerá a través del sintetizador de voz del navegador. Sin embargo, esa funcionalidad es la más básica que podemos utilizar.

Tenemos una serie de propiedades que podemos utilizar en un mensaje de voz, entre los que se encuentran el idioma, el tono y la velocidad de la voz, el texto, el volumen y la voz que leerá el mensaje:

![alt text](image-4.png)

Ten en cuenta que dependiendo del navegador y el sistema operativo utilizado, puedes tener a tu disposición más o menos motores de síntesis de voz. Además, cada uno de ellos puede tener menos opciones de personalización (por ejemplo, algunos motores puede que no tengan el tono a 0).

Veamos las capacidades de modificación que tenemos a nuestra disposición para modificar los motores de voz del navegador:

![alt text](image-5.png)

## <span style="color:orange">Eventos de mensajes de voz.</span>
Sobre los objetos de mensajes de voz podemos utilizar una serie de eventos que se dispararán en momentos clave de la locución del mensaje. Los eventos que podemos utilizar son los siguientes:

![alt text](image-6.png)

Cada uno de estos eventos, tiene la propiedad charIndex, elapsedTime, name y utterance, que nos permitirá obtener información para utilizar en el evento. Veamos un ejemplo donde ponemos estas features a funcionar:

![alt text](image-7.png)

## <span style="color:orange">Voces (TTS) disponibles.</span>
Como habrás podido comprobar, los navegadores suelen disponer de varias voces para leer los mensajes de texto. La cantidad de voces que tengas depende del navegador, del sistema operativo y de las voces que tengas instaladas en el apartado de idiomas. Si no te fijaste en ello y no sabes que voces tiene tu navegador, puedes echar un vistazo en el segundo ejemplo de esta página.

El objeto speechSynthesis que vimos al principio de este artículo, permite acceder a las voces del sistema mediante el método getVoices(). Sin embargo, es recomendable acceder a él mediante el evento voiceschanged, ya que es posible que los navegadores tarden algo de tiempo en preparar los motores de síntesis de voz y no estén disponibles hasta que se dispare ese evento:

![alt text](image-8.png)

Al acceder a la lista de voces mediante getVoices(), cada una de las voces disponibles en el navegador tiene varias propiedades que nos proporcionan algo de información sobre la misma. Las propiedades son las de la siguiente tabla:

![alt text](image-9.png)

Veamos como acceder a las voces que tiene nuestro sistema en el siguiente ejemplo:

![alt text](image-10.png)

Esta lista se obtiene a través del navegador que estás usando actualmente. Si compruebas con otro navegador, verás que la lista de voces cambiará. De la misma forma, en otro sistema operativo no estarán disponibles las mismas voces.

