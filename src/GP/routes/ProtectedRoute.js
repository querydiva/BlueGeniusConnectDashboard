import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Userfront from '@userfront/core';
import { useNavigate, Routes, Route } from 'react-router-dom';
import AdminLayout from "../layouts/BlueAdmin"

Userfront.init("pn46y6ny");

const ProtectedRoute = ({ children }) => {
  if (!Userfront.accessToken()) {
    return <Navigate to="/blueauth/login" />;  // Redirect to login if not authenticated
  }

  return children;
};
export default ProtectedRoute;
