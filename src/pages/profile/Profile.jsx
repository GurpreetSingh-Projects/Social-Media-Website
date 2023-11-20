import Header from "../../components/Topbar/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./profile.css";
export default function Profile() {
  return (
    <div>
      <>
        <Header />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  src="assets/post/3.jpeg"
                  alt=""
                  className="profileCoverImg"
                />
                <img
                  src="assets/person/7.jpeg"
                  alt=""
                  className="profileUserImg"
                />
              </div>
              <div className="profileInfo"></div>
              <h4 className="profileInfoName">Gurpreet Singh</h4>
              <span className="profileInfoDesc">Hello everyone</span>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
