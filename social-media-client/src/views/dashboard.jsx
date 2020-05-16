import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById } from "../store/action/auth-action";
import PostForm from "../components/post-form";
import { getPosts } from "../store/action/post-action";
import PostCard from "../components/post-card";

const Dashboard = ({ getUser, user, auth, posts, getPost }) => {
  useEffect(() => {
    getUser(auth.uid);
    getPost()
  }, [auth.uid, ]);
  return (
    <div className="dashboard">
      <div className="user-info">
        <div className="avatar"></div>
        <p>@{user.username}</p>
        <div className="info">
          {user.name ? (
            <div>
              <h3>{user.name}</h3>
              <p style={{ textAlign: "center" }}>{user.bio}</p>
              <p>
                from {user.address.city},{user.address.country}
              </p>
            </div>
          ) : (
            <a href="/edit-profile" className="btn">
              Edit Profile
            </a>
          )}
        </div>
        <div className="info" style={{ marginTop: "10px" }}>
          <hr />
          <h3>Social</h3>
          {user.social ? (
            <div>
              <a href={user.social.youtube}>Youtube</a>
              <br/>
              <a href={user.social.facebook}>Facebook</a>
              <br/>
              <a href={user.social.linkedin}>Linkedin</a>
              <br/>
              <a href={user.social.twitter}>Twitter</a>
            </div>
          ) : (
            <a href="/edit-profile" className="btn">
              Edit Profile
            </a>
          )}
        </div>
      </div>
      <div className="post">
        <PostForm/>
        {
          posts ? (posts.map((item, index)=>(<PostCard key={index} item={item}/>))) : (<h4>No Posts added yet</h4>)
        }
      </div>
      <div className="user-list"></div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(getUserById(id)),
    getPost: () => dispatch(getPosts())
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user.profile,
    auth: state.auth,
    posts: state.post.posts
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
