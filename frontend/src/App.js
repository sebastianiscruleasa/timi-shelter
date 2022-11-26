import Homepage from "./pages/Homepage";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Register } from "./pages/Register";
import Plans from "./pages/Plans";
import { Achievements } from "./pages/Achievements";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Achievements />} />
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plan" element={<Plans />} />
      </Routes>
    </Layout>
  );
}

export default App;
