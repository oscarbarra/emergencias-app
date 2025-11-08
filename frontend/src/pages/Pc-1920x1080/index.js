
import styles from './index.module.css'
import Comunidad from '../../components/Comunidades/Comunidad';
import ComunidadInfo from '../../components/Comunidades/ComunidadGuardada/ComunidadGuardada';
import Sugerencia from '../../components/Sugerencias/sugerencia';
import Publicacion from '../../components/Publicaciones/publicacion';

function Pc1920x1080() {
    const ComunidadesInfo = [];
    const Publicaciones = [];
    const Sugerencias = [];

    const img = ["Derrumbe.jpg", "Incendios-forestales.jpg", "Inundaciones.jpg"]
    const msg = ["Derrumbre en Atacama", "Incendio en Valparaiso", "Puente Alto nuevamente con inundaciones"]
    const cds = ["Temuco", "Santiago", "Atacama", "Valparaiso"]

    function crearComunidades(cantidad) {
        for (let j = 0; j < cantidad; j++) {
            ComunidadesInfo.push(<ComunidadInfo
                ciudad={`${cds[j % 4]}`}
            />)
        }
    }

    function crearPublicaciones(cantidad) {
        for (let k = 0; k < cantidad; k++) {
            Publicaciones.push(
                <Publicacion
                    usuario="Oscar Barra"
                    icono="./IE.png"
                    mensaje={`${msg[k % 3]}`}
                    imagen={`${img[k % 3]}`}
                />)
        }
    }

    function crearSugerencias(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            Sugerencias.push(<Sugerencia
                mensaje={`${msg[i % 3]}`}
                imagen={`${img[i % 3]}`}
            />)
        }
    }

    crearComunidades(40)
    crearPublicaciones(50)
    crearSugerencias(30)

    return (
        <div className={styles.container}>
            {/* Izquierda */}
            <section>
                <div className={`${styles.logo_container} ${styles.sticky_top}`}>
                    <img src='./Vigilare_01-A.png' alt='Logo app' className={styles.logo} />
                </div>

                <ul>
                    <li className={styles.comunidades_block}>
                        <Comunidad comunidadesInfo={ComunidadesInfo} />
                    </li>
                </ul>

                <div className={styles.user_container}>
                    <div className={`${styles.user_data}`}>
                        <img src="./IE.png" alt="Icono del usuario" className={styles.user_icon} />
                        <span className={styles.user_name}>[O]scar [Ba]rra</span>
                    </div>
                </div>

            </section>

            {/* Centro */}
            <section>
                <div className={`${styles.block} ${styles.center_text} ${styles.sticky_top}`}>
                    <span className={styles.white_text}>Noticias en Chile</span>
                </div>

                {Publicaciones}
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