import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import javlonbekImg from "../../images/javlonbek-asrakulov.png";
export default function AgroLogistics() {
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
                              <Link to="/admissions/undergraduate">{t("undergraduate")}</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">{t("bsc__hons__agro_logistics")}</span>
                         </div>
                         <h1>{t("bsc__hons__agro_logistics")}</h1>
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
                                        <p>{t("bsc_agro_logistics_focuses_on")}</p>
                                   </div>}

                              {activeTab === "modules" && <div className="content-pane fade-in">
                                        <h2>{t("modules")}</h2>
                                        <p>{t("all_our_programmes_provide_pra")}</p><br></br>
                                        <h3>{t("year_one")}</h3>
                                        <p>{t("u1021___people_and_organisatio")}<br></br>{t("u1015___business_finance")}<br></br>{t("u1019___global_business_enviro")}<br></br>{t("u1018___principles_of_marketin")}<br></br>{t("u1020___principles_of_economic")}<br></br>{t("u1001___english_for_academic_p_1")}<br></br>{t("u1022___business_informatics")}<br></br>{t("u1013___intro_to_the_agri_food")}</p>
                                        <h3>{t("year_two")}</h3>
                                        <p>{t("u2032___logistics_information")}<br></br>{t("u2017___practical_e__business")}<br></br>{t("u2011___introduction_to_resear")}<br></br>{t("u2004___personal_and_professio")}<br></br>{t("u2018___operations_management")}<br></br>{t("u2019___agricultural_products")}<br></br>{t("u2020___supply_chain_managemen")}<br></br>{t("u2021___logistics_systems_plan")}</p>
                                        <h3>{t("year_three")}</h3>
                                        <p>{t("u3004___dissertation")}<br></br>{t("u3016___international_business")}<br></br>{t("u3017___smart_food_systems")}<br></br>{t("u3018___international_logistic")}<br></br>{t("u3019___international_marketin")}<br></br>{t("u3020___strategic_management")}<br></br>{t("u3021___corporate_finance")}</p>
                                        <h2>{t("careers_and_graduate_destinati")}</h2>
                                        <p>{t("upon_graduation__students_are_1")}<br></br>
                                        </p>
                                        <p>{t("you_could_progress_into_a_rang")}<br></br>
                                        </p>
                                        <p>{t("agricultural_policy")}<br></br>{t("farm_management")}<br></br>{t("enterprise_unit_operator_in_ag")}<br></br>{t("food_security_and_safety")}<br></br>{t("farm_business___agricultural_c")}<br></br>
                                        </p>
                                   </div>}

                              {activeTab === "entryRequirements" && <div className="content-pane fade-in">
                                        <h2>{t("entry_requirements")}</h2>
                                        <p>{t("students_completing_successful")}<br></br>
                                        </p>
                                        <p>{t("1__ielts_academic__ukvi_versio")}<br></br>{t("b1_level___cefr__common_europe")}<br></br>{t("85_90_scores_on_duolingo_engli")}<br></br>{t("please_note_that_university_of")}<br></br>{t("2__104_ucas_tariff_points_or_t")}<br></br>{t("successful_completion_of_year")}<br></br>{t("successful_completion_of_year_1")}<br></br>
                                        </p>
                                   </div>}

                              {activeTab === "fees" && <div className="content-pane fade-in">
                                        <h2>{t("fees")}</h2>
                                        <p>{t("tuition_fees_uzb_29_900_000_uz")}</p>
                                        <p>{t("tuition_fees_international_3_7")}</p>
                                        <p>{t("duration_4_years___full_time")}</p>
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
                                        <Link to="/admissions/undergraduate" className="active-link">{t("undergraduate")}</Link>
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