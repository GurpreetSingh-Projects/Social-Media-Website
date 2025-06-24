import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Feed } from "../components/Feed";
import Rightbar from "../components/Rightbar";
// import "./home.css";
export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
