// 1. IMportar librería express para crear el servidor
const express = require('express');

// 2. IMportar Axios para abrir una API para la genereación de usuarios
const axios = require('axios');

// 3. Importar librería UUID para generar un id único para cada usuario
const { v4: uuidv4 } = require('uuid');

// 4. Importar librería Moment para agregar campo timestamp a cada registro de usuario
const moment = require('moment');

// 5. Importar Lodash para recorrer el arreglo de los usuarios
const lodash = require('lodash');

// 6. Importar librería chalk para escribir en cónsola con colores
const chalk = require('chalk');

// 7. Se instaló nodemon para levantar el servidor
// para esto, se creó un script llamado start_dev en package.json que corre el nodemon


// Primero, crear el servidor
const app = express();
const PORT = process.env.PORT || 3000;
const urlUsers = 'https://randomuser.me/api/?results=50&inc=name';

// Crear la ruta y su acción
app.get('/', (req, res) => {

    // Se llama a la API con axios
    axios.get(urlUsers)
    .then((data) => {
        let users = "";
        // Se obtiene la información en results, y luego, utilixando lodash se recorre el arreglo con la data y se construye la salida
        const results = data.data.results;
        lodash.forEach(results, (elem, index) => {
            let user = `${index + 1}. ${registeredUsers(elem)}`;
            console.log(chalk.blue.bgWhiteBright(user));  //Chalk se utiliza para mostrar lainformación en la cónsola
            users += user +"\n";
        })
        // Se cierra el proceso y se envía la inforación al cliente
        res.status = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.send(users)
        res.end();
    })

    // Si hubiese un error, se muestra
    .catch((e) => {
        console.log(e);
    });
});

// Se pone al servidor en escucha en el puerto 3000
app.listen(PORT,() => {
    console.log(`Listening server in http://localhost:${PORT}`)
});

// Función para construir la data en el formato especificado.  Utiliza las librerías UUID y Moment para construir in ID unico y el timestamp
function registeredUsers(elem) {
    const idUnique = uuidv4().slice(30);
    const timeStamp = moment().format("MMMM Do YYYY, h:mm:ss a");
    return `Nombre: ${elem.name.first} - Apellido: ${elem.name.last} - ID: ${idUnique} - Timestamp: ${timeStamp}`;

}