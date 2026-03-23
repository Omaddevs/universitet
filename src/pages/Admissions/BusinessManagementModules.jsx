import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import javlonbekImg from "../../images/javlonbek-asrakulov.png";
export default function BusinessManagementModules() {
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
                              <Link to="/admissions/foundation">{t("foundation")}</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">{t("business_management_modules")}</span>
                         </div>
                         <h1>{t("business_management_modules")}</h1>
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
                                   <button className={`tab-btn ${activeTab === "modules" ? "active" : ""}`} onClick={() => setActiveTab("modules")}>{t("modules")}</button>
                                   <button className={`tab-btn ${activeTab === "entryRequirements" ? "active" : ""}`} onClick={() => setActiveTab("entryRequirements")}>{t("entry_requirements")}</button>
                                   <button className={`tab-btn ${activeTab === "fees" ? "active" : ""}`} onClick={() => setActiveTab("fees")}>{t("fees")}</button>
                                   <button className={`tab-btn ${activeTab === "scholarships" ? "active" : ""}`} onClick={() => setActiveTab("scholarships")}>{t("scholarships")}</button>
                              </div>
                         </div>

                         {/* TAB CONTENT */}
                         <div className="tab-content-box">
                              {activeTab === "courseContent" && <div className="content-pane fade-in">
                                        <h2>{t("course_content")}</h2>
                                        <p>{t("this_innovative_degree_program")}</p>
                                   </div>}

                              {activeTab === "modules" && <div className="content-pane fade-in">
                                        <h2>{t("modules")}</h2>
                                        <p>{t("throughout_the_programme__ther")}</p>
                                        <h3>{t("foundation_year")}</h3>
                                        <p>{t("u0001___english_for_academic_p")}<br></br>{t("u0007___business_enterprise_sk")}<br></br>{t("u0002___digital_skills")}<br></br>{t("u0004___agri_food_business_and")}<br></br>{t("u0003___sustainable_developmen")}<br></br>{t("u0006___agriculture_and_farmin")}<br></br>
                                        </p>
                                   </div>}

                              {activeTab === "entryRequirements" && <div className="content-pane fade-in">
                                        <h2>{t("entry_requirements")}</h2>
                                        <p>{t("the_following_standard_univers")}</p>
                                   </div>}

                              {activeTab === "fees" && <div className="content-pane fade-in">
                                        <h2>{t("fees")}</h2>
                                        <p>{t("tuition_fees_uzb_29_900_000_uz")}</p>
                                        <p>{t("tuition_fees_international_3_7")}</p>
                                        <p>{t("duration_1_year___full_time")}</p>
                                   </div>}

                              {activeTab === "scholarships" && <div className="content-pane fade-in">
                                        <h2>{t("scholarships")}</h2>
                                        <p>{t("the_international_agriculture")}</p>
                                   </div>}
                         </div>

                         {/* BOTTOM ROW: PROFILE & APPLICATIONS */}
                         <div className="agri-bottom-row">
                              {/* PROFILE CARD */}
                              <div className="profile-card">
                                   <a href="mailto:javlonbek.asrakulov@iau.uz" className="profile-email-icon" title="Send Email">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                   </a>
                                   <img src={javlonbekImg} alt="Javlonbek Asrakulov" />
                                   <div className="profile-info">
                                        <h4>{t("javlonbek_asrakulov")}</h4>
                                        <p>{t("head_of_department")}</p>
                                   </div>
                              </div>

                              {/* APPLICATIONS OPEN BOX */}
                              <div className="applications-box">
                                   <h3>{t("applications_for_fall_2026_are")}</h3>
                                   <button className="apply-btn">{t("start_your_application_")}</button>
                              </div>
                         </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="admissions-sidebar">
                         <div className="sidebar-box">
                              <h3>{t("admissions")}</h3>
                              <ul className="sidebar-links">
                                   <li>
                                        <Link to="/admissions/pre-foundation" className="active-link">{t("pre_foundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/foundation">{t("foundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/undergraduate">{t("undergraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/postgraduate">{t("postgraduate")}</Link>
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