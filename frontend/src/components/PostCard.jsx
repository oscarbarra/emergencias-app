import React from "react";
import styles from "../styles/PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <div className={styles.postCard}>
      <div className={styles.header}>
        <div className={styles.profilePic}></div>
        <div>
          <strong>{post.user}</strong>
          <p className={styles.group}>{post.group}</p>
        </div>
      </div>

      <p className={styles.description}>{post.description}</p>

      {post.images.length > 0 && (
        <img
          src={post.images[0]}
          alt="post"
          className={styles.postImage}
        />
      )}

      <div className={styles.footer}>
        <span>💬 {post.comments}</span>
        <button className={styles.commentBtn}>Ver comentarios</button>
      </div>
    </div>
  );
}
