import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import Animation2 from '../assets/images/animations/Animation - 1735133711079.json'

const SignUp = () => {
  const { creatNewUser, signInWithGoogle, updateUserProfile, setUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  //handlesingUp
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    //password validation

    const validPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!validPassword.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be a uppercase letter,a lowercase letter and six characters length",
      });
      return;
    }

    //creat user

    creatNewUser(email, password)
      .then((result) => {
        setUser(result.user);
Swal.fire({
  icon: "success",
  title: "<h2 style='color: #4caf50;'>Welcome to Food For All!</h2>",
  html: `
    <p style="color: #555; font-size: 16px;">
      Your signup was <strong style="color: #4caf50;">successful</strong>! 
      We're thrilled to have you on board.
    </p>
    <p style="color: #888; font-size: 14px;">
      Explore our platform and start sharing or receiving food today!
    </p>
  `,
  background: "#f9f9f9",
  confirmButtonText: "Let's Get Started!",
  confirmButtonColor: "#4caf50",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});

        navigate("/");

        // update profile

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser((previousUser) => {
              return { ...previousUser, displayName: name, photoURL: photo };
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: `${error.message}`,
              text: "Something went wrong!",
            });
            return;
          });
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
                Swal.fire({
                  icon: "sucess",
                  title: 'Successfull!',
                  text: "Welcome At Food For All",
                });
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
    <div className="pt-10 lg:pt-16 bg-background1 font-Roboto ">
      <div>
        <Link
          className="flex gap-2 items-center text-3xl font-Playfire text-secondary ml-6"
          to="/"
        >
          <FaArrowLeftLong />
          Back To Home
        </Link>
      </div>
      <h2 className="text-3xl lg:text-4xl font-Playfire font-semibold text-center my-5 ">
        Sign Up Now!
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto border px-5">
        <div className="w-full">
          <div
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </div>
          <div className="divider">OR Sign Up With Email</div>
          <div className="card  w-full shrink-0 shadow-2xl bg-[#F5F5F5]">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name </span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-secondary2 text-white hover:bg-[##8BAFBF]">
                  Sign Up
                </button>
              </div>
              <p className="text-center font-bold">
                Already Have An Account ? please{" "}
                <Link className="text-red-600 underline" to="/signin">
                  Sign In
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
        <div className="w-full">
          <Lottie animationData={Animation2} />;
        </div>
      </div>
    </div>
  );
};

export default SignUp;
