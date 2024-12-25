import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error caught in interceptor: ", error);

        if (error.status === 401 || error.status === 403) {
          console.log("need to log out the user");

          handleSignOut()
            .then(() => {
              console.log("logout user");
              navigate("/signin");
            })
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
