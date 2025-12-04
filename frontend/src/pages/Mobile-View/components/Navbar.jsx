import React from "react";
import styles from "../../../styles/Navbar.module.css";

export default function Navbar({ title, onMenuToggle }) {
  return (
    <header className={styles.nav}>
      <button className={styles.hamb} onClick={onMenuToggle} aria-label="menu">
        <span className={styles.hambInner} />
      </button>
      <div className={styles.titleWrap}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.rightPlaceholder} />
    </header>
  );
}
