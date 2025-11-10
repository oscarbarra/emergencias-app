
import styles from './sugerencia.module.css'

function Sugerencia({ imagen, mensaje }) {
    return (
        <div className={`${styles.block} hover_efect`}>
            <img src={imagen} alt='Imagen de la Emergencia' className={styles.white_image}/>
            <p className={styles.white_text}>{mensaje}</p>
        </div>
        
    )
}

export default Sugerencia