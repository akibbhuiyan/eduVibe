import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import Stars from "./../../Home/Courses/Stars";
import "./CourseCard.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CourseCard = (props) => {
  const { id, title, rating, category, mainthumbnail, lecture, price, author } =
    props.course;
  const slick = props.slick;
  const [clicked, setClicekd] = useState(false);
  const handleLove = () => {
    setClicekd(!clicked);
  };
  const navigate = useNavigate();

  return (
    <div className={slick === "yes" ? "slick" : "col-lg-4 col-sm-6 col-12"}>
      <div className="edu-card-2 radius-small">
        <div className="inner">
          <div className="thumbnail">
            <Link to="/course">
              <img src={mainthumbnail} alt="" />
            </Link>
            <div className="wishlist-top-right">
              <button
                className={clicked ? "wishlist-btn love" : "wishlist-btn"}
              >
                <FaHeart />
              </button>
            </div>
            <div className="status-group">
              <a href="/">{category}</a>
            </div>
          </div>
          <div className="content">
            <div className="card-top">
              <div className="author-meta">
                <img src={author.profilePic} alt="" />
                <span className="author-title">{author.name}</span>
              </div>
              <div className="edu-meta">
                <li>
                  <RiFileList3Line />
                  {lecture} Lessons
                </li>
              </div>
            </div>
            <h6 className="title">{title}</h6>
            <div className="card-bottom">
              <div className="price-list">
                <div className="current-pice">
                  {Number(price) ? `$${price}.00` : `${price}`}
                </div>
                <div className="old-price"></div>
              </div>
              <Stars rating={rating} />
            </div>
          </div>
        </div>
        {/* Hover */}
        <div className="card-hover-action">
          <div className="hover-content g-5">
            <div className="content-top">
              <div className="top-status-bar">
                <a href="/">{category}</a>
              </div>
              <div className="top-wishlist-bar">
                <button
                  className={clicked ? "wishlist-btn love" : "wishlist-btn"}
                  onClick={handleLove}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
            <Link to={`/courseDetails/${id}`}>
              <h6 className="title">{title}</h6>
            </Link>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since ...
            </p>
            <div className="price-list">
              <div className="current-pice">
                {Number(price) ? `$${price}.00` : `${price}`}
              </div>
              <div className="old-price"></div>
            </div>
            <div className="hover-bottom-content">
              <div className="author-meta">
                <Link to={`/author/${author.name}`}>
                  <img src={author.profilePic} alt="" />
                  <span className="author-title">{author.name}</span>
                </Link>
              </div>
              <div className="edu-meta">
                <li>
                  <RiFileList3Line />
                  {lecture} Lessons
                </li>
              </div>
            </div>
            <div className="read-more-btn">
              <Link to={`/courseDetails/${id}`}>
                Enroll Now <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
