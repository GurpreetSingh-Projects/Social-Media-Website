import { CloseProps } from "./Close";
// import "./Online.css";

type OnlineProps = {
  user: CloseProps
}
export default function Online(props: OnlineProps ) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={props.user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{props.user.username}</span>
    </li>
  );
}
