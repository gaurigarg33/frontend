import React, { useState } from "react";

import { PostType } from "../Day35comp";

const Post = ({ post }: { post: PostType }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className="card post35">
      <div className="card-header35">
        <div className="user35">
          <img className="user-img35" src={post.profilePicture} alt="" />
          <h5 className="mb-0 card-title35">{post.username}</h5>
        </div>
        <i className="bi bi-three-dots35"></i>
      </div>
      <img src={post.post} className="card-img-top35" alt="" />
      <div className="buttons35">
        <i
          className={isLiked ? "bi bi-heart-fill liked" : "bi bi-heart "}
          onClick={() => setIsLiked(!isLiked)}
        ></i>
        <i className="bi bi-chat"></i>
        <i className="bi bi-share"></i>
      </div>
    </div>
  );
};

export default Post;