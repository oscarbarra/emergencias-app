
import styles from './CercaDeTi.module.css'

function CercaDeTi() {
    return (
        <div className={`${styles.center_text} ${styles.block}`}>
            <img src='./IE.png' alt='Imagen de la Emergencia' className={styles.white_image}/>
            <p className={styles.white_text}>Incendio en la Araucania</p>
        </div>
        
    )
}

export default CercaDeTi