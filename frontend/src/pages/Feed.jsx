import React from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import styles from "../styles/Feed.module.css";

const mockPosts = [
  {
    id: 1,
    user: "Usuario",
    group: "Comunidad Huichahue",
    description:
      "Chiquillos mucho cuidado al transitar por la ruta s-51, se cayó una micro en la vuelta Lorena y dejó cortada la calle",
    images: ["/img/micro_accidente.jpg"],
    comments: 8,
  },
  {
    id: 2,
    user: "Usuario",
    group: "Comunidad Pulmahue",
    description:
      "Quedó la pura canta camino a Pulmahue chiquillos, se cayó un poste en la avenida principal",
    images: [],
    comments: 0,
  },
];

export default function Feed() {
  return (
    <div className={styles.feedContainer}>
      <Navbar title="Comunidad Huichahue" />
      <div className={styles.postsContainer}>
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className={styles.bottomBar}>
        <button className={styles.homeBtn}>🏠</button>
        <button className={styles.alertBtn}>Alertar</button>
        <button className={styles.profileBtn}>👤</button>
      </div>
    </div>
  );
}
