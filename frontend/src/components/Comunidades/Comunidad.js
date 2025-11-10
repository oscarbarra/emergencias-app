
import { useState } from "react";

import styles from './Comunidad.module.css'

function Comunidad({ comunidadesInfo }) {
    const [mostrarComunidades, setMostrarComunidades] = useState(false);

    function toggleMostrarComunidades() {
        setMostrarComunidades(!mostrarComunidades);
    }

    return (
        <div className={`${styles.container}`}>
            <div onClick={toggleMostrarComunidades}
                className={`${styles.block} ${styles.fijo} hover_efect`}>
                <p className='text_comunidades'>Comunidades</p>
            </div>

            { mostrarComunidades && comunidadesInfo }
        </div>
    );
};

export default Comunidad;
