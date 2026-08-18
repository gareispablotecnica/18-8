const express= require('express')
const Rutas= express.Router()

const RegistroDatos= require('../Controller/Planetas.Controller')

// .get || .post

Rutas.post('/registro',RegistroDatos.RegistroDatos)
Rutas.get('/verTabla',RegistroDatos.VerDatos)

module.exports=Rutas;