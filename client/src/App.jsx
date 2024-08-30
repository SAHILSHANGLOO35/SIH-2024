import Anomaly from "./components/Anomaly";
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import AnomalyCard from "./components/AnomalyCard";
import AnomalyModal from "./components/AnomalyModal";
import AnomalyVideo from "./components/AnomalyVideo";



function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/anomaly" element={<Anomaly />} />
            <Route path="/anomaly-video" element={<AnomalyVideo />} />
            <Route path="/anomaly-card" element={<AnomalyCard />} />
            <Route path="/anomaly-modal" element={<AnomalyModal />} />
            <Route path="/anomaly-video/:videoUrl" element={<AnomalyVideo />} />
         </Routes>

    </BrowserRouter>
  );
}

export default App;