import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </>
  );
}

export default App;
