
import styles from './ComunidadGuardada.module.css'

function ComunidadInfo({ ciudad }) {
    return (
        <div className={`${styles.block} main_hover`}>
            <p className='text_comunidades'> {ciudad} </p>
        </div>
    );
};

export default ComunidadInfo;
