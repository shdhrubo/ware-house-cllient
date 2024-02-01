import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Register.css";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confPasswordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let errorElement;
  const handleRegister = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confPassword = confPasswordRef.current.value;
    if (password !== confPassword) {
      return toast("Password did not matched");
    }
    await createUserWithEmailAndPassword(email, password);

    // navigate("/home");
    navigate(from, { replace: true });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div className="form w-100">
      <h2 className="text-center common-color">Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <br />
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
          ref={confPasswordRef}
          type="password"
          name="confPassword"
          id=""
          placeholder="Confirm password"
          required
        />
        <br />
        <input
          className="w-50 mx-auto btn  mt-2"
          type="submit"
          value="Register"
        />
      </form>
      {errorElement}
      <Link to="/login" className="common-color pe-auto text-decoration-none">
        I already have an account
      </Link>{" "}
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
