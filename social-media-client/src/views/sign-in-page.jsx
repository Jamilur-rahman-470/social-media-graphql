import React, { useState } from "react";
import { connect } from "react-redux";
import { login, getUserById } from "../store/action/auth-action";
import { Redirect } from "react-router-dom";
const SignInPage = ({ login, auth, location, getUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnChnage = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    login(user.email, user.password);
    getUserById(auth.uid);
  };
  if (auth.isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/dashboard",
          state: {
            from: location,
          },
        }}
      />
    );
  }
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)} method="post">
        <label>
          Email <br />
          <input
            autoComplete="off"
            required
            minLength="5"
            maxLength="40"
            placeholder="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => handleOnChnage(e)}
          />
        </label>
        <br />
        <label>
          Password <br />
          <input
            autoComplete="off"
            required
            minLength="8"
            maxLength="20"
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleOnChnage(e)}
          />
        </label>
        <br />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};
const mapStateTopProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    getUser: (id) => dispatch(getUserById(id)),
  };
};

export default connect(mapStateTopProps, mapDispatchtoProps)(SignInPage);
