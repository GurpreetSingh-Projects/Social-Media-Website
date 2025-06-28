// import "./sidebar.css";
import { users, Users } from "../dummyData";
import Close, { CloseProps } from "./Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlay,
  faUserGroup,
  faBookmark,
  faQuestion,
  faBriefcase,
  faRss,
  faCalendar,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
export const Sidebar: React.FC = () => {
  type sidebarItemProps = {
    icon: IconDefinition;
    item: string;
  };
  const sidebarItems: sidebarItemProps[] = [
    {
      icon: faRss,
      item: "Feed",
    },
    {
      icon: faCommentDots,
      item: "Chats",
    },
    {
      icon: faCirclePlay,
      item: "Videos",
    },
    {
      icon: faUserGroup,
      item: "Groups",
    },
    {
      icon: faBookmark,
      item: "Bookmarks",
    },
    {
      icon: faQuestion,
      item: "Questions",
    },
    {
      icon: faBriefcase,
      item: "Jobs",
    },
    {
      icon: faCalendar,
      item: "Events",
    },
    {
      icon: faGraduationCap,
      item: "Courses",
    },
    {
      icon: faCirclePlay,
      item: "Videos",
    },
  ];
  // console.log(sidebarItems);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {sidebarItems.map((item, index) => {
            return (
              <li className="sidebarListItem" key={index}>
                <FontAwesomeIcon icon={item.icon} className="sidebarIcon" />
                <span className="sidebarListItemText">{item.item}</span>
              </li>
            );
          })}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u: CloseProps) => (
            <Close key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};
