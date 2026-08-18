const sql = require('sqlite3').verbose()
const path = require('path')
const { ERROR } = require('sqlite3')

const ConexionBD = new sql.Database('./src/db/data.db', (error) => {
    if(error){
        console.error('No se Creo la Base de Datos ❌',error.message)
    }
    else{
        console.log('Se Creo la Base de Datos Correctamente ✅')
        ConexionBD.run(
            `
                CREATE TABLE IF NOT EXISTS Planetas(
                    ID_Planeta INTEGER PRIMARY KEY AUTOINCREMENT,
                    Nombre TEXT NOT NULL,
                    Descripcion TEXT NOT NULL,
                    Dis TEXT NOT NULL
                )
            `,(error)=>{
                if(error){
                    console.error('No se Logro crear la Tabla Planetiños ❌',error.message)
                }
                else{
                    console.log('Tabla Planetas creada con exito ✅')
                }
            }
        )
    }
})

module.exports=ConexionBD;