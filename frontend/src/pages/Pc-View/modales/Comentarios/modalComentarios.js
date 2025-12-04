
import styles from './modalComentarios.module.css'
import Comentario from '../../components/Comentarios/comentario'

function ModalComentarios({ publicacion, onClose, nuevoComentario, setNuevoComentario, agregarComentario }) {
    if (!publicacion) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.imagenSideFija}>
                    <img className={styles.bgBlur} src={publicacion.imagen || "/emergencias/noImg.png"} alt="" />
                    <img className={styles.fgImage} src={publicacion.imagen || "/emergencias/noImg.png"} alt="Publicación" />
                </div>

                <div className={styles.comentariosSide}>
                    <h2>Comentarios</h2>

                    <div className={styles.comentariosLista}>
                        {publicacion.comentarios?.map(c => (
                            <Comentario key={c.id} texto={c.text} author={c.author} fecha={c.date} />
                        ))}
                    </div>

                    <form onSubmit={agregarComentario} className={styles.formComentario}>
                        <input
                            type="text"
                            placeholder="Escribe tu comentario..."
                            value={nuevoComentario}
                            onChange={(e) => setNuevoComentario(e.target.value)}
                            required
                        />
                        <button type="submit">Enviar</button>
                    </form>

                    <button className={styles.cerrarBtn} onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalComentarios;