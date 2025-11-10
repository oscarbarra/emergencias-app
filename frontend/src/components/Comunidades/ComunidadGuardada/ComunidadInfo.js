
import styles from './ComunidadGuardada.module.css'

function ComunidadInfo({ idx, ciudad, onSelect }) {
    return (
        <div
            id={idx}
            className={`${styles.block} hover_efect`}
            onClick={() => onSelect(idx)}
        >
            <p className="text_comunidades">{ciudad}</p>
        </div>
    );
}

export default ComunidadInfo;
