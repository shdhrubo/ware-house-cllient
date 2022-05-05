import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Register.css";
const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confPasswordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confPassword = confPasswordRef.current.value;
    if (password !== confPassword) {
      return alert('not match');
    }
    createUserWithEmailAndPassword(email, password);

    event.target.reset();
  };

  return (
    <div className="register-form w-100">
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
      <Link to="/login" className="common-color pe-auto text-decoration-none">
        I already have an account
      </Link>{" "}
    </div>
  );
};

export default Register;
