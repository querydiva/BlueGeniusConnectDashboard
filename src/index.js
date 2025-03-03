import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../src/GP/layouts/BlueAuth";
import AdminLayout from "../src/GP/layouts/BlueAdmin";
import { AuthProvider } from "GP/contexts/AuthContext";
import { UserfrontProvider } from "@userfront/react";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import ProtectedRoute from "GP/routes/ProtectedRoute";
import BlueResetPasswordPage from "GP/views/pages/BlueResetPassword/BlueResetPasswordPage";
import BlueForgotPasswordPage from "GP/views/pages/BlueResetPassword/BlueForgotPasswordPage";

import Userfront from "@userfront/core";

// Initialize Userfront Core (if required for other functionalities)
Userfront.init("pn46y6ny");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserfrontProvider tenantId="pn46y6ny">
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes - Protected */}
          <Route
            path="blueadmin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          />
          {/* Authentication Routes */}
          <Route path="blueauth/*" element={<AuthLayout />} />

          {/* Password Reset Route */}
          <Route path="/blueauth/reset" element={<BlueResetPasswordPage />} />
          <Route path="/blueauth/forgot" element={<BlueForgotPasswordPage />} />

          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/blueadmin/yardlayout" />} />

          {/* Catch-All Redirect */}
          <Route path="*" element={<Navigate to="/blueauth/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </UserfrontProvider>
);
