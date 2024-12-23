import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { singInUser, signInWithGoogle, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    // e.preventDefault();
    const { email, password } = data;

    // const form = e.target;
    // const email = data.email.value;
    // const password = data.password.value;

    singInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err.message}`,
          text: "Something went wrong!",
          footer:
            '<a href="https://www.google.com/">Why do I have this issue?</a>',
        });
      });
  };

  //handleGoogleSignIn

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          text: "Something went wrong!",
        });
        return;
      });
  };
  return (
    <div className="pt-10 lg:pt-16 font-Nunito bg-gradient-to-r from-background to-primary min-h-screen">
      <div>
        <Link
          className="flex gap-2 items-center text-3xl font-Cinzel text-secondary ml-6"
          to="/"
        >
          <FaArrowLeftLong />
          Back To Home
        </Link>
      </div>
      <h2 className="text-3xl lg:text-4xl font-Montserrat font-bold text-center text-text">
        Sign In Now!
      </h2>
      <div className="flex justify-center items-center text-primary mt-5 ">
        <div className="card  w-full max-w-lg shrink-0 shadow-2xl bg-[#F5F5F5]">
          <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-secondary text-white hover:bg-accent"
              >
                Sign In
              </button>
            </div>

            {/* Redirect to Sign Up */}
            <p className="text-center font-bold">
              New in this website? Please{" "}
              <Link className="text-red-600 underline" to="/signup">
                Sign Up
              </Link>
            </p>

            {/* Google Sign-In Button */}
            <div className="flex text-text mt-5 items-center justify-center">
              <button
                type="button"
                className="px-5 py-3 rounded-sm bg-secondary hover:bg-accent"
                onClick={handleGoogleSignIn}
              >
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
