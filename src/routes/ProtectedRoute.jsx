import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (
  { component: Component, user, ...rest },
) => (
  <Route
    {...rest}
    render={(props) => {
      if (user) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
);

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(ProtectedRoute);