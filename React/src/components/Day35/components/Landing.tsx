import React from "react";
import { useSelector } from "react-redux";
import { PostType } from "../Day35comp";
import Post from "./Post";

const Landing = ({ posts }: { posts: PostType[] }) => {
  const user = useSelector((state: any) => state.user);
  const story = React.useRef<any>(null);

  React.useEffect(() => {
    story.current.scrollBy({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div className="container35 landing">
        <div className="row35">
          <div className="col-835">
            <div className=" card story35" ref={story}>
              {[...Array(15)].map((_, i) => (
                <div className="story-img35">
                  <img key={i} src={user.profilePicture} alt="" />
                </div>
              ))}
            </div>
            <div className="posts-section35">
              {posts.length > 0
                ? posts.map((post, i) => <Post key={i} post={post} />)
                : null}
            </div>
          </div>
          <div className="col-435"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;