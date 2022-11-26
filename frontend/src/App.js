import Homepage from "./pages/Homepage";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
