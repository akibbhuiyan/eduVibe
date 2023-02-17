import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CourseCard from "./CourseCard";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./HomeCourses.css";
const HomeCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://edu-vibe-server-eight.vercel.app/coures")
      .then((res) => res.json())
      .then((data) => {
        const first6Array = data.slice(0, 6);
        setCourses(first6Array);
      });
  }, []);

  return (
    <section className="edu-home-course">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center " data-aos="fade-up">
              <span className="pre-title">Popular Courses</span>
              <h3 className="title">Featured On This Month</h3>
            </div>
          </div>
          <div className="row gy-5 mt-5">
            {courses.map((course, idx) => (
              <CourseCard course={course} key={idx} data-aos="fade-up" />
            ))}
          </div>
          <div className="col-lg-12 mt-5 pt-5">
            <div className="main-btn text-center">
              <a href="/home">
                View All Courses <AiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCourses;
