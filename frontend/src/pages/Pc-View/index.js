import styles from './index.module.css'

import ComunidadInfo from './components/Comunidades/ComunidadInfo';
import Sugerencia from './components/Sugerencias/sugerencia';
import Publicacion from './components/Publicaciones/publicacion';

import ModalPublicacion from './modales/Publicaciones/modalPublicacion';
import ModalComentarios from './modales/Comentarios/modalComentarios';

import { useState, useEffect } from "react";

import { comunidadesObj, publicacionesObj } from './utilidades/constantes';
import { CumunidadesCls, PublicacionCls } from './utilidades/objetos';
import { ComentarioCls } from './utilidades/objetos';

function PcView() {
    const [comunaActual, setComunaActual] = useState("Todo Chile");
    const [mostrarComunidades, setMostrarComunidades] = useState(true);
    const [mostrarFormularioPublicacion, setMostrarFormularioPublicacion] = useState(false);
    const [mostrarComentarios, setMostrarComentarios] = useState(false);

    // Campos del Formulario para Crear Publicaciones
    const [mensaje, setMensaje] = useState("");
    const [imagen, setImagen] = useState(null);

    // Campos del Formulario para Crear Comentarios
    const [nuevoComentario, setNuevoComentario] = useState("");

    const [listaComunidades, setListaComunidades] = useState([]);
    const [listaPublicaciones, setListaPublicaciones] = useState([]);
    const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

    // ===== Funciones Auxiliares =====
    function toggleMostrarComunidades() {
        setMostrarComunidades(prev => !prev);
    }

    function AbrirSeccionComentarios(publicacion) {
        setPublicacionSeleccionada(publicacion);
        setMostrarComentarios(true);
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

    function renderPublicaciones(cum = comunaActual) {
        const pubs =
            cum === "Todo Chile"
                ? listaPublicaciones
                : listaPublicaciones.filter(pub => pub.comuna === cum);

        return pubs.map(pub => (
            <Publicacion
                usuario={pub.usuario}
                icono={pub.icon}
                mensaje={pub.mensaje}
                imagen={pub.imagen}
                comuna={pub.comuna}
                onClicked={AbrirSeccionComentarios}
                publi={pub}
            />
        ));
    };

    function renderSugerencias(cum = comunaActual) {
        const todas = listaPublicaciones;

        const sugerenciasData = todas.filter(pub =>
            pub.comuna !== cum && pub.imagen
        );

        return sugerenciasData.map(sug => (
            <Sugerencia
                key={sug.id}
                mensaje={sug.mensaje}
                imagen={sug.imagen}
            />
        ));
    }

    function crearPublicacion(e) {
        e.preventDefault();

        const nuevaPublicacion = new PublicacionCls(
            "Usuario Actual",
            "/usuarios/SnowMan.jpg",
            mensaje,
            imagen ? URL.createObjectURL(imagen) : null,
            comunaActual
        );

        setListaPublicaciones(prev => [...prev, nuevaPublicacion]);

        // reset valores
        setMensaje("");
        setImagen(null);
        setMostrarFormularioPublicacion(false);
    }

    function agregarComentario(e) {
        e.preventDefault();
        if (!nuevoComentario.trim()) return;

        const comentario = new ComentarioCls(
            nuevoComentario,
            "UsuarioActual",
            new Date().toLocaleString()
        );

        setListaPublicaciones(prev => {
            const nuevasPublicaciones = prev.map(pub => {
                if (pub.id === publicacionSeleccionada.id) {
                    return {
                        ...pub,
                        comentarios: [...pub.comentarios, comentario]
                    };
                }
                return pub;
            });

            const nuevaSeleccionada = nuevasPublicaciones.find(
                p => p.id === publicacionSeleccionada.id
            );
            setPublicacionSeleccionada(nuevaSeleccionada);

            return nuevasPublicaciones;
        });

        setNuevoComentario("");
    }

    // ===== Carga Inicial de los Datos Pre-Cargados =====
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
                    <li className={styles.comunidades_container}>
                        <div onClick={toggleMostrarComunidades}
                            className={`${styles.comunidades_block} ${styles.comunidades_fijo} hover_efect`}>
                            <p className='text_comunidades'>Comunidades</p>
                        </div>
                    </li>

                    {mostrarComunidades && renderComunidades()}
                </ul>

                <div className={styles.user_container}>
                    <div
                        className={`${styles.comunidades_block} hover_efect`}
                        onClick={() => setMostrarFormularioPublicacion(true)}
                    >
                        <p className='text_comunidades'>Crear Publicación</p>
                    </div>

                    <div className={`${styles.user_data}`}>
                        <img src="usuarios/SnowMan.jpg" alt="Icono del usuario" className={styles.user_icon} />
                        <span className={styles.user_name}>[O]scar [Ba]rra</span>
                    </div>
                </div>

                {mostrarFormularioPublicacion && (
                    <ModalPublicacion>
                        <form className={styles.formContainer} onSubmit={crearPublicacion}>

                            <h2>Crear nueva publicación</h2>

                            <label>Mensaje:</label>
                            <textarea
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                required
                            />

                            <label>Imagen (opcional):</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImagen(e.target.files[0] || null)}
                            />

                            <div className={styles.botonesForm}>
                                <button type="submit">Crear</button>

                                <button
                                    type="button"
                                    onClick={() => setMostrarFormularioPublicacion(false)}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </ModalPublicacion>
                )}
            </section>

            {/* Centro */}
            <section>
                <div className={`${styles.block} ${styles.center_text} ${styles.sticky_top}`}>
                    <span className={styles.white_text}>Noticias en Chile</span>
                </div>

                {renderPublicaciones()}

                {mostrarComentarios && (
                    <ModalComentarios
                        publicacion={publicacionSeleccionada}
                        onClose={() => setMostrarComentarios(false)}
                        nuevoComentario={nuevoComentario}
                        setNuevoComentario={setNuevoComentario}
                        agregarComentario={agregarComentario}
                    />
                )}

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