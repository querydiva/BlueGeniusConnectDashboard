import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../src/GP/layouts/BlueAuth";
import AdminLayout from "../src/GP/layouts/BlueAdmin";

import Userfront from "@userfront/core";
import Login from "./GP/views/pages/BlueLogin/BlueLogin";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.2.0";
import "assets/demo/demo.css";
import ProtectedRoute from "GP/routes/ProtectedRoute";
import BlueAdmin from "../src/GP/layouts/BlueAdmin";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* After Authentication Routes */}

      <Route path="blueadmin/*" element={<ProtectedRoute><BlueAdmin /></ProtectedRoute>} />
     
      {/* // Authentication routes */}
      <Route path="blueauth/*" element={<AuthLayout />} />
      <Route path="dashboard/*" element={<AdminLayout />} />
      <Route path="*" element={<Navigate to="blueauth/login" />} />
    </Routes>
  </BrowserRouter>
);
