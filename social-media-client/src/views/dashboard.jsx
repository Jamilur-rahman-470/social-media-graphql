import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById } from "../store/action/auth-action";

const Dashboard = ({ getUser, user, auth }) => {
  useEffect(() => {
    getUser(auth.uid);
  }, [auth.uid]);
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
      </div>
      <div className="post"></div>
      <div className="user-list"></div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(getUserById(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user.profile,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
