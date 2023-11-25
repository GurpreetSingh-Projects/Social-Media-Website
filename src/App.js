import Header from "./components/Topbar/Header.jsx";
import Home from "./pages/home/Home.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/register.jsx";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Home />
      {/* <Profile /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
library.add(fab, fas, far);
