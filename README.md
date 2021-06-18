# Proyecto Final Programación 2 - Ballistic / Frontend

Realizado con sangre, sudor y lágrimas, pero sobre todo con ❤️ por el equipo Ballistic Software/Softworks

#### Vídeo Explicativo: https://youtu.be/FmUWqCvLuTY

## Miembros

Juan Castillo
Julián Silva
Juan Manuel Pérez
Estefanía Galindo

## Tech Stack

    -   Wildfly 23.0.2
    -   PostgreSQL 42.2.10
    -   Gson 2.8.7
    -   Java SE 15
    -   Resteasy 4.6.0

## Colección de Postman

https://drive.google.com/file/d/1nEs9TGPOo94XMBYZb15vpn3UOAsl-NJ6/view?usp=sharing


## Problemas

-   Refrescar la memoria en cuanto a conceptos de JPA/Hibernate, dado que estos son el punto más débil del grupo. El único concepto que se nos da peor que la persistencia vendrían siendo los estándares de Java Enterprise Edition.
-   La dinámica de coordinar el trabajo en ambos repositorios, ya que, además de que no había comprensión de los requerimientos pedidos en la guía del Proyecto por ambos lados del desarrollo (Backend y Frontend), no todos los ingenieros estaban al día con los temas de Backend, lo cual ocasionó que la balanza del trabajo siempre se inclinara más hacia el que estuviera menos perdido, ya que debía meter la mano en el frontend cuando hacía falta.
-   Evitar que uno de los compañeros rompiera el repositorio dado que no está acostumbrado a trabajar entre diferentes ramas y prefiere trabajar en master.
-   No ejercer violencia de género contra el compañero que nos regañaba cada vez que nos distraíamos os siquiera poníamos música para trabajar, pese a que lo hacía por preservar la integridad del proyecto y del grupo.
-   No distraerse cuando ocasionalmente trabajabamos en Anydesk dado que la opción de rayar la pantalla del anfitrión de la sesión es mucho más tentadora de lo que suena.

## Oportunidades

-   Adquirir conocimientos vitales para el desarrollo web.

-   Bases sólidas en Frontend y Backend
-   La experiencia de probar diferentes herramientas previamente y decidir cuál es mejor/más cómoda para el desarrollo de un proyecto
-   Conocer múltiples frameworks y su propósito

-   Aprender por prueba y error que para cada proyecto hay que hacer una planeación previa para:

-   Saber a qué ritmo hay que trabajar
-   Saber a qué actividades debe dárseles prioridad
-   Asignar tareas y que así cada miembro se responsabilice por su parte
-   Establecer entregables y fechas tope para mantener un itinerario y que el proyecto no se retrase

## Retos

-   Que nos lancen por primera vez a organizarnos para emplear la pila de tecnologías completa, desde el Front hasta el Back. Esta es la primera aplicación Full-Stack que el grupo ha ensamblado. Ninguno de los miembros del grupo ha hecho trabajo ni de Frontend ni de Backend previo al inicio del curso, por lo que todo el flujo de trabajo fue impresionantemente abrumador al inicio.
-   Adelantarse con los temas que aún estaban borrosos. Ninguno de los compañeros era precisamente "Duro" en todos los temas dados a lo largo del semestre (Tanto por falta de práctica, por falta de atención o por la simple dificultad de los temas), por lo que, al momento de desarrollar, el trabajo se duplicó y ahora el problema no era solamente ver cómo implementar los conocimientos adquiridos gracias al curso, sino que también había que adquirir los conocimientos que todavía estuvieran fallos tan rápido como fuera posible. Esto forzó al equipo a implementar soluciones breves que compensaran el tiempo que se perdió al tener que adelantarse en los conceptos, lo cual en ciertos puntos puede ser hasta contraproducente. Por ejemplo, usar JDBC sin más es una alternativa a Hibernate que requiere de poco estudio dado lo simple que es la sintaxis SQL y la ejecución del lenguaje desde Java, pero que a la larga se vuelve una solución pesada, ya que toca hacer clases que manipulen los ResultSets devueltos por cada Query y hay atenerse a ciertos detalles de los que uno no se da cuenta sino hasta ya haber experimentado con Postgres, como el hecho de que no se emplean comillas inglesas (") para hacer referencia a nombres de tablas, sino comillas simples (').
