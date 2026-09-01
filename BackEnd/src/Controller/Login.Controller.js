// --> Sirve para Registrar, Ver, Modificar y Eliminar Datos de la Tabla Planetas
const express = require('express')
// --> Trae la Conexion de la Base de Datos
const ConexionBD = require('../db/database')

const Login=(req,res)=>{
    const {User,Password}=req.body;

    if(!User || !Password){
        console.error('Aqui No estan completos los datos')
        return res.status(400).json({error:'Debe Completar los datos para Continuar'})
    }

    query=`SELECT * FROM Usuarios WHERE User=? AND Password =?`

    ConexionBD.get(query,[User,Password],(error,Usuarios)=>{
            if(error){
                console.error('Error en Servidor')
                return res.status(500).json({error:'Error de Server'})
            }
            if(!Usuarios){
                 console.error('Error en Credenciales')
                return res.status(401).json({error:'Error de Credenciales'})
            }
            console.log('Aqui si se Logueo')
            return res.status(201).json({Mensaje: 'Usuario Logueado'})
    })

}

module.exports={Login}