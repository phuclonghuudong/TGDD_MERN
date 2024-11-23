import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h2>Hình ảnh</h2>
        </div>

        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dang-ky" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
