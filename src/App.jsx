import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Playlist from "./pages/Playlist.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default App;
