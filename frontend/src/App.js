
// import './styles/App.css';
import PcView from './pages/Pc-View/index';
import MobilView from './pages/Mobile-View/index';
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();
  return isMobile ? <MobilView /> : <PcView />;
}

export default App;
