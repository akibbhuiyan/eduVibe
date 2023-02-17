import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Context/UserContext";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import "./Courses.css";
const Courses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/courses?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, [user]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deletecourse?courseId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("You Successfully deleted this Coure");
        } else {
          toast.error("Something went wrong,Please Try again");
        }
      });
  };
  return (
    <div className="courseSection">
      <table className="table table-borderless ">
        <thead>
          <tr>
            <th className="text-secondary text-left" scope="col">
              Sr No
            </th>

            <th className="text-secondary" scope="col">
              Title
            </th>
            <th className="text-secondary" scope="col">
              Author
            </th>
            <th className="text-secondary" scope="col">
              Enrolled Date
            </th>
            <th className="text-secondary" scope="col">
              Skill
            </th>
            <th className="text-secondary" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{course.title}</td>
              <td>{course?.author?.name}</td>
              <td>{course.date}</td>
              <td>{course.skill}</td>
              <td>
                <button className="btn btn-info me-2">Pending</button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleDelete(course._id)}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;