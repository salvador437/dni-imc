# <span style="color:lime"><center> Constantes</center></span>
## <span style="color:orange">Constantes de Math.</span>

Cuando trabajamos con Javascript, es posible realizar gran cantidad de operaciones matemáticas de forma nativa, sin necesidad de librerías externas. Para ello, haremos uso del objeto Math, un objeto interno de Javascript que tiene incorporadas ciertas constantes y métodos (funciones) para trabajar matemáticamente.

El objeto Math de Javascript incorpora varias constantes que podemos necesitar en algunas operaciones matemáticas. Veamos su significado y valor aproximado:

![alt imagen](./imagenes/image.png)

Además de estas constantes, el objeto Math también nos proporciona gran cantidad de métodos o funciones para trabajar con números. Vamos a analizarlos.

## <span style="color:orange">Métodos matemáticos.</span>
Los siguientes métodos matemáticos están disponibles en Javascript a través del objeto Math:

![alt text](./imagenes/image-0.png)
![alt text](./imagenes/image-1.png)

Veamos algunos ejemplos aplicados a las mencionadas funciones anteriormente:

![alt text](./imagenes/image-2.png)

Existe uno más, Math.random() que merece una explicación más detallada, por lo que lo explicamos en el apartado siguiente.

# <span style="color:orange">Método Math.random().</span>
Uno de los métodos más útiles e interesantes del objeto Math es Math.random().

![alt text](./imagenes/image-3.png)

Este método nos da un número al azar entre los valores 0 y 1, con 16 decimales. Normalmente, cuando queremos trabajar con números aleatorios, lo que buscamos es obtener un número entero al azar entre a y b. Para ello, se suele hacer lo siguiente:

![alt text](./imagenes/image-4.png)

Este ejemplo nos dará en x un valor al azar entre 0 y 5 (5 no incluido). Lo hemos realizado por pasos para entenderlo mejor, pero podemos realizarlo directamente como se ve en el siguiente ejemplo:

![alt text](./imagenes/image-5.png)

Como se puede ver en el segundo ejemplo anterior, utilizamos el operador a nivel de bits ~~ (doble negación) como reemplazo rápido de Math.floor(), una función que realiza un redondeo inferior, y que veremos al final de este tema.

# <span style="color:orange">Métodos de logaritmos.</span>
Javascript incorpora varios métodos en el objeto Math para trabajar con logaritmos. Desde logaritmos neperianos hasta logaritmos binarios a través de las siguientes funciones:

![alt text](./imagenes/image-6.png)

A continuación, unos ejemplos de estas funciones aplicadas en Javascript:

![alt text](./imagenes/image-7.png)

# <span style="color:orange">Métodos de redondeo.</span>
Como hemos visto anteriormente, es muy común necesitar métodos para redondear números y reducir el número de decimales o aproximar a una cifra concreta. Para ello, de forma nativa, Javascript proporciona los siguientes métodos de redondeo:

![alt text](./imagenes/image-8.png)

Veamos las diferencias de utilizar los diferentes métodos anteriores para redondear un número decimal y los resultados obtenidos:

![alt text](./imagenes/image-9.png)

# <span style="color:orange">Métodos trigonométricos.</span>
Por último, y no por ello menos importante, el objeto Math nos proporciona de forma nativa una serie de métodos trigonométricos, que nos permiten hacer cálculos con operaciones como seno, coseno, tangente y relacionados:

![alt text](./imagenes/image-10.png)

# <span style="color:orange">Otras librerías matemáticas.</span>
Si de forma nativa no encuentras una forma sencilla de resolver el problema matemático que tienes entre manos, no olvides que existen una serie de librerías de terceros que pueden hacernos la vida más fácil a la hora de trabajar con otros valores matemáticos.

A continuación, detallamos algunas de ellas:

![alt text](./imagenes/image-11.png)

Habrás comprobado que, al contrario que muchos otros objetos de Javascript, en estas ocasiones hemos indicado explícitamente el objeto, por ejemplo Math.round(numero), en lugar de hacerlo sobre la variable: numero.round(). Esto ocurre porque Math es un objeto con métodos y constantes estáticas, algo que veremos en profundidad en futuros temas.














