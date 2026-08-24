const express= require('express')
const Rutas= express.Router()

const RegistroDatos= require('../Controller/Planetas.Controller')

// .get || .post || put || delete

Rutas.post('/registro',RegistroDatos.RegistroDatos)
Rutas.get('/verTabla',RegistroDatos.VerDatos)
// <ID_Planeta>
Rutas.put('/Modificar/:ID_Planeta',RegistroDatos.ModificarDatos)

Rutas.delete('/Eliminar/:ID_Planeta',RegistroDatos.EliminarDatos)
module.exports=Rutas;