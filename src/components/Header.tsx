import { Link } from "react-router-dom";
// import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCommentDots,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => {
  {
    return (
      <div className="headercontainer">
        <div className="headerleft">
          <Link className="link" to="/home">
            <span className="social_logo">Social Media</span>
          </Link>
        </div>
        <div className="headermid">
          <div className="searchbar">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
            <input
              type="text"
              placeholder="Search Social Media.."
              className="searchInput"></input>
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
                icon={faUser}
                style={{ height: 20, width: 20 }}
              />
            </div>

            <div className="headericonbadge" style={{ marginLeft: -8 }}>
              1
            </div>
            <div className="headericonitem"></div>
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{ height: 20, width: 20 }}
            />
            <div className="headericonbadge">2</div>

            <div className="headericonitem"></div>
            <FontAwesomeIcon icon={faBell} style={{ height: 20, width: 20 }} />
            <div className="headericonbadge">3</div>
          </div>
          <Link className="link" to="/profile">
            <img src="assets/person/1.jpeg" alt="" className="headerimage" />
          </Link>
        </div>
      </div>
    );
  }
};
