import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Stars from "../../Home/Courses/Stars";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import {
  RiDraftLine,
  RiLockPasswordLine,
  RiTimeLine,
  RiBarChart2Line,
  RiTranslate,
  RiArtboardLine,
  RiAwardLine,
  RiPercentLine,
  RiCalendar2Line,
  RiUser2Line,
} from "react-icons/ri";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaPlay,
} from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import "./DetailsContent.css";
const DetailsContent = ({ details }) => {
  console.log(details);
  return (
    <section className="edu-course-details">
      <Container>
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="main-image-thumbnail">
              <img src={details.mainthumbnail} alt="" />
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="course-details-content">
              <div className="content-top">
                <div className="author-meta">
                  {" "}
                  <Link to="/">
                    <img src={details.author.profilePic} alt="" />
                    <span className="author-title">
                      By {details.author.name}
                    </span>
                  </Link>
                </div>
                <Stars rating={details.rating} reviews={details.totalReviw} />
              </div>
              <h3 className="title">{details.title}</h3>
              <Tabs
                defaultActiveKey="overview"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
                <Tab eventKey="overview" title="Overview">
                  <div className="course-tab-content">
                    <h5>Course Description</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <h5>What You’ll Learn From This Course</h5>
                    <ul>
                      <li>
                        Neque sodales ut etiam sit amet nisl purus non tellus
                        orci ac auctor
                      </li>
                      <li>
                        Tristique nulla aliquet enim tortor at auctor urna. Sit
                        amet aliquam id diam maer
                      </li>
                      <li>
                        Nam libero justo laoreet sit amet. Lacus sed viverra
                        tellus in hac
                      </li>
                      <li>
                        Tempus imperdiet nulla malesuada pellentesque elit eget
                        gravida cum sociis
                      </li>
                    </ul>
                    <h5>Certification</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="curriculum" title="Curriculum">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>The First Steps</Accordion.Header>
                      <Accordion.Body className="edu-accordination-body">
                        <ul>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Introduction
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Overview
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Local Development Environment Tools
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Excercise
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Embedding PHP in HTML
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Using Dynamic Data
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Data Types and More</Accordion.Header>
                      <Accordion.Body className="edu-accordination-body">
                        <ul>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Introduction
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Overview
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Local Development Environment Tools
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Excercise
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Embedding PHP in HTML
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Using Dynamic Data
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Control Structure</Accordion.Header>
                      <Accordion.Body className="edu-accordination-body">
                        <ul>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Introduction
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Overview
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Local Development Environment Tools
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Excercise
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Embedding PHP in HTML
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Using Dynamic Data
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Tab>
                <Tab eventKey="instructor" title="Instructor">
                  <div className="course-tab-content">
                    <div className="course-author-wrapper">
                      <div className="thumbnail">
                        <img src={details.author.profilePicBig} alt="" />
                      </div>
                      <div className="author-content">
                        <h6 className="title">{details.author.name}</h6>
                        <span className="subtitle">
                          {details.author.degination}
                        </span>
                        <p>{details.author.about}</p>
                        <div className="team-share-info">
                          <a href="/about">
                            <FaLinkedinIn />
                          </a>
                          <a href="/about">
                            <FaFacebookF />
                          </a>
                          <a href="/about">
                            <FaPinterestP />
                          </a>
                          <a href="/about">
                            <FaTwitter />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="edu-sidebar">
              <div className="inner">
                <div className="eduvibe-widget">
                  <div className="video-area">
                    <div className="video-popup-wraper">
                      <img
                        src={details.videoThumbail}
                        alt=""
                        className="w-100 radius-small"
                      />
                      <button className="video-play-btn">
                        <FaPlay />
                      </button>
                    </div>
                  </div>
                  <div className="eduvibe-widget-details">
                    <ul>
                      <li>
                        <span>
                          <RiTimeLine /> Duration
                        </span>
                        <span>
                          {details.duration.hour}h {details.duration.min}m{" "}
                          {details.duration.sec}s
                        </span>
                      </li>
                      <li>
                        <span>
                          <ImUsers /> Enrolled
                        </span>
                        <span>{details.entrolled}</span>
                      </li>
                      <li>
                        <span>
                          <RiDraftLine /> Lectures
                        </span>
                        <span>{details.lecture}</span>
                      </li>
                      <li>
                        <span>
                          <RiBarChart2Line /> Skill Level
                        </span>
                        <span>{details.skill}</span>
                      </li>
                      <li>
                        <span>
                          <RiTranslate /> Language
                        </span>
                        <span>{details.language}</span>
                      </li>
                      <li>
                        <span>
                          <RiArtboardLine /> Quizzes
                        </span>
                        <span>{details.quiz}</span>
                      </li>
                      <li>
                        <span>
                          <RiAwardLine /> Certificate
                        </span>
                        <span>{details.certificate}</span>
                      </li>
                      <li>
                        <span>
                          <RiPercentLine /> Pass Percentage
                        </span>
                        <span>{details.passParcentage}%</span>
                      </li>
                      <li>
                        <span>
                          <RiCalendar2Line /> Deadline
                        </span>
                        <span>{details.deadline}</span>
                      </li>
                      <li>
                        <span>
                          <RiUser2Line /> Instructor
                        </span>
                        <span>{details.author.name}</span>
                      </li>
                    </ul>
                    <div className="read-more-btn mt-5">
                      <a href="#" className="edu-btn bg-alt">
                        Price: {details.price}.00
                      </a>
                    </div>
                    <div className="main-btn  mt-3">
                      <a href="#" className="edu-btn w-100 text-center">
                        Buy Now
                      </a>
                    </div>
                    <div className="eduvibe-post-share mt-3 text-center ">
                      <span>Share:</span>
                      <a href="/about">
                        <FaLinkedinIn />
                      </a>
                      <a href="/about">
                        <FaFacebookF />
                      </a>
                      <a href="/about">
                        <FaPinterestP />
                      </a>
                      <a href="/about">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DetailsContent;
