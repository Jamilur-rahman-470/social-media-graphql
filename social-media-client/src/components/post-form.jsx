import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/action/post-action";

const PostForm = ({auth, createPost, user}) => {
  
  
  const [post, setPost] = useState("");
  
  
  const handleChange = (e) => {
    setPost(e.target.value);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(auth.uid, post, auth.token, user.name)
  };
  
  
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} style={{ width: "100%" }}>
        <label>
          What's on you mind? <br />
          <textarea
            autoComplete="off"
            minLength="10"
            rows="10"
            style={{ width: "100%" }}
            placeholder="Let other people know about you"
            type="text"
            name="post"
            value={post}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user.profile
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (uid, text, token, name) => dispatch(createPost(uid, text, token, name)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
