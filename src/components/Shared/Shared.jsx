import "./Shared.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Shared() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/1.jpeg"
            alt="profile pic"
          />
          <input className="shareInput" placeholder="What's on Your Mind ?" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <FontAwesomeIcon
              icon="fa-solid fa-clapperboard"
              className="shareIcon1"
            />
            <span className="shareOptionText">Photo/Video</span>
          </div>

          <div className="shareOptions">
            <FontAwesomeIcon icon="fa-solid fa-tag" className="shareIcon2" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOptions">
            <FontAwesomeIcon
              icon="fa-solid fa-location-dot"
              className="shareIcon3"
            />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOptions">
            <FontAwesomeIcon
              icon="fa-solid fa-face-grin-wide"
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
