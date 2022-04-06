import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import HomePage from "./pages/Home";
import SnakePage from "./pages/Snake";
import GalleryPage from "./pages/Gallery";
import Popup from "./components/Popup";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function openModal() {
    setIsModalOpened(true);
  }

  return (
    <div>
      {isModalOpened && <Popup closeModal={() => setIsModalOpened(false)} />}

      <AppHeader openModal={openModal} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />
          <Route path="/snake" element={<SnakePage openModal={openModal} />} />
          <Route
            path="/gallery"
            element={<GalleryPage openModal={openModal} />}
          />
        </Routes>
      </BrowserRouter>

      <AppFooter />
    </div>
  );
}

export default App;
