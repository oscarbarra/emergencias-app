
import styles from './ComunidadGuardada.module.css'

function ComunidadGuardada({ ciudad }) {
    return (
        <li className={`${styles.block} ${styles.black_text}`}>
            <p className={styles.text}> {ciudad} </p>
        </li>
    );
};

export default ComunidadGuardada;
