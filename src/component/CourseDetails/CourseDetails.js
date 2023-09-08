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
    fetch(`https://edu-vibe-server-eight.vercel.app/coures?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseDetails(data);
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
