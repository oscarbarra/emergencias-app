import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar({ title }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <h1 className={styles.title}>{title}</h1>

      {menuOpen && (
        <div className={styles.sidebar}>
          <h2>Mis Grupos</h2>
          <ul>
            <li>Comunidad Huichahue</li>
            <li>Comunidad Pulmahue</li>
          </ul>
          <hr />
          <button className={styles.groupBtn}>Ver grupos</button>
          <button className={styles.groupBtn}>Crear grupo</button>
        </div>
      )}
    </header>
  );
}
