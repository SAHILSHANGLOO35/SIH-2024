import Anamoly from "./components/Anamoly";
import Navbar from "./components/Navbar";
import AnamolyVideo from "./components/AnamloyVideo";
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/anamolies" element={<Anamoly />} />
            <Route path="/anamoly-video" element={<AnamolyVideo />} />
         </Routes>

    </BrowserRouter>
  );
}

export default App;