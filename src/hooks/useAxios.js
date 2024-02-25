import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

// const instance = axios.create({
//     baseURL: 'https://assignment11ser.iitpark.com/api/v1',
//     withCredentials: true,
// })

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  // return instance;
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console
            .log("logout the user")
            // logout()
            //     .then(() => {
            //         navigate('/registration')
            //     })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);

  return axiosSecure;
};
export default useAxios;