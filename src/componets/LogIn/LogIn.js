import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Auth.css"; // We will use a shared Auth.css

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Verification Email Sent");
    } else {
      toast.error("Please enter your email address");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    try {
      const { data } = await axios.post(
        "https://warehouse-9jcz.onrender.com/login",
        { email }
      );
      if (data && data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }
    } catch (err) {
      console.error(err);
    }
    navigate(from, { replace: true });
    event.target.reset();
  };

  if (loading || sending) {
    return <Loading />;
  }

  return (
    <div className="auth-page">
      <div className="auth-glow"></div>
      <div className="auth-container">
        <div className="auth-card glass-card">
          <div className="auth-header text-center">
            <h2 className="section-title" style={{ fontSize: "2rem" }}>Welcome Back</h2>
            <p className="auth-subtitle">Log in to manage your inventory</p>
          </div>

          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-input-group">
              <span className="input-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="auth-input"
              />
            </div>
            
            <div className="auth-input-group">
              <span className="input-icon"><FontAwesomeIcon icon={faLock} /></span>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
                required
                className="auth-input"
              />
            </div>

            {error && <p className="auth-error">{error?.message}</p>}

            <div className="auth-actions">
              <button type="submit" className="btn-primary-custom w-100 justify-content-center">
                Log In
              </button>
            </div>
            
            <div className="auth-links">
              <button
                type="button"
                className="btn-forgot btn-link"
                onClick={resetPassword}
              >
                Forgot Password?
              </button>
            </div>
          </form>

          <SocialLogin />

          <div className="auth-footer text-center">
            <span>Don't have an account? </span>
            <Link to="/register" className="auth-link-bold">Sign up here</Link>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default LogIn;
