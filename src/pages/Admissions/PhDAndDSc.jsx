import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "./AdmissionsShared.css";
import { Link } from "react-router-dom";
import heroImg from "../../images/campus.PNG";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
export default function PhDAndDSc() {
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
                              <span className="current">{t("phd_and_dsc_programmes")}</span>
                         </div>
                         <h1>{t("phd_and_dsc_programmes")}</h1>
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
                                   <button className={`tab-btn ${activeTab === "entryRequirements" ? "active" : ""}`} onClick={() => setActiveTab("entryRequirements")}>{t("phd_dsc___national_requirement")}</button>
                                   <button className={`tab-btn ${activeTab === "fees" ? "active" : ""}`} onClick={() => setActiveTab("fees")}>{t("supreme_attestation_commission")}</button>
                              </div>
                         </div>

                         {/* TAB CONTENT */}
                         <div className="tab-content-box foundation-content">
                              {activeTab === "courseContent" && <div className="content-pane fade-in">
                                        <h4>{t("phd_and_dsc_programmes")}</h4>
                                        <br />
                                        <p>{t("international_agriculture_univ_3")}</p>
                                   </div>}

                              {activeTab === "entryRequirements" && <div className="content-pane fade-in">
                                        <h2>{t("phd_dsc_programmes_in_accordan")}</h2>
                                        <p>{t("this_programme_operates_based")}</p>
                                   </div>}

                              {activeTab === "fees" && <div className="content-pane fade-in">
                                        <h2>{t("supreme_attestation_commission_1")}</h2>
                                        <p>{t("supreme_attestation_commission_2")}</p>
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
                                        <Link to="/admissions/postgraduate">{t("postgraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/phd" className="active-link">{t("phd_and_dsc_programmes")}</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>

               </div>
          </div>;
}