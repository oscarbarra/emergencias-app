
import { useState } from "react";

import styles from './Comunidades.module.css'

function Comunidades({ comunidades }) {
    const [mostrarComunidades, setMostrarComunidades] = useState(false);

    function toggleMostrarComunidades() {
        setMostrarComunidades(!mostrarComunidades);
    }

    return (
        <div className={`${styles.container}`}>
            <div onClick={toggleMostrarComunidades}
                className={`${styles.block} ${styles.black_text}`}>
                <p className={styles.text}>Comunidades</p>
            </div>

            { mostrarComunidades && comunidades }
        </div>
    );
};

export default Comunidades;
