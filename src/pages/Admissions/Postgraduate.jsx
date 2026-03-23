import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "./AdmissionsShared.css";
import { Link } from "react-router-dom";
import heroImg from "../../images/campus.PNG";
import image7 from "../../iau-images/7.png"; // Placeholder
import image8 from "../../iau-images/8.png"; // Placeholder
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
export default function Postgraduate() {
  const {
    t
  } = useTranslation();
  const [activeTab, setActiveTab] = useState("courseContent");
  return <div className="admissions-page">
               {/* PAGE HEADER */}
               <div className="admissions-hero">
                    <video className="admissions-hero-video" autoPlay loop muted playsInline>
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                    <div className="admissions-hero-content">
                         <div className="breadcrumbs">
                              <Link to="/">🏠</Link>
                              <span className="separator">&gt;</span>
                              <span>{t("admissions")}</span>
                              <span className="separator">&gt;</span>
                              <span className="current">{t("postgraduate")}</span>
                         </div>
                         <h1>{t("postgraduate")}</h1>
                    </div>
               </div>

               {/* MAIN CONTENT AREA */}
               <div className="admissions-container">

                    {/* LEFT COMPONENT */}
                    <div className="admissions-main">
                         {/* TABS */}
                         <div className="tabs-container">
                              <div className="tabs-list">
                                   <button className={`tab-btn ${activeTab === "courseContent" ? "active" : ""}`} onClick={() => setActiveTab("courseContent")}>{t("course_content")}</button>
                                   {/* <button
                                        className={`tab-btn ${activeTab === "entryRequirements" ? "active" : ""}`}
                                        onClick={() => setActiveTab("entryRequirements")}
                                    >
                                        Entry requirements
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === "fees" ? "active" : ""}`}
                                        onClick={() => setActiveTab("fees")}
                                    >
                                        Fees
                                    </button> */}
                              </div>
                         </div>

                         {/* TAB CONTENT */}
                         <div className="tab-content-box foundation-content">
                              {activeTab === "courseContent" && <div className="content-pane fade-in">
                                        <div className="modules-grid">
                                             {/* Card 1 */}
                                             <div className="module-card">
                                                  <div className="module-img-box">
                                                       <img src={image7} alt="MSc Sustainable Agriculture and Food Security" />
                                                       <div className="module-strip blue"></div>
                                                  </div>
                                                  <div className="module-info">
                                                       <h4>{t("msc_sustainable_agriculture_an")}</h4>
                                                       <hr className="module-divider" />
                                                       <Link to="/admissions/msc-sustainable-agriculture" className="module-link" style={{
                    textDecoration: 'none'
                  }}>{t("see_more_")}</Link>
                                                  </div>
                                             </div>

                                             {/* Card 2 */}
                                             <div className="module-card">
                                                  <div className="module-img-box">
                                                       <img src={image8} alt="MSc Agri-Business Management" />
                                                       <div className="module-strip solid-blue"></div>
                                                  </div>
                                                  <div className="module-info">
                                                       <h4>{t("msc_agri_business_management")}</h4>
                                                       <hr className="module-divider" />
                                                       <Link to="/admissions/msc-agri-business" className="module-link" style={{
                    textDecoration: 'none'
                  }}>{t("see_more_")}</Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>}

                              {activeTab === "entryRequirements" && <div className="content-pane fade-in">
                                        <h2>{t("entry_requirements")}</h2>
                                        <p>{t("information_about_postgraduate")}</p>
                                   </div>}

                              {activeTab === "fees" && <div className="content-pane fade-in">
                                        <h2>{t("fees")}</h2>
                                        <p>{t("information_about_postgraduate_1")}</p>
                                   </div>}
                         </div>

                         {/* APPLICATIONS OPEN BOX */}
                         <div className="applications-box">
                              <h3>{t("applications_for_fall_2026_are")}</h3>
                              <button className="apply-btn">{t("start_your_application_")}</button>
                         </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="admissions-sidebar">
                         <div className="sidebar-box">
                              <h3>{t("admissions")}</h3>
                              <ul className="sidebar-links">
                                   <li>
                                        <Link to="/admissions/pre-foundation">{t("pre_foundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/foundation">{t("foundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/undergraduate">{t("undergraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/postgraduate" className="active-link">{t("postgraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/phd">{t("phd_and_dsc_programmes")}</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>

               </div>
          </div>;
}