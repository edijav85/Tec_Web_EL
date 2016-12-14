---
#LABORATORIO DE TECNOLOGÍAS WEB CON JAVASCRIPT
-------------------------------------------
###Materia: Tecnologias Web con Java Script
###Tema: JavaScript
###Fecha: 2016-11-08
###Nombre: Edison Logacho
###Profesor:TANIA CALLE Y ADRIAN EGUEZ
###Número de Informe:03
#INDICE DE CONTENIDOS
------------------------------
---
<a name="cabecera"></a>
## Índice de contenidos
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoTeorico">Marco teórico</a>
  - <a href="#js">JavaScript</a>
  - <a href="#ecmas">ECMAScript</a>
  - <a href="#diseno">Diseño Web</a>
  - <a href="#calidad">Calidad web</a>
  - <a href="#wai">WAI web</a>
  - <a href="#validacion">Validación web</a>
  - <a href="#seo">SEO web</a>

- <a href="#desarrolloDeLaPractica">Desarrollo de la práctica</a>
- <a href="#conclusionesYRecomendaciones">Conclusiones y recomendaciones</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introducción a la Web`

<a name="objetivos"></a>
## Objetivos
- Desarrollar el conocimiento básicos de JavaScript.
- Conocer la forma correcta para utilizar variables y arreglos en JavaScript.
- Entender el comportamiento de las estructuras de datos que podemos utilizar en JavaScript.
- Manejar de mejor manera el uso de la consola para llevar el control de nuestras aplicaciones.

<a href="#cabecera">A la cabecera</a>

<a name="marcoTeorico"></a>
## Marco teórico

<a name="js"></a>
### JavaScript
JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas4 aunque existe una forma de JavaScript del lado del servidor(Server-side JavaScrip o SSJS). 

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/JavaScript))

<a href="#cabecera">A la cabecera</a>
<a name="ecmas"></a>
### ECMAScript
ECMAScript define un lenguaje de tipos dinámicos ligeramente inspirado en Java y otros lenguajes del estilo de C. Soporta algunas características de la programación orientada a objetos mediante objetos basados en prototipos y pseudoclases.

La mayoría de navegadores de Internet incluyen una implementación del estándar ECMAScript, al igual que un acceso al Document Object Model para manipular páginas web. 

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/ECMAScript))

<a href="#cabecera">A la cabecera</a>

<a name="diseno"></a>
### Diseño Web

Para diseñar un sitio web es necesario pensar y planear cuidadosamente.
La cosa más importante es CONOCER TU AUDIENCIA.

* Los usuarios son escáneres
    * Un visitante típico no leerá todo el contenido de la página web.
    * Es importante llegar al punto en la primera oración de la página.
* Menos es más
    * Párrafos lo más cortos posible.
    * Páginas lo más cortas posible.
    * Usar mucho espacio.
* Navegación
    * Crear una estructura de navegación consistente usada por toda las páginas en el sitio web.
    * No usar hipervínculos dentro de cada párrafo.
* Velocidad de descarga
    * Muchos visitantes dejarán la página web si tarda más de 7 segundos en cargarse.
    * Si la página tarda mucho tiempo en cargarse, considerar remover contenido gráfico o multimedia.
* Dejar que la audiencia hable
    * El feedback es muy importante. 
    * Los visitantes son los clientes. A menudo proveen pistas de lo que se pudo haber hecho mejor.
* El monitor de los visitantes
    * Es importante probar el sitio web en distintos monitores.
* Navegadores
    * Los navegadores más populares son Firefox y Google Chrome.
    * Usar HTML correcto ayudará a que los navegadores muestren las páginas correctamente.
* Plug-Ins
    * Asegurarse que los visitantes tiene acceso al software que necesitan para visualizar contenido multimedia.
* Discapacidades
    * Siempre añadir texto alternativo para imágenes y elementos gráficos.

(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_design.html))

<a href="#cabecera">A la cabecera</a>

<a name="calidad"></a>
### Calidad Web

Utilizando los estándares más actuales se puede mejorar la cualidad de tu sitio web.

* Usar HTML5
    - Escribir tus páginas con el último estándar HTML5, lo lleva lo más cerca posible a la perfeción.
* Usar Archivos CSS separados.
    - El uso de hojas de estilo en cascada (CSS) es la forma preferida de separar el contenido del estilo, en páginas web de calidad.
    - El uso de CSS mejora la calidad de los sitios web y aumenta la legibilidad de muchos navegadores diferentes.
* Validación Web
    - Un validador es un programa de software que puede revisar tus páginas web de acuerdo a los estándares web.
    - Cuando usamos un validador para revisar documentos HTML y CSS, el validador retorna una lista de errores encontrados, de acuerdo al estándar escogido.
* El elemento Title
    - El elemento `<title>` es uno de los mas importantes elementos HTML. Su función principal es describir el contenido de una página Web
* Elementos de encabezado
    - Utilice `<h1>` para los encabezados principales y `<h2>` y `<h3>` para los encabezados de nivel inferior.
* Conjunto de caracteres
    - Todos los estándares cdl W3C (desde 1996) define un conjunto internacional de caracteres llamado Unicode (ISO 10646).
* Formatos de Fecha
    - La Organización Internacional de Normalización (ISO) ha definido un formato internacional para las fechas como "aaaa-mm-dd", donde aaaa es el año, mm es el mes y dd es el día.


(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_quality.html))

<a href="#cabecera">A la cabecera</a>

<a name="wai"></a>
### WAI - La Iniciativa de Accesibilidad a la Web

WAI (W3C, 1997) es un conjunto de directrices destinadas a los desarrolladores y diseñadores web, sobre cómo hacer que la web sea accesible a las personas con discapacidad.

* Algunas razones para hacer un sitio más accesible:
    * Mejorará la reputación y satisfacción del cliente.
    * Incrementará el número de visitantes.
    * Los visitantes se quedarán más tiempo.
    * El sitio será utilizable por personas con equipos más antiguos.
* Para hacer un sitio más accesible:
    * Utilizar texto alternativo.
    * No usar letras pequeñas.
    * Usar mejor los espacios.
    * Evitar letras difíciles de leer.
    * Evitar contrastes malos de color.
    * Siempre definir un color de fondo.

(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_wai.html))

<a href="#cabecera">A la cabecera</a>

<a name="validacion"></a>
### Validación web

* Validación Web
    - Un validador es un programa de software que puede revisar tus páginas web de acuerdo a los estándares web.
    - Cuando usamos un validador para revisar documentos HTML y CSS, el validador retorna una lista de errores encontrados, de acuerdo al estándar escogido.
(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_quality.html))

<a href="#cabecera">A la cabecera</a>

<a name="seo"></a>
### SEO web
Optimización de motores de búsqueda (SEO) es el proceso de mejorar la clasificación (visibilidad) de un sitio web en los motores de búsqueda. El más alto (o más frecuentemente) un sitio web se muestra en una lista de motores de búsqueda (como Google), más visitantes se espera que reciba.

(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_search.html))

<a href="#cabecera">A la cabecera</a>