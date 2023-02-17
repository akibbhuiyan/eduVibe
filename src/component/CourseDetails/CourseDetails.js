import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../Home/BreadCrumb/BreadCrumb";
import Footer from "../Home/Footer/Footer";
import DetailsContent from "./DetailsContent/DetailsContent";
import RelatedCourse from "./RelatedCourse/RelatedCourse";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/coures")
      .then((res) => res.json())
      .then((data) => {
        const details = data.find((course) => course.id === Number(id));
        setCourseDetails(details);
      });
  }, [id]);
  return (
    <div>
      <BreadCrumb title="Course Details" currentPage="Course Details" />
      <DetailsContent details={courseDetails} />
      <RelatedCourse />
      <Footer />
    </div>
  );
};

export default CourseDetails;
