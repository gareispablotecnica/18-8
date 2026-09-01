// rfec + Enter
import React from 'react'
// --> Dependencias
import { useState, useEffect } from 'react'
// ---> services/api.js --> metodo
import { api } from '../Services/api'


function Tarjetas() {
    // --> BD:V , Capturamos
    const [BaseDatos, setBaseDatos] = useState([]);
    useEffect(() => {
        // --> Metodo para ver tablas
        const VerTablas = async () => {
            // si
            try {
                // capturamos la url
                const buscar = await api.get('/verTabla');
                // ---> data: info
                setBaseDatos(buscar.data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        VerTablas();
    }, []);


    return (
        <>
            <div className='Planetes'>
                {BaseDatos.map((i)=>(
                    <div key={i.ID_Planeta} className='Tarjeta'>
                        <h1 className='Nombre'>{i.Nombre}</h1>
                        <h2 className='Descripcion'>{i.Descripcion}</h2>
                        <h3 className='Dis'>{i.Dis}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Tarjetas