# RestFulApi
Integrantes:
yenifer tatiana chanchi portilla
helmer wilfredo muchavisoy chindoy
camila andrea achacue troches
santiago felipe muñoz ordoñez

Aplicaciones Necesaria:
Postman como aplicacion necesaria para la ejecicion de las acciones del RESTFUL.
url de descarga (https://www.postman.com/downloads/)

                                              PASOS DE EJECUCION
                                              
..........................................................................................................
. importamos la DB a nuestro sistema de gestion de base de datos que se encuentra en la ruta db/task.sql .


1. ejecutar el archivo index.js, con la consola de nuestro sistema operativo o mediante la consola del IDE que usen para el desarrollo de proyectos, con el codigo (npm run dev). Esto que el que el archivo index.js inicie (contiene la configuracion del servidor y la ruta de la base de datos).

2. posteriormente ejecutamos Postman, acerca de Postman (https://www.postman.com/product/api-client/). 

3. en Postman, deberán crear una colleccion para guardar nuestras solicitudes, ingresan el nombre de la coleccion y agregan una descripcion si asi lo desean.

4. despues de obtener nuestra coleccion damos clic en la pestaña de adicion (+) que se encuentra en la parte medio-superior de Postman

5. abajo de "solicitud sin titulo" las opciones de solicitud que podemos hacer, en este caso 4 (GET, POST, PUT, DELETE).
como ejemplo obtendremos los datos que tenemos almacenamos en nuestra DB; para ello elegimos la opcion de GET (obtener), insertamos la ruta de nuestra base de datos, http://localhost:500/base (si el puerto 500 les da algun error, digitan el puerto del servidor local de su host). Finalmente obtendremos el contenido (tasks-tareas) de nuestra DB.

OBTENER EL DATO DE UNA ID

para ello precisamos de la ruta http://localhost:500/base/users/id luego damos clic en send (enviar).

POST (añadir datos)

para ello precisamos de la ruta http://localhost:500/base/id
para añadir los datos damos clic en la opcion Body, luego en la opcion raw, elegimos el formato JSON.
ejemplo de adicion de datos:

    {
        "id": 6,
        "Name": "Santi Arias",
        "Description": "ink",
        "Creation_Date": "0000-00-00 00:00:00."
    }
    
finalmente le damos en enviar.

PUT (actualizar datos)

para ello precisamos de la ruta http://localhost:500/base/users/id
para actualizar el la tarea aqui un ejemplo:

    {
        "id": 6,
        "Name": "Santi Arias chicunque",
        "Description": "ink",
        "Creation_Date": "0000-00-00 00:00:00."
    }
 
finalmente le damos en enviar

DELETE (eliminar una tarea)

para ello precisamos de la ruta http://localhost:500/base/users/id
simplemente elijen el id que deseen eliminar y le dan en enviar

......................................................................................................................................
