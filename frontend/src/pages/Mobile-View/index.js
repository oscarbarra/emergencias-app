import { useState } from "react";
import Feed from "./Feed";
import CreateAlert from "./components/CreateAlert";
import Sidebar from "./components/Sidebar";

function MobilView() {
    const [currentView, setCurrentView] = useState("feed");
    const [posts, setPosts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                    onToggleMenu={handleToggleSidebar}
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

export default MobilView;