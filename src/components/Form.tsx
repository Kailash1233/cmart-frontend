import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  useRegisterMutation,
  useLoginMutation,
} from "../store/apiquery/AuthApiSlice";
import LoadingButton from "./LoadingButton";
import RoutePaths from "../config";
import { checkLogin, getItem, setItem } from "../Utils/Generals";
import axios, { AxiosError } from "axios";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { logoutCurrentUser, setUser } from "../store/userSlice";

type LoginFormState = {
  email: string;
  password: string;
};

type SignUpFormState = {
  firstname: string;
  email: string;
  password: string;
};

const LogOut = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    googleLogout();
    localStorage.removeItem("GoogleJwt");
    dispatch(logoutCurrentUser());
  };

  return <button onClick={handleLogOut}>Log Out</button>;
};

export default LogOut;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [googleUserFlag, setGoogleUserFlag] = useState<boolean>(false);
  const [data, setData] = useState<LoginFormState>({ email: "", password: "" });
  const [sendUserInfo, result] = useLoginMutation();

  if (checkLogin()) {
    return <Navigate to={RoutePaths.userAccount} replace />;
  }

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://cozy-bell-fec76d07e6.strapiapp.com/api/auth/local",
        {
          identifier: data.email,
          password: data.password,
        }
      );
      setItem("loginjwt", res.data.jwt);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err.response ? err.response.data : err.message);
    }
  };

  return (
    <div
      className="login-form bg-white shadow col-11 col-lg-4 mx-auto my-5 text-black p-3"
      style={{ minHeight: "500px" }}
    >
      {/* LogOut Component */}
      <h3 className="fw-bold text-center">Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-2 sign-oauth my-4 text-white text-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const token = credentialResponse.credential;
              console.log(credentialResponse);
              if (token) {
                localStorage.setItem("GoogleJwt", token);
                const decoded: any = jwtDecode(token);
                console.log(decoded);
                alert(`Welcome ${decoded.name}!`);
                dispatch(setUser(decoded));
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="my-4">
          <div className="username w-100">
            <label className="w-100">
              <span>Email :</span>
              <input
                type="email"
                name="email"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="user-pass my-4">
            <label className="w-100">
              <span>Password :</span>
              <input
                type="password"
                name="password"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="remember-me">
            <label className="w-100">
              <input type="checkbox" name="remember" />
              <span> Remember Me</span>
            </label>
          </div>
          <div className="submit text-center my-4">
            <LoadingButton loadingState={result.isLoading}>
              <button type="submit" className="w-100 border-0 fd-btn">
                LOG IN
              </button>
            </LoadingButton>
          </div>
          <div className="bt text-center">
            <div>
              <Link to="/reset-password" className="text-black opacity-75">
                Forget Password
              </Link>
            </div>
            <div className="signup mt-2">
              <span>Don't have an account?</span>
              <Link to="/signup" className="fd-color-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const SignUpForm = () => {
  const navigate = useNavigate();
  if (checkLogin()) {
    return <Navigate to={RoutePaths.userAccount} replace />;
  }

  const [data, setData] = useState<SignUpFormState>({
    firstname: "",
    email: "",
    password: "",
  });
  const [sendUserInfo, result] = useRegisterMutation();

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://cozy-bell-fec76d07e6.strapiapp.com/api/auth/local/register",
        {
          username: data.firstname,
          email: data.email,
          password: data.password,
        }
      );

      setItem("jwt", res.data.jwt);
      navigate(RoutePaths.login);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err.response ? err.response.data : err.message);
    }
  };

  return (
    <div
      className="login-form  bg-white shadow col-11 col-lg-4 mx-auto my-5 text-black p-3"
      style={{ minHeight: "500px" }}
    >
      <h3 className="fw-bold text-center">Register Account</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="d-flex gap-2 sign-oauth my-4 text-white text-center">
          <a href="#" className="d-block s-google w-50 bg-danger p-3 rounded-3">
            <i className="bi bi-google"></i>
            <span> Google</span>
          </a>
          <a
            href="#"
            className="d-block s-facebook w-25 fd-bg-secondary rounded-3"
          >
            <i className="bi bi-facebook" style={{ lineHeight: "55px" }}></i>
          </a>
          <a href="#" className="d-block s-twitter w-25 bg-info rounded-3">
            <i className="bi bi-twitter" style={{ lineHeight: "55px" }}></i>
          </a>
        </div>
        <div className="my-4">
          <div className="d-flex w-100 gap-2">
            <label className="w-50">
              <span>Firstname :</span>{" "}
              <input
                type="text"
                name="firstname"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
            <label className="w-50">
              <span>Lastname :</span>{" "}
              <input
                type="text"
                name="lastname"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="username w-100">
            <label className="w-100 mt-4">
              <span>Email :</span>{" "}
              <input
                type="email"
                name="email"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="d-flex w-100 gap-2 mt-4">
            <label className="w-50">
              <span>Address :</span>{" "}
              <input
                type="text"
                name="address"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
            <label className="w-50">
              <span>Phone :</span>{" "}
              <input
                type="text"
                name="phone"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="user-pass my-4">
            <label className="w-100">
              <span>Password :</span>{" "}
              <input
                type="password"
                name="password"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="user-pass my-4">
            <label className="w-100">
              <span>Confirm Password :</span>{" "}
              <input
                type="password"
                name="password_confirmation"
                className="form-control rounded-0 p-2"
                onChange={handleChange}
              />
            </label>
          </div>
          {/* <HandleResult result={result} /> */}
          <div className="submit text-center my-4">
            <LoadingButton loadingState={result.isLoading}>
              <button type="submit" className="w-100 border-0 fd-btn">
                REGISTER
              </button>
            </LoadingButton>
          </div>
          <div className="bt text-center">
            <div className="signup mt-2">
              <span>Already have an account ?</span>
              <Link to="/login" className="fd-color-primary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const ResetPassword = () => {
  if (checkLogin()) {
    return <Navigate to={RoutePaths.userAccount} replace />;
  }

  return (
    <div
      className="login-form  bg-white shadow col-11 col-lg-4 mx-auto my-5 text-black p-3"
      style={{ minHeight: "300px" }}
    >
      <h3 className="fw-bold text-center">Forgot Password</h3>
      <form action="">
        <div className="my-4">
          <div className="username w-100">
            <label className="w-100">
              <span>Email :</span>{" "}
              <input
                type="email"
                name="email"
                className="form-control rounded-0 p-2"
              />
            </label>
          </div>
          <div className="submit text-center my-4">
            <a href="#" className="fd-btn">
              SEND
            </a>
          </div>
          <div className="bt text-center">
            <div className="signup mt-2">
              <span>Forget it?, send me back to the sign in.</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export { LoginForm, SignUpForm, ResetPassword };
