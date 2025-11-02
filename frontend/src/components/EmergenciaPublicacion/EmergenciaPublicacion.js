
import styles from './EmergenciaPublicacion.module.css'

function EmergenciaPublicacion({ usuario, icono, mensaje, imagen }) {
    return (
        <li className={styles.post}>
            <div className={styles.header}>
                <img src={icono} alt="Icono del usuario" className={styles.icon} />
                <span className={styles.user}>{usuario}</span>
            </div>

            <p className={styles.message}>{mensaje}</p>

            <div className={styles.image_Container}>
                <img src={imagen} alt="Imagen de la publicación" className={styles.image} />
            </div>
        </li>
    )
}

export default EmergenciaPublicacion