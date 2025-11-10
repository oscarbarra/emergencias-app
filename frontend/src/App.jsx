import React, { useState } from "react";
import Feed from "./pages/Feed";
import CreateAlert from "./components/CreateAlert";
import Sidebar from "./components/Sidebar"; // ✅ importamos tu Sidebar

export default function App() {
  const [currentView, setCurrentView] = useState("feed");
  const [posts, setPosts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ estado para el sidebar

  const handleAddAlert = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
    setCurrentView("feed");
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* === Sidebar === */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* === Contenido principal === */}
      {currentView === "feed" && (
        <Feed
          onCreateAlert={() => setCurrentView("create")}
          onToggleMenu={handleToggleSidebar} // ✅ ahora el botón hamburguesa funciona
          posts={posts}
        />
      )}

      {currentView === "create" && (
        <CreateAlert
          onCancel={() => setCurrentView("feed")}
          onSubmit={handleAddAlert}
        />
      )}
    </>
  );
}
