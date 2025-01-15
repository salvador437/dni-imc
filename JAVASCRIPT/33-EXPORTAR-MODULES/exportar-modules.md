# <span style="color:lime"><center>Exportar módulos</center></span>

Como hemos mencionado anteriormente, un módulo de exportación es un elemento que pone a disposición de otros ficheros Javascript, datos o código que tenemos en el fichero actual. Esto puede ser algo muy interesante de cara a organizar nuestro código en diferentes ficheros, reutilizarlos y facilitar la tarea de mantenerlo.

## <span style="color:orange">Exportación de módulos.</span>
Por defecto, un fichero Javascript no tiene módulo de exportación si no se usa un export al menos una vez en su código. Si se usa al menos un export, entonces tendrá un objeto llamado módulo de exportación, donde puede tener uno o múltiples datos. Existen varias formas de exportar datos mediante la palabra clave de Javascript export:

![alt text](./imagenes-exportar-modules/image.png)

Además, como veremos más adelante, es posible renombrar los elementos exportados utilizando as seguido del nuevo nombre a utilizar. Recuerda que no es posible usar export dentro de funciones, bucles o contextos específicos.

## <span style="color:orange">Declaración y exportación.</span>
Existen varias formas de exportar elementos. La más habitual, quizás, es la de simplemente añadir la palabra clave export a la izquierda de la declaración del elemento Javascript que deseamos exportar, ya sea una variable, una constante, una función, una clase u otro objeto más complejo:

![alt text](./imagenes-exportar-modules/image-1.png)

Probablemente, es de las más sencillas porque sólo hay que añadir export a la izquierda. Sin embargo, podría ser fácil perderse en el código y no tener claro rápidamente que ha sido exportado y que no.

    En este ejemplo, nuestro módulo de exportación contendría los elementos number, hello y CodeBlock.

## <span style="color:orange">Exportación post-declaración.</span>
Si vienes del mundo de NodeJS, es muy probable que te resulte más intuitivo exportar módulos al final del fichero, ya que es como se ha hecho siempre en Node con los module.exports. Esta forma tiene como ventaja que es mucho más fácil localizar la información que ha sido exportada, ya que siempre estará al final del fichero.

Así pues, primero declarariamos la información y posteriormente, al final del fichero, exportamos lo que queramos:

![alt text](./imagenes-exportar-modules/image-2.png)

En este ejemplo, nuestro módulo de exportación contendría los elementos number, hello, bye y greet.

Otra forma de hacerlo, sería utilizar un único export y englobar todo lo que queramos exportar en el objeto:

![alt text](./imagenes-exportar-modules/image-3.png)

En este último ejemplo estaríamos exportando exactamente lo mismo que en el ejemplo anterior, sólo que lo hemos hecho de una sola vez, creando el objeto con las propiedades deseadas.

## <span style="color:orange">Exportación externa.</span>
Esta modalidad es menos frecuente, pero puede ser interesante en algunas ocasiones. Se trata de añadir a nuestro módulo de exportación del fichero actual, todos los elementos exportados en el fichero math.js:

![alt text](./imagenes-exportar-modules/image-4.png)

En el segundo ejemplo, realizamos una exportación más selectiva, donde en lugar de todos los elementos exportados, sólo lo hacemos con abs, min y max. Estos elementos formarán parte de nuestro módulo de exportación del fichero actual, aunque estos elementos se encuentren en otros ficheros.

También es posible utilizar el as tras el * para renombrar el conjunto de elementos, en cuyo caso, se creará un objeto con el nombre indicado, donde se incorporarán todos los elementos del fichero math.js:

![alt text](./imagenes-exportar-modules/image-5.png)

En este caso, nuestro módulo de exportación tiene un elemento number y un elemento math, que es un objeto que a su vez incluye los elementos abs, min, max y random, que hemos traído de math.js.

## <span style="color:orange">Exportación por defecto.</span>
Ten en cuenta que al exportar elementos y crear un módulo de exportación, lo que realmente creamos es un objeto donde las propiedades son los nombres de los elementos (constantes, variables, funciones, clases...). Existe una modalidad de exportación que es conocida como exportación por defecto.

Para realizarla, sólo tenemos que añadir la palabra clave default tras el export. En ese caso, estaremos creando un elemento en nuestro módulo de exportación que tendrá el nombre default y será considerado el elemento principal (elemento por defecto). Sólo puede haber un elemento llamado default por módulo de exportación, por lo que tampoco se puede hacer más de un export default por fichero.

Observa este ejemplo:

![alt text](./imagenes-exportar-modules/image-6.png)

En este caso, nuestro módulo de exportación tiene los elementos number y default, este último el String "Manz", que sería el elemento por defecto de nuestro módulo de exportación.

Observa que si utilizamos el export default, no es posible declarar la variable con var, let o const, puesto que ese nombre sería inútil. Lo que si podríamos hacer es exportarlo posteriormente, indicando su nombre:

![alt text](./imagenes-exportar-modules/image-7.png)

En este caso, nuestro módulo de exportación tiene sólo el elemento default, que es el string "Manz".

Hasta aquí, hemos aprendido a exportar elementos y añadirlos al módulo de exportación del fichero Javascript en el que nos encontramos. En el siguiente apartado, veremos las diferentes formas de importar estos elementos desde otro fichero.

## <span style="color:orange">Exportación CommonJS (legacy).</span>
Es posible que en algún fragmento de código te hayas encontrado una sintaxis muy similar al export, pero utilizando module.exports como en el código siguiente:

![alt text](./imagenes-exportar-modules/image-8.png)

Este sistema no forma parte de los módulos oficiales de ECMAScript que se explican en este artículo, sino que es un sistema de módulos utilizado en NodeJS (Javascript de servidor) conocido como CommonJS (CJS). El module.exports no funciona en navegadores de forma nativa, por lo que se desaconseja su uso a favor de export, ya que incluso las últimas versiones de Node lo soportan.

Si lo estás utilizando en un código de frontend, es muy posible que se esté utilizando junto a NodeJS o haya alguna herramienta o automatizador que utilice NodeJS y esté transpilando (convirtiendo) tu código.

Si quieres saber más sobre CommonJS y sus diferencias con ECMAScript Modules, echa un vistazo a este artículo, del apartado de automatizadores: [CommonJS vs ECMAScript Modules](https://lenguajejs.com/automatizadores/introduccion/commonjs-vs-es-modules/).


