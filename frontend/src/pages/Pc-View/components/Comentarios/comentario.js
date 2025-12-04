
import styles from './comentario.module.css';

function Comentario({ texto, autor, fecha }) {
    return (
        <div className={styles.commentContainer}>
            <div className={styles.avatar}>
                {/* Puedes cambiar esta imagen por la del usuario real */}
                <img src="/usuarios/Miku.jpg" alt="avatar" />
            </div>

            <div className={styles.commentBody}>
                <div className={styles.commentHeader}>
                    <span className={styles.author}>{autor || "Usuario"}</span>
                    <span className={styles.date}>{fecha || "hace un momento"}</span>
                </div>

                <p className={styles.text}>{texto}</p>
            </div>
        </div>
    );
}

export default Comentario;