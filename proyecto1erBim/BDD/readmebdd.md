#Proyecto 1er Bimestre DE TECNOLOGÍAS WEB CON JAVASCRIPT
-------------------------------------------
###Materia: Tecnologias Web con Java Script
###Tema: Introduccion a la Web
###Fecha: 27/10/2016
###Profesor:TANIA CALLE Y ADRIAN EGUEZ

#INDICE DE CONTENIDOS
-------------------------------------------
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Modelo de la BDD</a>
 * <a href="#modelo_bdd">Script de la BDD</a>
 * <a href="#script_bdd">Github</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
Script y Modelo de la Base de Datos

<a name="objetivos"></a>
## Objetivos

- Dar a conocer el modelo de la base de datos que se utilizará para el proyecto del segundo bimestre
- Dar a conocer el script de la base de datos que se utilizará para el proyecto del segundo bimestre
- Indicar algunos detalles de los modelos ateriormente mencionados
- Dar a conocer las diferentes tablas que se emplearán en la bdd en referencia al proyecto del segundo bimestre

<a name="marco-teorico"></a>
## Marco Teorico

El proyecto que se tiene contemplado es la creacion de un sitio, el mismo que oferte zapatos para damas.
La necesidad de crear un sitio como tal es en base a las demandas creadas por personas que tienen la tendencia de comprar calzado para cada tipo 
de salida.




###<a name="script_bdd">Script de la BDD</a>

A continuacion se presenta el escript que se hizo correr en el programa PostgreSQL

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
drop database if exists TZAPATOS;
create database TZAPATOS;

CREATE TABLE EMPLEADOS(
EMPLEADOID int NOT NULL,
NOMBRE char(30) NULL,
APELLIDO char(30) NULL,
FECHA_NAC date NULL,
REPORTA_A int NULL,
EXTENSION int NULL,
CONSTRAINT PK_EMPLEADOS PRIMARY KEY (EMPLEADOID));

CREATE TABLE PROVEEDORES(
PROVEEDORID int NOT NULL,
NOMBREPROV char(50) NOT NULL,
CONTACTO char(50) NOT NULL,
CELUPROV char(12) NULL,
FIJOPROV char(12) NULL,
CONSTRAINT PK_PROVEEDORES PRIMARY KEY
(PROVEEDORID ) );

CREATE TABLE CATEGORIAS(
CATEGORIAID int NOT NULL,
NOMBRECAT char(50) NOT NULL,
CONSTRAINT PK_CATEGORIAS PRIMARY KEY
(CATEGORIAID) ) ;

CREATE TABLE CLIENTES(
CLIENTEID int NOT NULL,
CEDULA_RUC char(10) NOT NULL,
NOMBRECIA char(30) NOT NULL,
NOMBRECONTACTO char(50) NOT NULL,
DIRECCIONCLI char(50) NOT NULL,
EMAIL char(50) NULL,
CELULAR char(12) NULL,
FIJO char(12) NULL,
CONSTRAINT PK_CLIENTES PRIMARY KEY
(CLIENTEID) );

CREATE TABLE ORDENES(
ORDENID int NOT NULL,
EMPLEADOID int NOT NULL,
CLIENTEID int NOT NULL,
FECHAORDEN date NOT NULL,
DESCUENTO int NULL,
CONSTRAINT PK_ORDENES PRIMARY KEY
(ORDENID) );


CREATE TABLE DETALLE_ORDENES(
ORDENID int NOT NULL,
DETALLEID int NOT NULL,
PRODUCTOID int NOT NULL,
CANTIDAD int NOT NULL,
CONSTRAINT PK_DETALLE_ORDENES PRIMARY KEY
(ORDENID,DETALLEID ) );

CREATE TABLE PRODUCTOS(
PRODUCTOID int NOT NULL,
PROVEEDORID int NOT NULL,
CATEGORIAID int NOT NULL,
DESCRIPCION char(50) NULL,
PRECIOUNIT numeric NOT NULL,
EXISTENCIA int NOT NULL,
CONSTRAINT PK_PRODUCTOS PRIMARY KEY
(PRODUCTOID )) ;

ALTER TABLE ORDENES
ADD CONSTRAINT FK_ORDENES_CLIEN_ORD_CLIENTES FOREIGN KEY(CLIENTEID)
REFERENCES CLIENTES (CLIENTEID)
on delete restrict on update restrict;

ALTER TABLE ORDENES ADD CONSTRAINT FK_ORDENES_EMPLE_ORD_EMPLEADO FOREIGN KEY(EMPLEADOID)
REFERENCES EMPLEADOS (EMPLEADOID)
on delete restrict on update restrict;

ALTER TABLE DETALLE_ORDENES ADD CONSTRAINT FK_DETALLE__ORDEN_DET_ORDENES FOREIGN KEY(ORDENID)
REFERENCES ORDENES (ORDENID)
on delete restrict on update restrict;

ALTER TABLE DETALLE_ORDENES ADD CONSTRAINT FK_DETALLE__PROD_DETA_PRODUCTO FOREIGN KEY(PRODUCTOID)
REFERENCES PRODUCTOS (PRODUCTOID)
on delete restrict on update restrict;

ALTER TABLE PRODUCTOS ADD CONSTRAINT FK_PRODUCTO_CATE_PROD_CATEGORI FOREIGN KEY(CATEGORIAID)
REFERENCES CATEGORIAS (CATEGORIAID)
on delete restrict on update restrict;

ALTER TABLE PRODUCTOS ADD CONSTRAINT FK_PRODUCTO_PROV_PROD_PROVEEDO FOREIGN KEY(PROVEEDORID)
REFERENCES PROVEEDORES (PROVEEDORID)
on delete restrict on update restrict;

ALTER TABLE EMPLEADOS ADD CONSTRAINT FK_EMPLEADO_REPORTA FOREIGN KEY(REPORTA_A)
REFERENCES EMPLEADOS (EMPLEADOID)
on delete restrict on update restrict;
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


###<a name="modelo_bdd">Modelo de la BDD</a>

El modelo de la BDD se la realizo en el programa PowerDesigner para tener una aproximacion real de las entidades que participarán en 
el proyecto. El modelo quedo de la siguiente manera

<p align="center">

<img src="https://github.com/edijav85/Tec_Web_EL/proyecto1erBim/BDD/imagenes/bdd.jpg"width="500" height="800">

</p>

