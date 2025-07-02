// import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { posts, Users } from "../dummyData";
import { useState } from "react";
import { CloseProps } from "./Close";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
type PostProps = {
  post: posts;
};
export default function Post({ post }: PostProps) {
  // console.log(post)
  const [like, setLike] = useState<number>(post.like);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
