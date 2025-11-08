
import styles from './sugerencia.module.css'

function Sugerencia({ imagen, mensaje }) {
    return (
        <div className={`${styles.block} main_hover`}>
            <img src={imagen} alt='Imagen de la Emergencia' className={styles.white_image}/>
            <p className={styles.white_text}>{mensaje}</p>
        </div>
        
    )
}

export default Sugerencia