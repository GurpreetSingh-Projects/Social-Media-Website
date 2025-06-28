import Post from "./Post.js";
import Shared from "./Shared.js";
// import Post from "../Post/Post.tsx";
// import Shared from "../Shared/Shared.tsx";
// import "./feed.css";
import { Posts } from "../dummyData.js";
export const Feed=()=>{
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
