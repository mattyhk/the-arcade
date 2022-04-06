import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import SnakeGame from "./components/SnakeGame";

function App() {
  return (
    <div>
      <AppHeader />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snake" element={<SnakeGame />} />
          <Route path="/gallery" element={<SnakeGame />} />
        </Routes>
      </BrowserRouter>

      <AppFooter />
    </div>
  );
}

export default App;
