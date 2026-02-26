import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SectionPage from "./components/SectionPage";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/section/:name" element={<SectionPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;