
import styles from './CercaDeTi.module.css'

function CercaDeTi({ imagen, mensaje }) {
    return (
        <div className={`${styles.center_text} ${styles.block}`}>
            <img src={imagen} alt='Imagen de la Emergencia' className={styles.black_image}/>
            <p className={styles.black_text}>{mensaje}</p>
        </div>
        
    )
}

export default CercaDeTi