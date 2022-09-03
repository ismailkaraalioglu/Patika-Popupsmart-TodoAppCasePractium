import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
