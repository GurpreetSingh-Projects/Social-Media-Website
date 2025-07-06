import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import Login from "./pages/Login";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
