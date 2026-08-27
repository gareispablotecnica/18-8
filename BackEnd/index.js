const express= require('express')
// --> Cors para permitir solicitudes desde otros dominios
const cors = require('cors')
// --> dotenv para manejar variables de entorno
const dotenv= require('dotenv')

// --> Crea una instancia de la aplicación Express
const App= express()

// --> Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config()

// --> Configura el puerto de la aplicación a partir de la variable de entorno PORT o usa el puerto 3001 por defecto
const PORT= process.env.PORT  || 3001

// --> Configura la aplicación para usar CORS y para parsear solicitudes JSON
App.use(cors())
// --> Configura la aplicación para parsear solicitudes JSON
App.use(express.json())

// App.get('/',(req,res)=>{
//     res.send('Ayestaran')
// })

// --> Importa las rutas definidas en el archivo Rutas.routes.js
const Rutas= require('./src/Router/Rutas.routes')
App.use('/',Rutas)

// --> Inicia el servidor en el puerto especificado y muestra un mensaje en la consola indicando que el servidor está corriendo
App.listen(PORT,()=>{
    console.log(`🚀 http://localhost:${PORT}`)
})

