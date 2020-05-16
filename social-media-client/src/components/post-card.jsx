import React from "react";

const PostCard = ({ item }) => {
  return (
    <div className="post-card">
      <div className="body">
        <p>{item.text}</p>
        <p> - by {item.user.name}</p>
      </div>
    </div>
  );
};

export default PostCard;
