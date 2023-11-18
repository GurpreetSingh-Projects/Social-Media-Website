import Header from "../../components/Topbar/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./home.css";
export default function Home() {
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
}
