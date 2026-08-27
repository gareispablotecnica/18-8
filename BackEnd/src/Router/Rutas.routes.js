const express= require('express')
// --> Rutas de la API para la Tabla Planetas
const Rutas= express.Router()
// --> Trae la Función para Registrar Datos en la Tabla Planetas
const RegistroDatos= require('../Controller/Planetas.Controller')

// .get || .post || put || delete
// --> Rutas para Registrar Datos en la Tabla Planetas
Rutas.post('/registro',RegistroDatos.RegistroDatos)
// --> Rutas para Ver los Datos de la Tabla Planetas
Rutas.get('/verTabla',RegistroDatos.VerDatos)
// --> Rutas para Modificar los Datos de la Tabla Planetas
Rutas.put('/Modificar/:ID_Planeta',RegistroDatos.ModificarDatos)
// --> Rutas para Eliminar los Datos de la Tabla Planetas
Rutas.delete('/Eliminar/:ID_Planeta',RegistroDatos.EliminarDatos)

// --> Exporta las rutas para que puedan ser utilizadas en otros archivos
module.exports=Rutas;