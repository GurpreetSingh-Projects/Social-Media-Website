import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="headercontainer">
      <div className="headerleft">
        <span className="social_logo">Social Media</span>
      </div>
      <div className="headermid">
        <div className="searchbar">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            placeholder="Search Social Media.."
            className="searchInput"
          ></input>
        </div>
      </div>
      <div className="headerright">
        <div className="headerlink">
          <div>Homepage</div>
          <div>Timeline</div>
        </div>
        <div className="headerIcons">
          <div className="headericonitem">
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              style={{ height: 20, width: 20 }}
            />
          </div>

          <div className="headericonbadge" style={{ marginLeft: -8 }}>
            1
          </div>
          <div className="headericonitem"></div>
          <FontAwesomeIcon
            icon="fa-solid fa-comment-dots"
            style={{ height: 20, width: 20 }}
          />
          <div className="headericonbadge">2</div>

          <div className="headericonitem"></div>
          <FontAwesomeIcon
            icon="fa-solid fa-bell"
            style={{ height: 20, width: 20 }}
          />
          <div className="headericonbadge">3</div>
        </div>
        <img src="assets/person/1.jpeg" alt="" className="headerimage" />
      </div>
    </div>
  );
}
