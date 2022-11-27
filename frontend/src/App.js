import Homepage from "./pages/Homepage";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Register } from "./pages/Register";
import Plans from "./pages/Plans";
import { Achievements } from "./pages/Achievements";
import Needs from "./pages/Needs";
import Recomandari from "./pages/Recomandari";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Acasă" element={<Navigate to="/" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plan" element={<Plans />} />
        <Route path="/nevoi" element={<Needs />} />
        <Route path="/realizări" element={<Achievements />} />
        <Route path="/recomandări" element={<Recomandari />} />
      </Routes>
    </Layout>
  );
}

export default App;
