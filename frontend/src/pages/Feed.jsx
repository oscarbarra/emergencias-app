import React from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import styles from "../styles/Feed.module.css";
import HomeIcon from "../assets/home.svg";
import UserIcon from "../assets/user.svg";  

const mockPosts = [
  {
    id: 1,
    user: "Usuario",
    avatar: "/img/default-avatar.png",
    group: "Comunidad Huichahue",
    description:
      "Chiquillos mucho cuidado al transitar por la ruta s-51, se cayo una micro en la vuelta lorena y dejo lleno cortada la calle",
    images: ["/img/micro_accidente.jpg"],
    comments: 8,
  },
  {
    id: 2,
    user: "Usuario",
    avatar: "/img/default-avatar.png",
    group: "Comunidad Pulmahue",
    description:
      "quedo la pura canta camino a pulmahue chiquillos, se cayo un poste en la avenida",
    images: [],
    comments: 0,
  },
];

export default function Feed({ onToggleMenu }) {
  return (
    <div className={styles.feed}>
      <Navbar title="Comunidad Huichahue" onMenuToggle={onToggleMenu} />
      <div className={styles.posts}>
        {mockPosts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>

      <footer className={styles.toolbar}>
        <button className={styles.iconBtn} aria-label="home">
          <img src={HomeIcon} alt="Inicio" />
        </button>

        <button className={styles.alertBtn}>Alertar</button>

        <button className={styles.iconBtn} aria-label="profile">
          <img src={UserIcon} alt="usuario" />
        </button>
      </footer>
    </div>
  );
}
