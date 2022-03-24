import { BrowserRouter, Routes, Route } from "react-router-dom";

function Test() {
  return <div>heelo</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
