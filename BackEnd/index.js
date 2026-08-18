const express= require('express')
const cors = require('cors')
const dotenv= require('dotenv')

const App= express()

dotenv.config()

const PORT= process.env.PORT  || 3001

App.use(cors())
App.use(express.json())

// App.get('/',(req,res)=>{
//     res.send('Ayestaran')
// })

const Rutas= require('./src/Router/Rutas.routes')
App.use('/',Rutas)


App.listen(PORT,()=>{
    console.log(`🚀 http://localhost:${PORT}`)
})

