import React from "react";
import styles from "../../../styles/Movil/Sidebar.module.css";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`${styles.sidebarOverlay} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h3>Mis Grupos</h3>
        <ul className={styles.groups}>
          <li>Vecinos Padre Las Casas</li>
          <li>Emergencias Araucanía</li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.btnPrimary}>Ver grupos</button>
          <button className={styles.btnPrimaryOutline}>Crear grupo</button>
        </div>
      </aside>
    </>
  );
}
