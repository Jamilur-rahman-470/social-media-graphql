import React, { useState } from "react";

export const SignUpPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleOnChnage = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <form onSubmit={(e) => handleOnSubmit(e)} className="form">
        <label>
          Username <br />
          <input
            autoComplete="off"
            required
            minLength="4"
            maxLength="20"
            placeholder="Choose an unique username"
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => handleOnChnage(e)}
          />
        </label>
        <br />
        <label>
          Email <br />
          <input
            autoComplete="off"
            required
            minLength="8"
            maxLength="40"
            placeholder=" Choose an unique email"
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
        <label>
          Confirm password <br />
          <input
            autoComplete="off"
            required
            minLength="8"
            maxLength="20"
            placeholder="Confirm password"
            type="password"
            name="password2"
            value={user.password2}
            onChange={(e) => handleOnChnage(e)}
          />
        </label>
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};
