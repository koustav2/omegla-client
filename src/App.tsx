import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="room" element={<Room />} />
    </Routes>
  );
}

export default App;
