import React, { useEffect, useRef } from "react";
import styles from "../../../styles/CommentsSheet.module.css";

export default function CommentsSheet({ isOpen, onClose, post, bottomBarHeight = 64 }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen && listRef.current) listRef.current.scrollTop = 0;
  }, [isOpen]);

  // Espera post.commentsList = [{ user, text, time?, avatar? }]
  const comments = Array.isArray(post?.commentsList) ? post.commentsList : [];

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        style={{ bottom: bottomBarHeight }}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <section
        className={`${styles.container} ${styles.slidePanel} ${isOpen ? styles.slideOpen : ""}`}
        style={{ paddingBottom: bottomBarHeight + 12 }}
        aria-hidden={!isOpen}
      >
        <div className={styles.handle} />
        <header className={styles.header}>
          <h3>Comentarios {post ? `(${comments.length})` : ""}</h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">✕</button>
        </header>

        {comments.length === 0 ? (
          <div className={styles.empty}>Aún no hay comentarios.</div>
        ) : (
          <ul className={styles.list} ref={listRef}>
            {comments.map((c, i) => (
              <li key={i} className={styles.comment}>
                <img
                  className={styles.avatar}
                  src={c.avatar || "/img/default-avatar.png"}
                  alt={c.user || "usuario"}
                />
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span className={styles.user}>{c.user || "Usuario"}</span>
                    {c.time ? <span className={styles.time}>• {c.time}</span> : null}
                  </div>
                  <p className={styles.text}>{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}