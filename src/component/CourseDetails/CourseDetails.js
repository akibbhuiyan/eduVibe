import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Courses } from '../../FakeData';
import BreadCrumb from '../Home/BreadCrumb/BreadCrumb';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/Header/NavBar';
import DetailsContent from './DetailsContent/DetailsContent';
import RelatedCourse from './RelatedCourse/RelatedCourse';

const CourseDetails = () => {
  const {id} = useParams()
  const [courseDetails,setCourseDetails] = useState([])
  const details = Courses.find(course => course.id === Number(id)) 
  console.log(details);
  return (
    <div>
     <NavBar/>
     <BreadCrumb title='Course Details' currentPage='Course Details'/>
     <DetailsContent details={details}/>
     <RelatedCourse/>
     <Footer/>
    </div>
  );
};

export default CourseDetails;