
import styles from './ComunidadGuardada.module.css'

function ComunidadInfo({ nombre, updateComuna, onClicked }) {
    return (
        <li
            className={`${styles.block} hover_efect`}
            onClick={() => {
                updateComuna(nombre);
                onClicked(nombre);
            }}
        >
            <p className="text_comunidades">{nombre}</p>
        </li>
    );
}

export default ComunidadInfo;
