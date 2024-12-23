import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

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
    <div className="pt-10 lg:pt-16 font-Nunito bg-gradient-to-r from-background to-primary">
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
        Sign Up Now!
      </h2>
      <div className="flex justify-center items-center text-primary mt-5 ">
        <div className="card  w-full max-w-lg shrink-0 shadow-2xl bg-[#F5F5F5]">
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
              <button className="btn bg-secondary text-white hover:bg-accent">
                Sign Up
              </button>
            </div>
            <p className="text-center font-bold">
              Already Have An Account ? please{" "}
              <Link className="text-red-600 underline" to="/signin">
                Sign In
              </Link>{" "}
            </p>
            <div className="flex  text-text mt-5 items-center justify-center">
              <button
                className="px-5 py-3 rounded-sm bg-secondary hover:bg-accent "
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

export default SignUp;
