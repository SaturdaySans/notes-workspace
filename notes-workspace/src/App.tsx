import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Physics from "./pages/Physics";
import Math from "./pages/Math";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/math" element={<Math />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;