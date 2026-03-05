import React, { useState } from "react";
import "./ResearchProjects.css";

import dianaImg from "../../images/image2.jpg"; // Based on your current placeholder usage
import leslieImg from "../../images/image3.jpg"; // Based on your current placeholder usage
import bgVideo from "../../all-bg-videos/iau-bg.mp4"; // Adding background video

export default function ResearchProjects() {

     const projects = [
          {
               title: "Diana",
               image: dianaImg
          },
          {
               title: "Leslie",
               image: leslieImg
          }
     ];

     return (
          <div className="rp-page">
               <div className="rp-hero">
                    <video
                         className="rp-hero-video"
                         autoPlay
                         loop
                         muted
                         playsInline
                    >
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="rp-hero-overlay"></div>
                    <h1 className="rp-title">Research Projects</h1>
               </div>

               <div className="rp-container">

                    <div className="rp-tabs-container">
                         <div className="rp-tabs">
                              <div className="rp-tab active">Research Projects</div>
                         </div>
                    </div>

                    <div className="rp-grid">
                         {projects.map((project, idx) => (
                              <div key={idx} className="rp-card">
                                   <div className="rp-img-box">
                                        <img src={project.image} alt={project.title} />
                                        <div className="rp-strip blue"></div>
                                   </div>
                                   <div className="rp-card-content">
                                        <h3 className="rp-card-title">{project.title}</h3>
                                        <hr className="rp-divider" />
                                        <button className="rp-link">See more &rarr;</button>
                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className="rp-applications-box">
                         <h3>Applications for Fall 2026 are now open!</h3>
                         <button className="rp-apply-btn">Start Your Application &rarr;</button>
                    </div>

               </div>
          </div>
     );
}
