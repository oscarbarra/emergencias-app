
import styles from './index.module.css'
import Comunidad from '../../components/Comunidades/Comunidad';
import ComunidadInfo from '../../components/Comunidades/ComunidadGuardada/ComunidadInfo';
import Sugerencia from '../../components/Sugerencias/sugerencia';
import Publicacion from '../../components/Publicaciones/publicacion';

import { pubCreadas } from './constantes/publicaciones'

import { useState, useEffect } from "react";

function Pc1920x1080() {
    const [idxCiudad, setIdxCiudad] = useState(null);
    const [publicaciones, setPublicaciones] = useState([]);

    let ComunidadesInfo = [];
    let Sugerencias = [];

    const img = ["emergencias/Derrumbe.jpg", "emergencias/Incendios-forestales.jpg", "emergencias/Inundaciones.jpg"]
    const msg = ["Derrumbre en Atacama", "Incendio en Valparaiso", "Puente Alto nuevamente con inundaciones"]
    const cds = ["Todo Chile", "Temuco", "Santiago", "Atacama", "Valparaiso"]

    function manejarSeleccion(idx) {
        setIdxCiudad(idx);
        crearPublicaciones(idx);
    }

    function crearComunidades(cantidad) {
        ComunidadesInfo = [];
        for (let j = 0; j < cantidad; j++) {
            ComunidadesInfo.push(<ComunidadInfo
                idx={j + 1}
                ciudad={`${cds[j % cds.length]}`}
                onSelect={manejarSeleccion}
            />)
        }
    }

    function crearPublicaciones(idx) {
        let publicacionesCiudad = [];

        if (idx === 1) {
            publicacionesCiudad = Object.values(pubCreadas).flat();
        } else {
            publicacionesCiudad = pubCreadas[idx] || [];
        }

        const componentes = publicacionesCiudad.map((pub, i) => (
            <Publicacion
                key={i}
                usuario={pub.usr}
                icono={pub.icon}
                mensaje={pub.msg}
                imagen={pub.img}
            />
        ));

        setPublicaciones(componentes);
    }

    function crearSugerencias(cantidad) {
        Sugerencias = [];
        for (let i = 0; i < cantidad; i++) {
            Sugerencias.push(<Sugerencia
                mensaje={`${msg[i % msg.length]}`}
                imagen={`${img[i % img.length]}`}
            />)
        }
    }

    useEffect(() => {
        // Publicaciones
        setIdxCiudad(1);
        crearPublicaciones(1);
    }, []);

    // Comunidades
    crearComunidades(3)

    // Sugerencias
    crearSugerencias(3)

    return (
        <div className={styles.container}>
            {/* Izquierda */}
            <section>
                <div className={`${styles.logo_container} ${styles.sticky_top}`}>
                    <img src='logo-1.png' alt='Logo app' className={styles.logo} />
                </div>

                <ul>
                    <li className={styles.comunidades_block}>
                        <Comunidad comunidadesInfo={ComunidadesInfo} />
                    </li>
                </ul>

                <div className={styles.user_container}>
                    <div className={`${styles.user_data}`}>
                        <img src="usuarios/IE.png" alt="Icono del usuario" className={styles.user_icon} />
                        <span className={styles.user_name}>[O]scar [Ba]rra</span>
                    </div>
                </div>

            </section>

            {/* Centro */}
            <section>
                <div className={`${styles.block} ${styles.center_text} ${styles.sticky_top}`}>
                    <span className={styles.white_text}>Noticias en Chile</span>
                </div>

                {publicaciones}
            </section>

            {/* Derecha */}
            <section>
                <div className={`${styles.block} ${styles.center_text}  ${styles.sticky_top}`}>
                    <span className={styles.white_text}>Emergencias cercanas</span>
                </div>

                {Sugerencias}
            </section>
        </div>

    )
}

export default Pc1920x1080