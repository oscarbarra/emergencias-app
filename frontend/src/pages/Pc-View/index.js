import styles from './index.module.css'
import ComunidadInfo from '../../components/Comunidades/ComunidadInfo';
import Sugerencia from '../../components/Sugerencias/sugerencia';
import Publicacion from '../../components/Publicaciones/publicacion';

import { useState, useEffect } from "react";

import { comunidadesObj, publicacionesObj } from './utilidades/constantes';
import { CumunidadesCls, PublicacionCls } from './utilidades/objetos';

function PcView() {
    const [comunaActual, setComunaActual] = useState("Todo Chile");
    const [mostrarComunidades, setMostrarComunidades] = useState(false);

    const [listaComunidades, setListaComunidades] = useState([]);
    const [listaPublicaciones, setListaPublicaciones] = useState([]);

    // ===== Funciones Auxiliares =====
    function toggleMostrarComunidades() {
        setMostrarComunidades(prev => !prev);
    }

    // ===== Funciones Importantes =====
    function renderComunidades() {
        return listaComunidades.map(cum => (
            <ComunidadInfo
                nombre={cum.nombre}
                updateComuna={setComunaActual}
                onClicked={renderPublicaciones}
            />
        ));
    };

    function renderPublicaciones(cum=comunaActual) {
    const pubs = 
        cum === "Todo Chile"
            ? listaPublicaciones
            : listaPublicaciones.filter(pub => pub.comuna === cum);

    return pubs.map(pub => (
        <Publicacion
            key={pub.id}
            usuario={pub.usuario}
            icono={pub.icon}
            mensaje={pub.mensaje}
            imagen={pub.imagen}
            comuna={pub.comuna}
        />
    ));
};

    function renderSugerencias(cum=comunaActual) {
    const todas = listaPublicaciones;
    const sugerenciasData = todas.filter(pub => pub.comuna !== cum);
    return sugerenciasData.map(sug => (
        <Sugerencia
            mensaje={sug.mensaje}
            imagen={sug.imagen}
        />
    ));
}


    // ===== Carga Inicial de los Datos =====
    useEffect(() => {
        const comunidadesTemp = Object.keys(comunidadesObj).map(key => {
            return new CumunidadesCls(comunidadesObj[key]);
        });

        setListaComunidades(comunidadesTemp);
    }, []);

    useEffect(() => {
        const publicacionesTemp = [];

        Object.keys(publicacionesObj).forEach(comunaId => {
            publicacionesObj[comunaId].forEach(pub => {
                publicacionesTemp.push(
                    new PublicacionCls(
                        pub.usr,
                        pub.icon,
                        pub.msg,
                        pub.img,
                        pub.comuna
                    )
                );
            });
        });

        setListaPublicaciones(publicacionesTemp);
    }, []);

    // ===== Revision de los datos =====
    useEffect(() => {
        console.log(listaComunidades);
        console.log(listaPublicaciones);
        console.log(comunaActual);
    }, [listaComunidades, listaPublicaciones, comunaActual]);

    return (
        <div className={styles.container}>
            {/* Izquierda */}
            <section>
                <div className={`${styles.logo_container} ${styles.sticky_top}`}>
                    <img src='logo-1.png' alt='Logo app' className={styles.logo} />
                </div>

                <ul>
                    <li className={`${styles.comunidades_container}`}>
                        <div onClick={toggleMostrarComunidades}
                            className={`${styles.comunidades_block} ${styles.comunidades_fijo} hover_efect`}>
                            <p className='text_comunidades'>Comunidades</p>
                        </div>
                    </li>

                    {mostrarComunidades && renderComunidades()}
                </ul>

                <div className={styles.user_container}>
                    <div className={`${styles.user_data}`}>
                        <img src="usuarios/SnowMan.jpg" alt="Icono del usuario" className={styles.user_icon} />
                        <span className={styles.user_name}>[O]scar [Ba]rra</span>
                    </div>
                </div>

            </section>

            {/* Centro */}
            <section>
                <div className={`${styles.block} ${styles.center_text} ${styles.sticky_top}`}>
                    <span className={styles.white_text}>Noticias en Chile</span>
                </div>

                {renderPublicaciones()}
            </section>

            {/* Derecha */}
            <section>
                <div className={`${styles.block} ${styles.center_text}  ${styles.sticky_top}`}>
                    <span className={styles.white_text}>Sugerencias</span>
                </div>

                {renderSugerencias()}
            </section>
        </div>
    )
}

export default PcView;
