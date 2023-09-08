import React from "react";
import { Link } from "react-router-dom";
import { RiTimeLine, RiGroupLine, RiFileList2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Stars from "./Stars";

const CourseCard = (props) => {
  const {
    title,
    mainthumbnail,
    duration,
    author,
    rating,
    entrolled,
    lecture,
    price,
    id,
  } = props.course;

  return (
    <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-lg-4">
      <div className="edu-card card-type-2 radius-small " data-aos="fade-up">
        <div className="inner">
          <div className="thumbnail">
            <Link to={`/courseDetails/${id}`}>
              <img src={mainthumbnail} alt="" className="w-100 radius-small" />
            </Link>
            <div className="eduvibe-status">
              <span className="status-2">
                <RiTimeLine />
                {duration.hour} Hour{" "}
              </span>
            </div>
            <div className="wishlist-top-right">
              <button className="wishlistbtn">
                <FaRegHeart />
              </button>
            </div>
          </div>
          <div className="content">
            <div className="card-top">
              <div className="author-meta">
                <Link to={`/author/${author.name}`}>
                  <img src={author.profilePic} alt="" />
                  <span>{author.name}</span>
                </Link>
              </div>
              <div className="edu-rating">
                <Stars rating={rating} />
              </div>
            </div>
            <h6 className="title">{title}</h6>
            <ul className="edu-meta">
              <li>
                <RiGroupLine />
                {entrolled} Students
              </li>
              <li>
                <RiFileList2Line />
                {lecture} Lessons
              </li>
            </ul>
            <div className="card-bottom">
              <div className="price-list">
                <div className="price current-price">
                  {Number(price) ? `$${price}.00 USD` : `${price}`}
                </div>
                <div className="price old-price"></div>
              </div>
              <div className="buyButton">
                <Link to={`/courseDetails/${id}`}>Enroll</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
