import React, { useState } from "react";
import Feed from "./pages/Feed";
import Sidebar from "./components/Sidebar";
import styles from "./styles/App.module.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.app}>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className={`${styles.shell} ${menuOpen ? styles.dimmed : ""}`}>
        <Feed onToggleMenu={() => setMenuOpen((s) => !s)} />
      </div>
    </div>
  );
}
