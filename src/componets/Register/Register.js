import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "../LogIn/Auth.css";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confPasswordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confPassword = confPasswordRef.current.value;
    
    if (password !== confPassword) {
      return toast.error("Passwords do not match!");
    }
    await createUserWithEmailAndPassword(email, password);
    navigate(from, { replace: true });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="auth-page">
      <div className="auth-glow"></div>
      <div className="auth-container">
        <div className="auth-card glass-card">
          <div className="auth-header text-center">
            <h2 className="section-title" style={{ fontSize: "2rem" }}>Create Account</h2>
            <p className="auth-subtitle">Join us and start managing inventory</p>
          </div>

          <form onSubmit={handleRegister} className="auth-form">
            <div className="auth-input-group">
              <span className="input-icon"><FontAwesomeIcon icon={faUser} /></span>
              <input
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Full Name"
                className="auth-input"
              />
            </div>
          
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

            <div className="auth-input-group">
              <span className="input-icon"><FontAwesomeIcon icon={faLock} /></span>
              <input
                ref={confPasswordRef}
                type="password"
                name="confPassword"
                placeholder="Confirm Password"
                required
                className="auth-input"
              />
            </div>

            {error && <p className="auth-error">{error?.message}</p>}

            <div className="auth-actions" style={{ marginTop: "24px" }}>
              <button type="submit" className="btn-teal-custom w-100 justify-content-center">
                Create Account
              </button>
            </div>
          </form>

          <SocialLogin />

          <div className="auth-footer text-center">
            <span>Already have an account? </span>
            <Link to="/login" className="auth-link-bold" style={{ color: "var(--secondary)" }}>Log in here</Link>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Register;
