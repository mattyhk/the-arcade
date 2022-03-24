import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
