import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let userInfo = JSON.parse(localStorage.getItem("data"));

      if (userInfo?.phone) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/user/${userInfo?.phone}`,
            {
              withCredentials: true,
            }
          );
          console.log(response.data.data);
          setUser(response?.data?.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [loading]);

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("data");
    setUser(null);
  };
  const authInfo = {
    user,
    setUser,
    logout,
    loading,
    setLoading,
    reload,
    setReload,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export const AuthState = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
