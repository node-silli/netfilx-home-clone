import React from "react";
import useState from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = true;

  return (
    <Route>
      {...rest}
      render=
      {(props) => {
        return user ? <Component {...props} /> : <Redirect to="/" />;
      }}
    </Route>
  );
};

export default PrivateRoute;
