import React from 'react'
import { useState } from 'react'
import { api } from '../../Services/api'
import axios from 'axios'

function Registrar() {
    const [form, setForm] = useState(
        {
            Nombre: '',
            Descripcion: '',
            Dis: ''
        }
    )
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const Registros = await api.post('/registro', form)
            setForm({
                Nombre: '',
                Descripcion: '',
                Dis: ''
            })
            console.log('Planeta registrado con éxito:', Registros.data)
        }
        catch (error) {
            console.error('Error al registrar el planeta:', error)
        }
    }

    const [Mensaje, setMensaje] = useState('')
    const [Error, setError] = useState(false)
    return (
        <>
            <div className="formulario">
                <img src="" alt="" />
                <form action="" method="post" onSubmit={handleSubmit}>

                    <label htmlFor="Nombre">Nombre</label>
                    <input
                        type="text"
                        name="Nombre"
                        id="Nombre"
                        value={form.Nombre}
                        onChange={handleChange}
                    />

                    <label htmlFor="Descripcion">Descripción</label>
                    <input
                        type="text"
                        name="Descripcion"
                        id="Descripcion"
                        value={form.Descripcion}
                        onChange={handleChange}
                    />

                    <label htmlFor="Dis">Distancia</label>
                    <input
                        type="text"
                        name="Dis"
                        id="Dis"
                        value={form.Dis}
                        onChange={handleChange}
                    />

                    <input type="submit" value="Registrar Planeta" />

                </form>
                {Mensaje && <p className='mensaje'>Datos Registrados! ✅</p>}
                {Error && <p className='error'>Error al Completar el Formulario ⛑️</p>}
            </div>
        </>
    )
}

export default Registrar