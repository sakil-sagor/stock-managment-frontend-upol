import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(1);
  useEffect(() => {
    let teacherInfo = JSON.parse(localStorage.getItem("data"));

    if (teacherInfo?.teacherPhone) {
      fetch(`http://localhost:5000/api/v1/user/${teacherInfo?.teacherPhone}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setTeacher(result.data);
          setLoading(false);
        });
    }
  }, [loading]);

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("data");
    localStorage.removeItem("accessToken");
    setTeacher(null);
  };
  const authInfo = {
    teacher,
    setTeacher,
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
export const TeacherState = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
