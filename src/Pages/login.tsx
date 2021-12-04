import React, { FC, useState } from "react";
import LoginYoutube from "../Common/Hooks/Youtube/LoginYoutube";
import { Redirect } from "react-router-dom";
const Login: FC = () => {
  return (
    <>
      <div className="">
        <LoginYoutube />
      </div>
    </>
  );
};

export default Login;
