import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const toggle = useSelector((store) => store.toggle.isDark);
  return (
    <div
      className={
        toggle
          ? "p-12 bg-gray-600 h-[1000px] text-white"
          : "p-12 bg-gray-100 h-[1000px]"
      }
    >
      <Header />
      <MainSection />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default MainContainer;
