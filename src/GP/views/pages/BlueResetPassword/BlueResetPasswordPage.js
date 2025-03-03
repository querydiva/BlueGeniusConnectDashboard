// BlueResetPasswordPage.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BlueResetPassword from "./BlueResetPassword";

const BlueResetPasswordPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const uuid = queryParams.get("uuid");

  return (
    <div>
      {token && uuid ? (
        <BlueResetPassword token={token} uuid={uuid} />
      ) : (
        <p>Invalid token</p>
      )}
    </div>
  );
};

export default BlueResetPasswordPage;
