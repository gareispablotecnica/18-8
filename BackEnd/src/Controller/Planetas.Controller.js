const express = require('express')
const ConexionBD = require('../db/database')

const RegistroDatos=(req,res)=>{
    const {Nombre,Descripcion,Dis}=req.body;
    const query=`INSERT INTO Planetas(Nombre,Descripcion,Dis)VALUES(?,?,?)`
    ConexionBD.run(query,[Nombre,Descripcion,Dis],(error)=>{
        if(error){
            console.error('No se logro registrar los Datos ❌', error.message)
            return res.status(500).json({error:'Error al Registrar los Datos ❌'})
        }
        return res.status(201).json({Mensaje:'Datos Registrados Correctamente ✅'})
        console.log('Datos Registrados ✅')
    })
}


const VerDatos=(req,res)=>{
    const query=`SELECT * FROM Planetas`
    ConexionBD.all(query,[],(error,Tabla)=>{
        if(error){
            console.error('No se logro Ver los Datos ❌', error.message)
            return res.status(500).json({error:'Error al Registrar los Datos ❌'})
        }
        return res.status(201).json(Tabla)
        console.log('Datos Obtenidos ✅')
    })
}


module.exports={RegistroDatos,VerDatos};