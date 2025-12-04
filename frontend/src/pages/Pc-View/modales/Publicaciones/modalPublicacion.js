
import { createPortal } from "react-dom";
import styles from "./ModalPublicacion.module.css";

export default function ModalPublicacion({ children }) {
    return createPortal(
        <div className={styles.formOverlay}>
            {children}
        </div>,
        document.getElementById("root")
    );
}