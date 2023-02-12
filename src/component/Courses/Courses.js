import React from "react";
import BreadCrumb from "../Home/BreadCrumb/BreadCrumb";
import NavBar from "../Home/Header/NavBar";
import CourseList from "./Course/CourseList";
import Footer from "./../Home/Footer/Footer";

const Courses = () => {
  return (
    <div>
      <BreadCrumb title="Courses " currentPage="Courses " />
      <CourseList />
      <Footer />
    </div>
  );
};

export default Courses;
