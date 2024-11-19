# <span style="color:lime"><center>¿Qué es un automatizador?.</center></span>

Antiguamente, cuando teníamos que crear un nuevo sitio web, debíamos crear manualmente una carpeta para el proyecto, las diferentes subcarpetas de las secciones de la web (imágenes, css, js, etc...), configurar un servidor web (se solía usar XAMPP o similares), colocar y enlazar las diferentes librerías CSS y/o Javascript que queríamos utilizar, etc...

Aunque eso todavía se puede hacer hoy en día, los automatizadores nos ayudan a simplificar este proceso con el que podemos gastar mucho tiempo realizando transpilaciones.

## <span style="color:orange">¿Qué es transpilar?.</span>
Una transpilación es la tarea de transformar el código fuente de un lenguaje a otro código fuente diferente. En nuestro caso, los automatizadores leen nuestro código Javascript y lo modifican, realizando cambios para que no tengamos que hacerlo nosotros manualmente y sea mucho más cómodo utilizarlo.

Con la evolución del desarrollo web, hemos pasado a trabajar transpilando código. Habitualmente, trabajamos en una carpeta src/ donde tenemos nuestro código fuente. Ese código se preprocesa y se traduce a otro código (en la carpeta dist/) que es el código que finalmente leerá nuestro navegador. Mantener actualizado el código fuente que escribimos con el que lee el navegador sin automatizarlo, es una tarea muy tediosa. De ahí surgen los automatizadores.

## <span style="color:orange">¿Por qué transpilar?.</span>
Actualmente, en el ecosistema Javascript (o en el mundo del desarrollo web en general), es muy común utilizar estos automatizadores para, entre otras cosas, agilizar el proceso de creación de una aplicación web con unos pocos comandos, realizando de forma automática todas esas tareas tediosas y repetitivas, alcanzando nuestro objetivo de forma más rápida y con una mejor experiencia de desarrollador.

Algunas de esas tareas podrían ser las siguientes:


   - 1️⃣ Creación del proyecto y su gestión (generalmente, con NPM)
   - 2️⃣ Actualización y mantenimiento de dependencias (generalmente, con NPM)
   - 3️⃣ Servidor web local de desarrollo
   - 4️⃣ Minificación de código
   - 5️⃣ Optimización de imágenes
   - 6️⃣ Preprocesar o transpilar código fuente
   - 7️⃣ Despliegue o subida del código final al servidor

Todas estas tareas pueden ser realizadas de forma manual, pero con el uso de un automatizador, lo hacemos automáticamente, de forma más rápida y, muy probablemente, con menos errores.

## <span style="color:orange">Automatizadores populares.</span>
Existen multitud de automatizadores hoy en día, algunos con una filosofía más de automatización de tareas (como Gulp) y otros con una filosofía más guiada como Vite, Webpack o Rollup.

Aquí tienes una lista de los automatizadores mas relevantes:

Año 	Automatizador 	Descripción 	GitHub
- 2012 	[Browserify](http://browserify.org/) 	Automatizador centrado en traducir require() (Node) al navegador. 	[GitHub](https://github.com/browserify/browserify)
- 2013 	[Gulp](https://gulpjs.com/) 	Automatizador Javascript de tareas basado en pipes y flujos. 	[GitHub](https://github.com/browserify/browserify)
- 2014 	[Webpack](https://webpack.js.org/) 	Bundler enfocado en controlar todo y empaquetar aplicaciones JS. 	[GitHub](https://github.com/browserify/browserify)
- 2015 	[Rollup](https://rollupjs.org/guide/en/) 	Bundler empaquetador de aplicaciones con buen soporte ESM. 	[GitHub](https://github.com/browserify/browserify)
- 2016 	[Grunt](https://gruntjs.com/) 	Automatizador enfocado en gestión de tareas. 	GitHub
- 2017 	[Parcel](https://parceljs.org/) 	Bundler de aplicaciones web enfocado en sencillez de uso. 	[GitHub](https://github.com/browserify/browserify)
- 2019 	[Snowpack](https://www.snowpack.dev/) 	⚠️ Automatizador enfocado en técnicas modernas con buen soporte ESM. Deprecated 	[GitHub](https://github.com/browserify/browserify)
- 2020 	[Esbuild](https://esbuild.github.io/) 	Bundler Javascript ultra rápido, centrado en el rendimiento. 	[GitHub](https://github.com/browserify/browserify)
- 2021 	[Vite](https://vitejs.dev/) 	Automatizador de aplicaciones web basado en Rollup y centrado en ESM. 	[GitHub](https://github.com/browserify/browserify)
- 2021 	[Turbopack](https://turbo.build/pack) 	Automatizador basado en Rust de Vercel (Sólo para Next). 	[GitHub](https://github.com/browserify/browserify)
- 2022 	[RSPack](https://www.rspack.dev/) 	Automatizador basado en Rust creado por ByteDance (TikTok). 	[GitHub](https://github.com/browserify/browserify)
- 2023 	[Farm](https://www.farmfe.org/) 	Automatizador extremadamente rápido escrito en Rust. 	Githttps://github.com/browserify/browserifyHub
  
 Existen muchos otros automatizadores que no están en esta lista, quizás menos populares en fama, pero que pueden tener su caso de uso particular y adecuado, como por ejemplo [FuseBox](https://github.com/fuse-box/fuse-box), [Brunch](https://brunch.io/), [WMR](https://wmr.dev/), [microbundle](https://github.com/developit/microbundle), [SWC](https://swc.rs/), [PAX](https://pax.js.org/), [Bundl](https://bundljs.org/), etc.

 Hoy en día, los automatizadores más populares son Vite y Webpack. Si estás comenzando un desarrollo te recomiendo encarecidamente que pruebes [Vite](https://lenguajejs.com/javascript/automatizadores/vite/), ya que es el más rápido y moderno, y el que tiene más futuro. 