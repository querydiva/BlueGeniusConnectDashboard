import React from 'react';
import { Navigate } from 'react-router-dom';
import Userfront from '@userfront/core';


Userfront.init("pn46y6ny");

const ProtectedRoute = ({ children }) => {
  if (!Userfront.accessToken()) {
    return <Navigate to="/blueauth/login" />;  // Redirect to login if not authenticated
  }

  return children;
};
export default ProtectedRoute;
