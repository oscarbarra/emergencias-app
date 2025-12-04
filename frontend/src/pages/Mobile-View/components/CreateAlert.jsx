import React, { useState } from "react";
import styles from "../../../styles/CreateAlert.module.css"; // corregido: usar el CSS correcto

export default function CreateAlert({ isOpen, onClose, onCreate, navOffset = 64 }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Por favor completa el título y la descripción.");
      return;
    }

    const newPost = {
      user: "Usuario",
      avatar: "/img/default-avatar.png",
      group: "Comunidad Huichahue",
      title,
      description,
      images: image ? [URL.createObjectURL(image)] : [],
      comments: 0,
    };

    onCreate(newPost);
    setTitle("");
    setDescription("");
    setImage(null);
    onClose();
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={onClose}
      />

      <div
        className={`${styles.container} ${styles.slidePanel} ${isOpen ? styles.slideOpen : ""}`}
        style={{ bottom: Math.max(0, navOffset - 5) }} // baja 15px respecto al offset original
        aria-hidden={!isOpen}
      >
        <h2>Crear Alerta</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Escribe el contenido de la alerta..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="button"
            className={styles.photoBtn}
            onClick={() => document.getElementById("photoInput").click()}
          >
            Incluir Foto
          </button>
          <input
            id="photoInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button type="submit" className={styles.publishBtn}>
            Publicar
          </button>
        </form>
      </div>
    </>
  );
}