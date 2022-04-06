import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import HomePage from "./pages/Home";
import SnakePage from "./pages/Snake";
import GalleryPage from "./pages/Gallery";

function App() {
  return (
    <div>
      <AppHeader />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/snake" element={<SnakePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>

      <AppFooter />
    </div>
  );
}

export default App;
