import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import "./LogIn.css";
const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    event.target.reset();
  };
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
      <Link
        to="/register"
        className="common-color pe-auto text-decoration-none"
      >
        I don't have an account
      </Link>{" "}
      <br />
      <div className="forget-btn">
        <button className=" btn btn-link pe-auto text-decoration-none ">
          Reset Password
        </button>{" "}
      </div>
    </div>
  );
};

export default LogIn;
