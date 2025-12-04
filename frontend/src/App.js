
import './styles/App.css';
import PcView from './pages/Pc-View/index';
import MobilView from './pages/Mobile-View/index';
import { useIsMobile } from "./hooks/useIsMobile";
import { useEffect } from "react";

function App() {
  const isMobile = useIsMobile();

  useEffect(() => {
    document.body.classList.remove("pc", "mobile");
    document.body.classList.add(isMobile ? "mobile" : "pc");
  }, [isMobile]);
  
  return isMobile ? <MobilView /> : <PcView />;
}

export default App;
