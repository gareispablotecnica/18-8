// --> Sirve para Registrar, Ver, Modificar y Eliminar Datos de la Tabla Planetas
const express = require('express')
// --> Trae la Conexion de la Base de Datos
const ConexionBD = require('../db/database')

// --> Función para Registrar Datos en la Tabla Planetas
const RegistroDatos = (req, res) => {
    // --> Destructuring para obtener los datos del cuerpo de la solicitud
    const { Nombre, Descripcion, Dis } = req.body;
    // --> Consulta SQL para insertar los datos en la tabla Planetas
    const query = `INSERT INTO Planetas(Nombre,Descripcion,Dis)VALUES(?,?,?)`
    // --> Ejecuta la consulta SQL con los datos proporcionados
    ConexionBD.run(query, [Nombre, Descripcion, Dis], (error) => {
        // --> Manejo de errores en caso de que la consulta falle
        if (error) {
            console.error('No se logro registrar los Datos ❌', error.message)
            // --> Código 500 porque hubo un error en el servidor al intentar registrar los datos
            return res.status(500).json({ error: 'Error al Registrar los Datos ❌' })
        }
        // --> Código 201 porque los datos se registraron correctamente
        return res.status(201).json({ Mensaje: 'Datos Registrados Correctamente ✅' })
        console.log('Datos Registrados ✅')
    })
}

// --> Función para Ver los Datos de la Tabla Planetas
const VerDatos = (req, res) => {
    // --> Consulta SQL para seleccionar todos los datos de la tabla Planetas
    const query = `SELECT * FROM Planetas`
    // --> Ejecuta la consulta SQL para obtener los datos de la tabla Planetas
    ConexionBD.all(query, [], (error, Tabla) => {
        // --> Manejo de errores en caso de que la consulta falle
        if (error) {
            console.error('No se logro Ver los Datos ❌', error.message)
            return res.status(500).json({ error: 'Error al Registrar los Datos ❌' })
        }
        // --> Código 201 porque los datos se obtuvieron correctamente
        return res.status(201).json(Tabla)
        console.log('Datos Obtenidos ✅')
    })
}

// --> Función para Modificar los Datos de la Tabla Planetas
const ModificarDatos = (req, res) => {
    // --> Destructuring para obtener el ID del planeta de los parámetros de la solicitud y los datos del cuerpo de la solicitud
    const { ID_Planeta } = req.params;
    // --> Destructuring para obtener los datos del cuerpo de la solicitud
    const { Nombre, Descripcion, Dis } = req.body;
    // --> Consulta SQL para actualizar los datos en la tabla Planetas
    const query = `UPDATE Planetas 
        SET Nombre=?,
        Descripcion=?,
        Dis=?
        WHERE ID_Planeta=?
        `
    // --> Ejecuta la consulta SQL con los datos proporcionados
    ConexionBD.run(query, [Nombre, Descripcion, Dis, ID_Planeta], (error) => {
        if (error) {
            console.error('Error al Intentar Modificar los Datos ❌', error.message)
            // --> Código 500 porque hubo un error en el servidor al intentar modificar los datos
            return res.status(500).json({ Mensaje: 'No se logro Modificar Correctamente los Datos' })
        }
        // --> Código 401 porque no se detectaron cambios en los datos
        if (this.changes === 0) {
            return res.status(401).json({ Mensaje: 'No se Detectaron Cambios ' })
        }
        // --> Código 201 porque los datos se modificaron correctamente
        console.log('Datos Modificados ✅')
        return res.status(201).json({ Mensaje: 'Datos Modificados Correctamente' })
    })

}

// --> Función para Eliminar los Datos de la Tabla Planetas
const EliminarDatos = (req, res) => {
    const { ID_Planeta } = req.params;
    const query = `DELETE FROM Planetas
        WHERE ID_Planeta=?
        `
    ConexionBD.run(query, [ID_Planeta], (error) => {
        if (error) {
            console.error('Error al Intentar Eliminar los Datos ❌', error.message)
            return res.status(500).json({ Mensaje: 'No se logro Eliminar Correctamente los Datos' })
        }
        console.log('Datos Eliminados ✅')
        return res.status(201).json({ Mensaje: 'Datos Eliminados Correctamente' })
    })

}


// --> Exporta las funciones para que puedan ser utilizadas en otros archivos
module.exports = { RegistroDatos, VerDatos, ModificarDatos,EliminarDatos };