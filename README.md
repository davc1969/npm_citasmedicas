# Citas Médicas - Clínica DENDE SPA
## Desafío de clase Node y NPM

#### Utilización de librerías y creación de servidor

Se utilizaron las siguientes librerías que fueron gestionadas en elproyecto con npm:
* **Express**: para la creación del servidor
* **Axios**: para la comunicación con el endpoint del API
* **Lodash**: manejo de arreglos
* **Moment**: gestión de un valor de tiempo y su formato
* **UUID**: Creación de unidentificador único
* **Chalk**: Formato de colores para la salida en cónsola

El programa genera un listado de 50 usuarios leyendo la información del API de *randomuser.me*.  Extrae el nombre y el apellido. Utilizando la librería UUID genera un identificador único para cada usuario y con Moment, genera una fecha y hora de creación del registro.  Esa información la coloca en un arreglo el cual es manejado por Lodash y se envía al cliente desde Axios.
En la cónsola del servidor se escriben los mismos registros ceados, utuilizando la librería Chalk para darle formato.

##### *Creado por **Darío Valenzuela***