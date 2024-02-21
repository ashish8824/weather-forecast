import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContainer = () => {
  return (
    <div className="p-12 bg-gray-300 h-[1000px]">
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
