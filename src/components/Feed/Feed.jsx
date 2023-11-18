import Post from "../Post/Post.jsx";
import Shared from "../Shared/Shared.jsx";
import "./feed.css";
import { Posts } from "../../dummyData.js";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Shared />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
