import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import CreateAlert from "./components/CreateAlert";
import CommentsSheet from "./components/CommentsSheet";
import styles from "../styles/Feed.module.css";
import HomeIcon from "../assets/home.svg";
import UserIcon from "../assets/user.svg";

export default function Feed({ onToggleMenu }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Usuario",
      avatar: "/img/default-avatar.png",
      group: "Comunidad Huichahue",
      description:
        "Chiquillos mucho cuidado al transitar por la ruta s-51, se cayo una micro en la vuelta lorena y dejo cortada la calle",
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
  ]);

  const [showAlertPanel, setShowAlertPanel] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentsPost, setCommentsPost] = useState(null);

    const openComments = (post) => {
    setCommentsPost(post);
    setShowComments(true);
  };

  const handleCreateAlert = (newPost) => {
    setPosts([{ ...newPost, id: Date.now() }, ...posts]);
  };

  return (
    <div className={styles.feed}>
      <Navbar title="Comunidad Huichahue" onMenuToggle={onToggleMenu} />
      <div className={styles.posts}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} onOpenComments={() => openComments(p)} />
        ))}
      </div>

      <footer className={styles.toolbar}>
        <button className={styles.iconBtn} aria-label="home">
          <img src={HomeIcon} alt="Inicio" />
        </button>

        <button
          className={`${styles.alertBtn} ${showAlertPanel ? styles.closeBtn : ""}`}
          onClick={() => setShowAlertPanel(!showAlertPanel)}
        >
          {showAlertPanel ? "Cerrar" : "Alertar"}
        </button>

        <button className={styles.iconBtn} aria-label="profile">
          <img src={UserIcon} alt="usuario" />
        </button>
      </footer>

      {/* Panel de crear alerta */}
      <CreateAlert
        isOpen={showAlertPanel}
        onClose={() => setShowAlertPanel(false)}
        onCreate={handleCreateAlert}
      />

      <CommentsSheet
        isOpen={showComments}
        post={commentsPost}
        onClose={() => setShowComments(false)}
        bottomBarHeight={64}
      />
    </div>
  );
}
