import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";
const CourseList = () => {
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://edu-vibe-server-eight.vercel.app/coures")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <section className="edu-course-area">
      <Container>
        <div className="row g-5 mt-3">
          {Courses.map((course, idx) => (
            <CourseCard course={course} key={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseList;
