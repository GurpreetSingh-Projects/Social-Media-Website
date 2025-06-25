// import "./Shared.css";
import { faClapperboard, faFaceGrinWide, faLocationDot, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Shared() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to="/profile">
            <img
              className="shareProfileImg"
              src="assets/person/1.jpeg"
              alt="profile pic"
            />
          </Link>
          <input className="shareInput" placeholder="What's on Your Mind ?" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <FontAwesomeIcon
              icon={faClapperboard}
              className="shareIcon1"
            />
            <span className="shareOptionText">Photo/Video</span>
          </div>

          <div className="shareOptions">
            <FontAwesomeIcon icon={faTag} className="shareIcon2" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOptions">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="shareIcon3"
            />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOptions">
            <FontAwesomeIcon
              icon={faFaceGrinWide}
              className="shareIcon4"
            />
            <span className="shareOptionText">Feelings</span>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
