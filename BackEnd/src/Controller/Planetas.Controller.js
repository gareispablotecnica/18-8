const express = require('express')
const ConexionBD = require('../db/database')

const RegistroDatos = (req, res) => {
    const { Nombre, Descripcion, Dis } = req.body;
    const query = `INSERT INTO Planetas(Nombre,Descripcion,Dis)VALUES(?,?,?)`
    ConexionBD.run(query, [Nombre, Descripcion, Dis], (error) => {
        if (error) {
            console.error('No se logro registrar los Datos ❌', error.message)
            return res.status(500).json({ error: 'Error al Registrar los Datos ❌' })
        }
        return res.status(201).json({ Mensaje: 'Datos Registrados Correctamente ✅' })
        console.log('Datos Registrados ✅')
    })
}


const VerDatos = (req, res) => {
    const query = `SELECT * FROM Planetas`
    ConexionBD.all(query, [], (error, Tabla) => {
        if (error) {
            console.error('No se logro Ver los Datos ❌', error.message)
            return res.status(500).json({ error: 'Error al Registrar los Datos ❌' })
        }
        return res.status(201).json(Tabla)
        console.log('Datos Obtenidos ✅')
    })
}

const ModificarDatos = (req, res) => {
    const { ID_Planeta } = req.params;
    const { Nombre, Descripcion, Dis } = req.body;
    const query = `UPDATE Planetas 
        SET Nombre=?,
        Descripcion=?,
        Dis=?
        WHERE ID_Planeta=?
        `
    ConexionBD.run(query, [Nombre, Descripcion, Dis, ID_Planeta], (error) => {
        if (error) {
            console.error('Error al Intentar Modificar los Datos ❌', error.message)

            return res.status(500).json({ Mensaje: 'No se logro Modificar Correctamente los Datos' })
        }
        if (this.changes === 0) {
            return res.status(401).json({ Mensaje: 'No se Detectaron Cambios ' })
        }
        
        console.log('Datos Modificados ✅')
        return res.status(201).json({ Mensaje: 'Datos Modificados Correctamente' })
    })

}


const EliminarDatos = (req, res) => {
    const { ID_Planeta } = req.param;
    const query = `DELETE FROM Planetas
        WHERE ID_Planeta=?
        `
    ConexionBD.run(query, [ID_Planeta], (error) => {
        if (error) {
            console.error('Error al Intentar Eliminar los Datos ❌', error.message)
            return res.status(500).json({ Mensaje: 'No se logro Eliminar Correctamente los Datos' })
        }
        console.log('Datos Eliminados ✅')
        return res.status(201).json({ Mensaje: 'Datos Eliminar Correctamente' })
    })

}



module.exports = { RegistroDatos, VerDatos, ModificarDatos,EliminarDatos };