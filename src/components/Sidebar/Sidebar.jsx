import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Users } from "../../dummyData.js";
import Close from "../Close Friends/Close";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FontAwesomeIcon icon="fa-solid fa-rss" className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              icon="fa-regular fa-comment-dots"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              icon="fa-solid fa-circle-play"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              icon="fa-solid fa-user-group"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              icon="fa-solid fa-bookmark"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              icon="fa-solid fa-question"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              icon="fa-solid fa-briefcase"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              icon="fa-solid fa-calendar"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <FontAwesomeIcon
              icon="fa-solid fa-graduation-cap"
              className="sidebarIcon"
            />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Close key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
