#LABORATORIO DE TECNOLOGÍAS WEB CON JAVASCRIPT
-------------------------------------------
###Materia: Tecnologias Web con Java Script
###Tema: Introducción CSS
###Fecha: 2016-10-25
###Nombre: Edison Logacho
###Profesor:TANIA CALLE Y ADRIAN EGUEZ
###Número de Informe:02
#INDICE DE CONTENIDOS
---
<a name="cabecera"></a>
## Índice de contenidos
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoTeorico">Marco teórico</a>
  - <a href="#css">Cascading Style Sheets(CSS)</a>
  - <a href="#combinators">CSS Combinators</a>
  - <a href="#box">Box Model</a>
  - <a href="#clases">Pseudo-Clases CSS</a>
  - <a href="#elemento">Pseudo-Elementos CSS</a>
  - <a href="#atributos">Selectores de atributos CSS</a>
  - <a href="#forms">Forms CSS</a>
  - <a href="#contadores">Contadores CSS</a>
  - <a href="#transacciones">Transiciones CSS</a>
  - <a href="#animaciones">Animaciones CSS</a>
  - <a href="#transformaciones">Transformaciones 2D CSS</a>
  - <a href="#transformaciones3">Transformaciones 3D CSS</a>
- <a href="#desarrolloDeLaPractica">Desarrollo de la práctica</a>
- <a href="#conclusionesYRecomendaciones">Conclusiones y recomendaciones</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introducción a la Web CSS`
# Introducción a la web CSS

<p align="center">
<img src="https://www.sololearn.com/Uploads/html-css.jpg" alt="Logos HTML CSS JS" title="CSS Palabras clave" />
</p>

<a name="objetivos"></a>
## Objetivos
- Desarrollar el conocimiento acerca de las hojas de estilo en cascada.
- Conocer los diferentes métodos que pueden ser utilizados mediante el uso de CSS para aplicar efectos visuales en nuestras páginas web.

<a href="#cabecera">A la cabecera</a>

<a name="marcoTeorico"></a>
## Marco teórico

<a name="css"></a>
### Cascading Style Sheets(CSS)

 Hojas de Estilo en Cascada (Cascading Style Sheets) es el lenguaje utilizado para describir la presentación de documentos HTML o XML, esto incluye varios lenguajes basados en XML.

(Fuente: [MDN](https://mateomarinh.files.wordpress.com/2013/04/images.jpg)

CSS es un lenguaje que describe el estilo de un documento HTML.
Describe como los elementos de HTML deben ser mostrados.

<a href="#cabecera">A la cabecera</a>

<a name="combinators"></a>
### CSS Combinators

 Un combinador expande la relación entre los selectores, un selector CSS puede contener mas de un selector simple. Entre los selectores simples se puede incluir un combinador.
Hay cuatro diferentes combinadores:

- selector descendente (espacio)
- selector hijo(>)
- selector hermano adyacente (+)
- selector hermano general (~)

(Fuente: [W3Schools](http://www.w3schools.com/css/css_combinators.asp))

<a href="#cabecera">A la cabecera</a>

<a name="box"></a>
### CSS Box Model

 Todos los elementos HTML pueden ser considerados como cajas. En CSS, el termino "box model" es usado cuando se habla acerca de diseño y distribución.
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css_boxmodel.asp))

<a href="#cabecera">A la cabecera</a>

<a name="clases"></a>
### Pseudo-Clases CSS

Una pseudo-clase es usada para definir un estado especial de un elemento. Por ejemplo, esta puede ser usada para:

- Dar estilo a un elemento cuando se pasa el mouse sobre él.
- Los estilos de enlaces visitados y no visitados sean diferentes.
- Dar estilo a un elemento cuando este es enfocado.
 
(Fuente: [W3Schools](http://www.w3schools.com/Css/css_pseudo_classes.asp))

<a href="#cabecera">A la cabecera</a>

<a name="elemento"></a>
### Pseudo-Elementos CSS

Una pseudo-elemento es usado para dar estilo a partes específicas de un elemento. Por ejemplo, este puede ser usado para:

- Dar estilo a la primera letra, o linea, de un elemento.
- Insertar contenido antes, o después, del contenido de un elemento.
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css_pseudo_elements.asp))

<a href="#cabecera">A la cabecera</a>

<a name="atributos"></a>
### Selectores de atributos CSS

Es posible dar estilo a elementos HTML que tienen atributos específicos o valores de atributos específicos.
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css_attribute_selectors.asp))

<a href="#cabecera">A la cabecera</a>

<a name="forms"></a>
### Forms CSS

El aspecto de un form HTML puede ser bastante mejorado con CSS.
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css_form.asp))

<a href="#cabecera">A la cabecera</a>

<a name="contadores"></a>
### Contadores CSS

Los contadores CSS son "variables" dentro de CSS cuyos valores pueden ser incrementados por las reglas CSS. Los contadores permiten ajustar la apariencia de un contenido base cuantas veces ellos sean usados.
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css_counters.asp))

<a href="#cabecera">A la cabecera</a>

<a name="transacciones"></a>
### Transiciones CSS

Las transiciones CSS3 te permiten cambiar los valores de las propiedades suavemente (desde un valor a otro), durante una duración dada.

`transition: width 2s;`
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css3_transitions.asp))

<a href="#cabecera">A la cabecera</a>

<a name="animaciones"></a>
### Animaciones CSS

Las animaciones permiten animar la mayoría de elementos HTML sin utilizar JavaScript o Flash.

```javascript
@keyframes example {
    0%   {background-color: red;}
    25%  {background-color: yellow;}
    50%  {background-color: blue;}
    100% {background-color: green;}
}
```
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css_counters.asp))

<a href="#cabecera">A la cabecera</a>

<a name="transformaciones"></a>
### Transformaciones 2D CSS

Las transformaciones CSS3 permiten trasladar, rotar, escalar, y desvanecer elementos. Es un efecto que le permite a un elemento cmabiar de forma, tamaño y posición.
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css3_2dtransforms.asp))

<a href="#cabecera">A la cabecera</a>

<a name="transformaciones3"></a>
### Transformaciones 3D CSS

Las transformaciones CSS3 permiten trasladar, rotar, escalar, y desvanecer elementos. Es un efecto que le permite a un elemento cmabiar de forma, tamaño y posición.
 
(Fuente: [W3Schools](http://www.w3schools.com/css/css3_3dtransforms.asp))

<a href="#cabecera">A la cabecera</a>

<a name="desarrolloDeLaPractica"></a>
## Desarrollo de la práctica


### CSS (casacade style sheet)
### Modificar estilos en html

- Se puede agregar estilos en la cabecera de nuestro documento HTML, especificando los elementos html a los cuales aplicaremos dichos estilos.
 

- Se pueden asignar estilos en forma de clases, de manera que se pueda asignar esatas claes a diferentes elementos.


   
  
  
- Estilos en tags.


   
- Estilo por ID

  
- Se puede crear un archivo `.css` para definir los diferentes estilos, y se los puede enlazar con nuestro documento HTML.

  

  
 

- Gracias al Inspector de nuestro navegador web podemos ver el orden en el cual los archivos que conforman nuestra página son cargados, y como cuando dos estilos se solapan se escoge el último en agregarse.
 
 
 
### Un sitio Responsivo

- Es importante recordar que el porcentaje CSS del Grid son 12 columnas de fluido.



  
<a name="conclusionesYRecomendaciones"></a>
## Conclusiones y recomendaciones
- Se aprendió bastante acerca del funcionamiento interno de CSS, es una herramienta útil a la hora de dar mejores efectos visuales a nuestra página web.
- Entender los diferentes atributos, estilos y formas de aplicarlos es muy útil a la hora de dar una mejor presentación.
- Es importante recordar que el porcentaje CSS del Grid son 12 columnas de fluido.

<a href="#cabecera">A la cabecera</a>