import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';


const ProtectedRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) => {
        return rest.auth.isAuth === true ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: {
                form: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
const mapStateToProps = state =>{
  return {
    auth: state.auth,
  }
}
export default connect(mapStateToProps)(ProtectedRoute)