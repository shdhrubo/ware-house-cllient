import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../SocialLogin/SocialLogin";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message} </p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div
          style={{ height: "1px", backgroundColor: "#00ad9f" }}
          className=" w-25"
        ></div>
        <p className="mt-2 px-2">or</p>
        <div
          style={{ height: "1px", backgroundColor: "#00ad9f" }}
          className="w-25"
        ></div>
      </div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-50 d-block mx-auto my-2"
          style={{ backgroundColor: "#00ad9f", color: "white" }}
        >
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};
export default SocialLogin;
