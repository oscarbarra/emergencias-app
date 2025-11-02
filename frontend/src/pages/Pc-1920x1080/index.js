
import styles from './index.module.css'
import CloseToYou from '../../components/EmergenciaCercaDeTi/CercaDeTi'
import Comunidades from '../../components/Comunidades/Comunidades';
import ComunidadGuardada from '../../components/ComunidadGuardada/ComunidadGuardada';
import EmergenciaPublicacion from '../../components/EmergenciaPublicacion/EmergenciaPublicacion';

function Pc1920x1080() {
    const EmergenciasCercanas = [];
    const Comunidadesguardadas = [];
    const EmergenciasEsquemas = [];

    function crearEmergenciasCercanas(cantidad) {
        for (let i=0; i<cantidad; i++) {
            EmergenciasCercanas.push(<CloseToYou />)
        }
    }

    function crearComunidadesguardadas(cantidad) {
        for (let j=0; j<cantidad; j++) {
            Comunidadesguardadas.push(<ComunidadGuardada />)
        }
    }

    function crearEmergenciasEsquemas(cantidad) {
        for (let k=0; k<cantidad; k++) {
            EmergenciasEsquemas.push(
                <EmergenciaPublicacion 
                usuario="Oscar Barra"
                icono="./IE.png"
                mensaje="Explorando la nueva versión de la app"
                imagen="./IE.png"
            />)
        }
    }

    crearEmergenciasCercanas(10)
    crearComunidadesguardadas(10)
    crearEmergenciasEsquemas(10)

    return (
        <div className={styles.container}>
            {/* Izquierda */}
            <section>
                <ul>
                    <li className={styles.logo_container}>
                        <img src='./Vigilare_01-A.png' alt='Logo app' className={styles.logo}/>
                    </li>

                    <li className={styles.block}>
                        <Comunidades comunidades={Comunidadesguardadas} />
                    </li>
                </ul>
            </section>

            {/* Centro */}
            <section>
                <div className={`${styles.block} ${styles.center_text}`}>
                    <span className={styles.white_text}>Comunidad de Quepe</span>
                </div>

                {EmergenciasEsquemas}
            </section>

            {/* Derecha */}
            <section>
                <div className={`${styles.block} ${styles.center_text}`}>
                    <span className={styles.white_text}>Emergencias cerca de tu posición</span>
                </div>

                {EmergenciasCercanas}
            </section>
        </div>
        
    )
}

export default Pc1920x1080