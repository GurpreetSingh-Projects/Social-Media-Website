import Header from "./components/Topbar/Header.jsx";
import Home from "./pages/home/Home.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
library.add(fab, fas, far);
