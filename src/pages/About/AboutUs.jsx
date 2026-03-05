import React from "react";
import "./AboutUs.css";

import { FaGraduationCap, FaUserTie, FaBuilding, FaBookOpen, FaPlay } from "react-icons/fa";
import { IoArrowForwardOutline, IoClose } from "react-icons/io5";

import cityImg from "../../more-about-us-images/about-city.png";
import videoCoverImg from "../../more-about-us-images/iau-video-image.png";
import presidentImg from "../../more-about-us-images/president-about.jpg";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function AboutUs() {
     const [isVideoOpen, setIsVideoOpen] = React.useState(false);

     return (
          <div className="about-page">
               {/* HERO SECTION */}
               <div className="about-hero">
                    <video autoPlay loop muted playsInline className="about-hero-img" style={{ objectFit: 'cover' }}>
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="about-hero-overlay"></div>
                    <h1 className="about-title">About Us</h1>
               </div>

               <div className="about-container">

                    {/* TOP ROW */}
                    <div className="about-top-grid">
                         {/* About University */}
                         <div className="about-uni-card">
                              <h2>About University</h2>
                              <p>
                                   The International Agriculture University was established in 2022 by decree of the President of the Republic of Uzbekistan, in partnership with the Royal Agricultural University, a renowned British academic institution, operating under the patronage of the King Charles III. Graduates of the International Agriculture University will attain not only exceptional knowledge and skills in Tashkent, but also a diploma from the prestigious British university.
                              </p>
                              <button className="about-btn">
                                   See programs <IoArrowForwardOutline />
                              </button>
                              <img src={cityImg} alt="City Silhouette" className="about-city-img" />
                         </div>

                         {/* Video Placeholder */}
                         <div
                              onClick={() => setIsVideoOpen(true)}
                              style={{ cursor: 'pointer' }}
                              className="about-video-card"
                         >
                              <img src={videoCoverImg} alt="IAU Video Cover" />
                              <div className="about-video-play">
                                   <FaPlay />
                              </div>
                         </div>
                    </div>

                    {/* STATS ROW */}
                    <div className="about-stats-grid">

                         <div className="about-stat-card stat-teal">
                              <FaGraduationCap className="stat-icon-top" />
                              <h3>1 305</h3>
                              <p>Students</p>
                              <FaGraduationCap className="stat-icon-bg" />
                         </div>

                         <div className="about-stat-card stat-blue">
                              <FaUserTie className="stat-icon-top" />
                              <h3>201</h3>
                              <p>Staff</p>
                              <FaUserTie className="stat-icon-bg" />
                         </div>

                         <div className="about-stat-card stat-green">
                              <FaBuilding className="stat-icon-top" />
                              <h3>4</h3>
                              <p>Schools</p>
                              <FaBuilding className="stat-icon-bg" />
                         </div>

                         <div className="about-stat-card stat-indigo">
                              <FaBookOpen className="stat-icon-top" />
                              <h3>70</h3>
                              <p>Faculty</p>
                              <FaBookOpen className="stat-icon-bg" />
                         </div>

                    </div>

                    {/* PRESIDENT ROW */}
                    <div className="about-president-card">
                         <div className="president-text-side">
                              <h2>International Agriculture<br />University in Uzbekistan</h2>
                              <p>
                                   The International Agricultural University, established by the Resolution of the President of the Republic of Uzbekistan <br />
                                   PQ-237, currently operates as an International State University. Graduates of the university receive a diploma from the British University of RAU, which is recognized in Uzbekistan.
                              </p>
                         </div>
                         <div className="president-img-side">
                              <div className="diagonal-overlay-green"></div>
                              <div className="diagonal-overlay"></div>
                              <img src={presidentImg} alt="President of Uzbekistan" />
                         </div>
                    </div>

               </div>

               {/* VIDEO MODAL */}
               {isVideoOpen && (
                    <div className="about-video-modal" onClick={() => setIsVideoOpen(false)}>
                         <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
                              <button
                                   className="about-modal-close"
                                   onClick={() => setIsVideoOpen(false)}
                              >
                                   <IoClose />
                              </button>
                              <div className="about-iframe-wrapper">
                                   <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/QfsPgWoym9s?autoplay=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                   ></iframe>
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
}
