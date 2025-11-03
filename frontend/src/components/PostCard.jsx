import React from "react";
import styles from "../styles/PostCard.module.css";
import commentIcon from "../assets/comment.svg";

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <img
          src={post.avatar || "/img/default-avatar.png"}
          alt="avatar"
          className={styles.avatar}
        />
        <div>
          <div className={styles.userName}>{post.user}</div>
        </div>
      </div>

      <p className={styles.text}>{post.description}</p>

      {post.images && post.images.length > 0 && (
        <div className={styles.mediaWrap}>
          <img src={post.images[0]} alt="post" className={styles.media} />
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.commentArea}>
          <img src={commentIcon} alt="comentarios" className={styles.commentIcon}/>
          <span className={styles.commentCount}>{post.comments}</span>
        </div>
        <button className={styles.cta}>Ver comentarios</button>
      </div>
    </article>
  );
}
