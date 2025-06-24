import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Feed } from "../components/Feed";
import Rightbar from "../components/Rightbar";

export const Profile: React.FC = () => {
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
                  src="assets/post/1.jpeg"
                  alt=""
                  className="profileCoverImg"
                />
                <img
                  src="assets/person/1.jpeg"
                  alt=""
                  className="profileUserImg"
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Harpreet Kaur</h4>
                <span className="profileInfoDesc">Hello everyone</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile={true} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
