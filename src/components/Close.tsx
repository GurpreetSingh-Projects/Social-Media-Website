
export type CloseProps = {
  id?: number;
  profilePicture?: string;
  username?: string;
};
export type userDetails = {
  user: CloseProps;
};
export default function Close(props: userDetails) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={props.user.profilePicture} alt="" />
      <span className="sidebarFriendName">{props.user.username}</span>
    </li>
  );
}
