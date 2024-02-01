import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import "./LogIn.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let errorElement;
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Varification Email Sent");
    } else {
      toast("Please enter your email address");
    }
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://thawing-dawn-14943.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });

    event.target.reset();
  };
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    // navigate(from, { replace: true });
  }
  return (
    <div className="form w-100">
      <h2 className="text-center common-color">Log In</h2>
      <form onSubmit={handleLogin}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <br />

        <input
          className="w-50 mx-auto btn  mt-2"
          type="submit"
          value="Log In"
        />
      </form>
      {errorElement}
      <Link
        to="/register"
        className="common-color pe-auto text-decoration-none"
      >
        I don't have an account
      </Link>{" "}
      <br />
      <div className="forget-btn">
        <button
          className=" btn btn-link pe-auto text-decoration-none "
          onClick={resetPassword}
        >
          Reset Password
        </button>{" "}
      </div>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LogIn;
