import React, { useState, useEffect } from 'react';
import { api } from '../../Services/api';

function Tarjetas() {

    const [BaseDatos, setBaseDatos] = useState([]);

    useEffect(() => {

        const VerTablas = async () => {

            try {

                const buscar = await api.get('/verTabla');

                setBaseDatos(buscar.data);

            } catch (error) {

                console.error('Error fetching data:', error);

            }

        };

        VerTablas();

    }, []);

    return (
        <div className="Planetes">

            {BaseDatos.map((i, index) => (

                <article
                    key={i.ID_Planeta}
                    className="Tarjeta"
                >

                    <span className="NumeroPlaneta">
                        0{index + 1}
                    </span>

                    <div>

                        <h2 className="Nombre">
                            {i.Nombre}
                        </h2>

                        <p className="Descripcion">
                            {i.Descripcion}
                        </p>

                        <p className="Dis">
                            {i.Dis}
                        </p>

                    </div>

                </article>

            ))}

        </div>
    );
}

export default Tarjetas;