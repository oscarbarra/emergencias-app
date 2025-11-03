
import styles from './index.module.css'
import CloseToYou from '../../components/EmergenciaCercaDeTi/CercaDeTi'
import Comunidades from '../../components/Comunidades/Comunidades';
import ComunidadGuardada from '../../components/ComunidadGuardada/ComunidadGuardada';
import EmergenciaPublicacion from '../../components/EmergenciaPublicacion/EmergenciaPublicacion';

function Pc1920x1080() {
    const EmergenciasCercanas = [];
    const Comunidadesguardadas = [];
    const EmergenciasEsquemas = [];

    const img = ["Derrumbe.jpg", "Incendios-forestales.jpg", "Inundaciones.jpg"]
    const msg = ["Derrumbre en Atacama", "Incendio en Valparaiso", "Puente Alto nuevamente con inundaciones"]
    const cds = ["Temuco", "Santiago", "Atacama", "Valparaiso"]

    function crearEmergenciasCercanas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            EmergenciasCercanas.push(<CloseToYou 
                mensaje={`${msg[i%3]}`}
                imagen={`${img[i%3]}`}
            />)
        }
    }

    function crearComunidadesguardadas(cantidad) {
        for (let j = 0; j < cantidad; j++) {
            Comunidadesguardadas.push(<ComunidadGuardada 
                ciudad={`${cds[j%4]}`}
            />)
        }
    }

    function crearEmergenciasEsquemas(cantidad) {
        for (let k = 0; k < cantidad; k++) {
            EmergenciasEsquemas.push(
                <EmergenciaPublicacion
                    usuario="Oscar Barra"
                    icono="./IE.png"
                    mensaje={`${msg[k % 3]}`}
                    imagen={`${img[k % 3]}`}
                />)
        }
    }

    crearEmergenciasCercanas(3)
    crearComunidadesguardadas(4)
    crearEmergenciasEsquemas(5)

    return (
        <div className={styles.container}>
            {/* Izquierda */}
            <section>
                <ul>
                    <li className={`${styles.logo_container} ${styles.sticky_top}`}>
                        <img src='./Vigilare_01-A.png' alt='Logo app' className={styles.logo} />
                    </li>

                    <li className={styles.block}>
                        <Comunidades comunidades={Comunidadesguardadas} />
                    </li>
                </ul>
            </section>

            {/* Centro */}
            <section>
                <div className={`${styles.block} ${styles.center_text} ${styles.sticky_top}`}>
                    <span className={styles.black_text}>Noticias en Chile</span>
                </div>

                {EmergenciasEsquemas}
            </section>

            {/* Derecha */}
            <section>
                <div className={`${styles.block} ${styles.center_text}  ${styles.sticky_top}`}>
                    <span className={styles.black_text}>Emergencias cercanas</span>
                </div>

                {EmergenciasCercanas}
            </section>
        </div>

    )
}

export default Pc1920x1080