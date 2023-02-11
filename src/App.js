import React, { useContext } from "react";
import "./App.css";
import "./mediaQuery.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./component/About/About";
import Login from "./component/Home/Login/Login";
import Home from "./component/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
import ScrolledToTop from "./component/ScrolledToTop/ScrolledToTop";
import Courses from "./component/Courses/Courses";
import CourseDetails from "./component/CourseDetails/CourseDetails";
import InstructorDeails from "./component/InstructorDeails/InstructorDeails";
import Faq from "./component/Faq/Faq";
const App = () => {
  AOS.init({
    offset: 150,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/author/:name" element={<InstructorDeails />} />
      </Routes>
      <ScrolledToTop />
    </>
  );
};

export default App;
