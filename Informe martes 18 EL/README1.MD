#LABORATORIO DE TECNOLOGÍAS WEB CON JAVASCRIPT
-------------------------------------------
###Materia: Tecnologias Web con Java Script
###Tema: Introduccion a la Web
###Fecha: 27/10/2016
###Nombre: Edison Logacho
###Profesor:TANIA CALLE Y ADRIAN EGUEZ
###Número de Informe:01

#INDICE DE CONTENIDOS
-------------------------------------------
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
 * <a href="#node">Node.js </a>
 * <a href="#github">Github</a>
 * <a href="#brak">Brackets</a>
 * <a href="#w3c">W3Schools</a>
 * <a href="#metodos">Métodos HTTP</a>
 * <a href="#status">Status Code HTTP</a>
 * <a href="#navegador">Navegador</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: Introduccion a la Web

<a name="objetivos"></a>
## Objetivos

- Entender el funcionamiento y utilizacion de herramientas de tipo web para su posterior uso.
- Practicar el estructura que tiene el lenguaje de Markdown para su uso en la elaboracion de informes.
- Aprender el uso de lenguaje HTML 
- Observar las facilidades y dificultades que posee el manejo de instancias

<a name="marco-teorico"></a>
## Marco Teorico

###<a name="node">Node.js</a>
<div align="center"><img src="https://code-maven.com/img/node.png" alt="Imagen" width="100"></div>
Es un intérprete JavaScript del lado del servidor, su principal objetivo es permitir a un programador construir aplicaciones altamente escalables y escribir código que maneje decenas de miles de conexiones simultáneas en una sola máquina física.

###<a name="github">Github</a>
<div align="center"><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" width="100"></div>
Es una plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de control de versiones Git. El código se almacena de forma pública, aunque también se puede hacer de forma privada, creando una cuenta de pago.

###<a name="brak">Brackets</a>
<div align="center"><img src="http://jvalenzuela.es/wp-content/uploads/2014/08/brackets-editor-logo.jpg" width="100"></div>
Es un editor de código abierto para el diseño y desarrollo web construido sobre tecnologías como HTML, CSS y JavaScript. El proyecto fue creado y es mantenido por Adobe , y se distribuye bajo una licencia MIT.

###<a name="w3c">W3Schools</a>
<div align="center"><img src="http://orig07.deviantart.net/3d83/f/2014/280/d/b/w3c_schools_of_web_designing_by_theosoftcochin-d81y1nd.png" width="100"></div>
Es un popular sitio web para el aprendizaje de tecnologías web en línea. El contenido incluye tutoriales y referencias relacionadas con HTML, CSS, JavaScript, PHP, SQL, Bootstrap y jQuery. Recibe más de 10 millones de visitantes únicos al mes.

##<a name="desarrollo">Desarrollo de la Práctica</a>

1. La practica empieza levantando el servidor web el cual consumira recursos de la computadora en donde estamos ejecutando el codigo en el programa BRAKETS, para esto es necesario ejecutar los siguientes comandos
 - npm install -g http-server
   * Este comando sirve para instalar el servidor web
 - http-server -c10 
   * Sirve para configurar la duración del Cache

2. Seguido a esto se procede con la creaccion de algunos progrogramas que nos permiten el manejo de marcas para asociarse con javascript. Aqui se procede con la instalacion de la mayoria de paquetes que nos permiten tener un conocimiento basico para la programacion en JavaScript.
 
 - El primer programa que se instala es Node.js, el cual permite que el codigo ingresado en el programa "Brakets" compile dentro del navegador.
 
 
 - El segundo programa es el escritorio de github en el cual nos permite realizar commits de los codigos realizados en el programa brakets.
 

3. Para utilizar una pagina HTML, hay que tener en cuenta que la misma debe cumplir con una estructura que es la siguiente:
<p align="center">

<img src="C:\Users\EDISON\Documents\GitHub\Tec_Web_EL\Informe martes 18 EL" width="500" height="800">


</p>

<p align="center">

<img src="https://github.com/edijav85/Tec_Web_EL/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">

</p>



4. Para el siguiente paso trataremos de realizar algunos metodos para conocer el lenguaje HTML el cual nos permite, a travez, de un archivo que se le denomina "INDEX", ver la estructura que tiene una pagina html.

 












### Imagenes desde Github **IMPORTANTE**

Se pueden usar imágenes desde nuestros archivos en github que constan de la siguiente URL:

- Github
  * La url de github que es `https://github.com` 
- Usuario
  * La url de usuario de github que en este caso es: `/adrianeguez` 
- Repositorio
  * El repositorio de Github que estamos usando, en este caso es `/Tec_Web_Js_2016_B`
- Rama o  Branch
  * La rama de nuestro repositorio en este formato: `/blob/master`
- El PATH
  * La direccíon de nuesto archivo por ejemplo `/carpeta/subcarpeta/subsubcarpeta/archivo.png` en este ejemplo es `/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png` 
- RAW
  * Por ultimo mandamos un Query String Parameter de la con la variable `raw` y valor `true` de la siguiente manera: `?raw=true`
  
**Al final** nuestro url queda de la siguiente manera:

#### `https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true`

<p align="center">
<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">
</p>

Por ultimo podemos centrar las imagenes de la siguiente manera:


```
<p align="center">

<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">

</p>
```

### Links dentro de github

Para nosotros utilizar los Links dentro de Github debemos de hacer dos cosas:

1. Definir un anchor name donde nosotros queramos mover cuando demos clic de la siguiente manera y formate (**NOTESE QUE ESTAN JUNTAS**):

  ```
  <a name="nombre"></a>
  ## titulo2
  ```
2. Después de esto debemos de linkear mediante un texto por ejemplo en una lista de la siguiente manera (**NO ELVIDAR EL `#`**):
 
  ```
  - <a href="#nombre">Dale clic aqui para ir al titulo 2</a>
  ```
  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>
















