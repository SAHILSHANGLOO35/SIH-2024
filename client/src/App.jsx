import Anomaly from "./components/Anomaly";
import Navbar from "./components/Navbar";
import AnomalyVideo from "./components/AnomalyVideo";
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import AnomalyCard from "./components/AnomalyCard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/anomaly" element={<Anomaly />} />
            <Route path="/anomaly-video" element={<AnomalyVideo />} />
            <Route path="/anomaly-card" element={<AnomalyCard />} />
         </Routes>

    </BrowserRouter>
  );
}

export default App;