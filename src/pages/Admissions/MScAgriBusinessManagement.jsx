import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import baxtiyorImg from "../../images/baxtiyor.png";
export default function MScAgriBusinessManagement() {
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
                              <Link to="/admissions/postgraduate">{t("postgraduate")}</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">{t("msc_agri_business_management")}</span>
                         </div>
                         <h1>{t("msc_agri_business_management")}</h1>
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
                                   {/* <button
                                        className={`tab-btn ${activeTab === "scholarships" ? "active" : ""}`}
                                        onClick={() => setActiveTab("scholarships")}
                                    >
                                        Scholarships
                                    </button> */}
                              </div>
                         </div>

                         {/* TAB CONTENT */}
                         <div className="tab-content-box">
                              {activeTab === "courseContent" && <div className="content-pane fade-in">
                                        <h2>{t("course_content")}</h2>
                                        <p>{t("the_msc_agri_business_manageme")}</p>
                                   </div>}

                              {activeTab === "modules" && <div className="content-pane fade-in">
                                        <h2>{t("modules")}</h2>
                                        <p>{t("throughout_the_programme__stud")}<br></br>
                                        </p>
                                        <h3>{t("core_modules")}</h3>
                                        <p>{t("u4413___research_skills")}<br></br>{t("u4414___dissertation")}<br></br>{t("new___leadership_and_business")}<br></br>{t("new___sustainable_agricultural")}<br></br>{t("u4086___financial_management")}<br></br>{t("u4260___marketing_strategy")}<br></br>{t("u4023___operations_management")}<br></br>{t("u4263___entrepreneurship_and_b")}<br></br>{t("new___english_for_academic_pur")}<br></br>
                                        </p>
                                        <h3>{t("careers_and_graduate_destinati")}</h3>
                                        <p>{t("this_degree_programme_has_been")}<br></br>{t("the_degree_will_also_be_of_int")}<br></br>{t("this_programme_will_educate_an")}<br></br>
                                        </p>
                                        <p>{t("graduates_are_highly_likely_to")}<br></br>
                                        </p>
                                        <p>{t("the_agricultural_and_environme")}<br></br>{t("industries_allied_to_crop_and")}<br></br>{t("business_consultancy___governm")}<br></br>{t("the_development_of_new_compani")}<br></br>{t("doctoral_study_and_an_academic")}<br></br>{t("research_institutes")}<br></br>
                                        </p>
                                   </div>}

                              {activeTab === "entryRequirements" && <div className="content-pane fade-in">
                                        <h2>{t("entry_requirements")}</h2>
                                        <p>{t("the_following_standard_univers_2")}<br></br>
                                        </p>
                                        <p>{t("1__a_minimum_of_gpa_3_0_which")}<br></br>{t("mature_candidates_with_signifi")}<br></br>
                                        </p>
                                        <p>{t("2__ielts_academic__ukvi_versio")}</p>
                                        <p>{t("60___78___toefl")}<br></br>{t("b2_level___cefr__common_europe")}<br></br>{t("120_125_scores_on_duolingo_eng")}<br></br>{t("please_note_that_university_of")}<br></br>{t("or__obtained_first_degree_in_a")}<br></br>{t("obtained_first_degree_from_the")}<br></br>{t("pass_rau_internal_integrated_e")}</p>
                                   </div>}

                              {activeTab === "fees" && <div className="content-pane fade-in">
                                        <h2>{t("fees")}</h2>
                                        <p>{t("tuition_fees_uzb_44_800_000_uz")}</p>
                                        <p>{t("tuition_fees_international_5_5")}</p>
                                        <p>{t("duration_1_year___full_time__")}<br></br>
                                        </p>
                                        <p>{t("tuition_fees_cover_the_cost_of")}</p>
                                   </div>}

                              {/* {activeTab === "scholarships" && (
                                   <div className="content-pane fade-in">
                                        <h2>Scholarships</h2>
                                        <p>
                                             The International Agriculture University offers scholarships and grants for local students. Grantees will have an opportunity to study postgraduate or undergraduate courses with 0 tuition fee, covered by the Ministry of Agriculture. Currently, local students of the International Agriculture University are able to apply for scholarships from the Ministry of Agriculture and more.
                                        </p>
                                   </div>
                               )} */}
                         </div>

                         {/* BOTTOM ROW: PROFILE & APPLICATIONS */}
                         <div className="agri-bottom-row">
                              {/* PROFILE CARD */}
                              <div className="profile-card">
                                   <a href="mailto:bakhtiyorjon.abdusattarov@iau.uz" className="profile-email-icon" title="Send Email">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                   </a>
                                   <img src={baxtiyorImg} alt="Dr. Abdusattarov Bakhtiyorjon" />
                                   <div className="profile-info">
                                        <h4>{t("dr__abdusattarov_bakhtiyorjon")}</h4>
                                        <p>{t("head_of_department_of_master_s")}</p>
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