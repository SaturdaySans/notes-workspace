import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Physics from "./pages/Physics";
import Econs from "./pages/Econs";
import Math from "./pages/Math";
import GP from "./pages/GP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/math" element={<Math />} />
        <Route path = "/econs" element = {<Econs />} />
        <Route path = "/gp" element = {<GP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;